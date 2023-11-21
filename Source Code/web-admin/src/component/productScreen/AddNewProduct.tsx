import React, { useEffect, useState } from "react";
import "../../styles/product.scss";
import { listCategoriesType, propertiesType } from "../../config/customType";
import { fetchAllCategories } from "../../service/categoryService";
import {
  fetchProductById,
  saveProduct,
  updateProduct,
  uploadImagesAPI,
} from "../../service/productService";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";
import {
  closeModalAction,
  openModalAction,
} from "../../redux/modal/modalAction";

const AddNewProduct = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const dispatch: Dispatch<any> = useDispatch();

  const [propertiesToFill, setPropertiesToFill] = useState<
    propertiesType[] | null
  >();
  const [listCategories, setListCategories] = useState<
    listCategoriesType[] | null
  >();
  const [productName, setProductName] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [productProperties, setProductProperties] = useState();
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);
  const [fileUpload, setFileUpload] = useState<FileList | undefined>();
  const [imgProduct, setImgProduct] = useState<any[]>();

  useEffect(() => {
    getCategoryLists();
  }, []);
  useEffect(() => {
    if (location.pathname.includes("edit-product")) {
      getProducts();
      setIsEditMode(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // get product by id in edit mode
  const getProducts = async () => {
    if (params.id) {
      let { data } = await fetchProductById(params.id);
      console.log("check get prodcut by id ", data);
      if (data.result) {
        setProductName(data.data.productName);
        setCategorySelected(data.data.categoryId);
        setProductProperties(
          data.data.properties ? JSON.parse(data.data.properties) : []
        );
        setDescription(data.data.description);
        setPrice(data.data.price);
        setImgProduct(JSON.parse(data.data.images));
        if (data.data.Category) {
          setProperties(data.data.Category.properties);
        }
      } else {
        dispatch(openModalAction(data.message, closeMsg));
      }
    }
  };
  // get list categories
  const getCategoryLists = async () => {
    let { data } = await fetchAllCategories();
    if (data.result) {
      setListCategories(data.data);
    } else {
      setListCategories(null);
    }
  };
  // selectet category and show properties
  const handleSelectedCategory = (value: string) => {
    setCategorySelected(value);
    let catInfo = listCategories?.find((cat) => cat.id.toString() === value);
    console.log(">>> check select cat", catInfo);

    if (catInfo && catInfo.properties) {
      let catProperties = JSON.parse(catInfo.properties.toString());
      let productp: any = Object.assign({}, productProperties);
      if (catProperties) {
        catProperties.map((cp: propertiesType) => {
          cp.option = cp.option.toString().split("||");
          productp[cp.nameProp] = cp.option[0];
          return cp;
        });
      }
      console.log(">>> check prop cat", catProperties);

      setProductProperties(productp);
      setPropertiesToFill(catProperties);
    } else {
      setPropertiesToFill(null);
    }
  };
  // display properties to select box
  const setProperties = (properties: string) => {
    let catProperties = JSON.parse(properties.toString());
    if (catProperties) {
      catProperties.map(
        (cp: propertiesType) => (cp.option = cp.option.toString().split(","))
      );
    }
    setPropertiesToFill(catProperties);
  };
  // set prpperties is selected
  const handleSelectedProperties = (propKey: string, value: string) => {
    let productProp: any = Object.assign({}, productProperties);
    productProp[propKey] = value;
    console.log(">>> check selected product prop ", productProp);
    setProductProperties(productProp);
  };
  // save product
  const handleSaveProduct = async () => {
    //check filed requried
    if (checkRequire()) {
      return;
    }
    if (!fileUpload) return;

    // prepare images to upload
    var dataImg = new FormData();
    for (let index = 0; index < fileUpload.length; index++) {
      dataImg.append("images", fileUpload[index]);
    }
    let { data } = await uploadImagesAPI(dataImg);
    if (data && data.result) {
      const images = data.images;
      console.log("upload images ", images);
      let dataSave = {
        id: isEditMode ? params.id : "",
        productName: productName,
        properties: JSON.stringify(productProperties),
        images: JSON.stringify(images),
        description: description,
        price: price,
        categoryId: categorySelected,
      };
      console.log("data save product ", dataSave);
      let res;
      if (isEditMode) {
        // update product in edit mode
        res = await updateProduct(dataSave);
      } else {
        // create product
        res = await saveProduct(dataSave);
      }
      console.log("data save: ", res);

      if (res && res.data.result) {
        dispatch(openModalAction("Save product success!", closeMsg));
      } else {
        // if user do not have permission then redirect to product lists
        if (res && res.status === 403) {
          dispatch(openModalAction(res.data.message, closeMsg));
        } else {
          dispatch(
            openModalAction(res.data.message, () =>
              dispatch(closeModalAction())
            )
          );
        }
      }
    } else {
      dispatch(
        openModalAction("can not upload your images", () =>
          dispatch(closeModalAction())
        )
      );
    }
  };
  // close modal message
  const closeMsg = () => {
    dispatch(closeModalAction());
    navigate("/products");
  };
  const handleCancel = () => {
    navigate("/products");
  };
  // check filed has to fill
  const checkRequire = (): boolean => {
    if (!productName) {
      dispatch(
        openModalAction("product name is required!", () =>
          dispatch(closeModalAction())
        )
      );
      return true;
    }
    if (!fileUpload || (fileUpload && fileUpload.length < 0)) {
      dispatch(
        openModalAction("you need one or more image to this product!", () =>
          dispatch(closeModalAction())
        )
      );
      return true;
    }
    if (!description) {
      dispatch(
        openModalAction("Description is required!", () =>
          dispatch(closeModalAction())
        )
      );
      return true;
    }
    if (!price) {
      dispatch(
        openModalAction("price is required!", () =>
          dispatch(closeModalAction())
        )
      );
      return true;
    }
    return false;
  };
  const uploadImages = async (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & { files: FileList };
    console.log("check upload img ", target.files);
    // check file is images
    setFileUpload(target.files);

    // let dataPreview:any[] = [];
    // for (let index = 0; index < target.files.length; index++) {
    //   const file = new FileReader();
    //    file.onload = () => {
    //     dataPreview.push({
    //       src: file.result?.toString(),
    //     });
    //   };
    //   file.readAsDataURL(target.files[index]);
    // }
    // console.log("check dat preview", dataPreview);

    // setFilePreview(dataPreview);
  };

  return (
    <>
      <div>
        <h3 className="text-dark">{isEditMode ? "Edit item" : "Add item"}</h3>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Tên sản phẩm
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Tên sản phẩm"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Loại sản phẩm
          </label>
          <select
            className="form-select text-dark col-sm-6"
            aria-label="Default select example"
            onChange={(e) => handleSelectedCategory(e.target.value)}
            value={categorySelected}
            defaultValue={"default"}
          >
            <option value="default">Uncategorized</option>
            {listCategories &&
              listCategories.map((pa) => (
                <option value={pa.id} key={`cat${pa.id}`}>
                  {pa.categoryName}
                </option>
              ))}
          </select>
        </div>
        {propertiesToFill &&
          productProperties &&
          propertiesToFill.map((p) => (
            <div className="mb-3" key={`prop${p.nameProp}`}>
              <label htmlFor="color" className="form-label">
                {p.nameProp}
              </label>
              <select
                className="form-select text-dark col-sm-6"
                aria-label="Default select example"
                onChange={(e) =>
                  handleSelectedProperties(p.nameProp, e.target.value)
                }
                value={productProperties[p.nameProp]}
              >
                {p.option &&
                  p.option.map((pa) => (
                    <option value={pa} key={`op${pa}`}>
                      {pa}
                    </option>
                  ))}
              </select>
            </div>
          ))}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Ảnh
          </label>
          <div className="row m-0">
            {imgProduct &&
              imgProduct.map((item) => (
                <div
                  className="card px-0 me-3 mb-3 img-product-container"
                  key={`img${item}`}
                >
                  <img
                    src={item.src}
                    alt="item"
                    className="img-product-border img-product-container"
                  />
                </div>
              ))}
            <label className="btn px-0 bg-white img-product-container">
              <div className="justify-content-center align-items-center h-100 d-flex flex-column">
                <i className="fa-solid fa-upload fs-1"></i>
                <h5>Add image</h5>
              </div>
              <input
                type="file"
                multiple
                className="d-none"
                onChange={uploadImages}
                accept="image/*"
              />
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Mô tả
          </label>
          <textarea
            className="form-control"
            id="description"
            rows={3}
            placeholder="Mô tả sản phẩm ..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Giá tiền (VND)
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="0 đ"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="row">
          <button
            type="button"
            className="btn btn-success me-2 mb-2 mb-sm-0 col-sm-3"
            onClick={handleSaveProduct}
          >
            <i className="fa-regular fa-floppy-disk pe-2"></i>Lưu sản phẩm
          </button>
          <button
            type="button"
            className="btn btn-danger col-sm-3"
            onClick={handleCancel}
          >
            <i className="fa-solid fa-ban pe-2"></i>Hủy thay đổi
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;
