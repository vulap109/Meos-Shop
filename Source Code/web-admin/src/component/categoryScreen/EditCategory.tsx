import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  fetchAllCategories,
  updateCategory,
} from "../../service/categoryService";
import CustomModal from "../custom/CustomModal";

interface listCategoriesType {
  id: number;
  categoryName: string;
  parent: string;
  properties: propertiesType;
}
interface propertiesType {
  nameProp: string;
  option: string;
}
const EditCategory = () => {
  const [listCategories, setListCategories] = useState<
    listCategoriesType[] | null
  >();
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoty, setParentCategoty] = useState("");
  const [properties, setProperties] = useState<propertiesType[]>();

  const [show, setShow] = useState(false);
  const [messageModal, setMessageModal] = useState("");
  const [confirmation, setConfirmation] = useState(true);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    getCategoryLists();
  }, []);

  const getCategoryLists = async () => {
    if (params.id) {
      let { data } = await fetchAllCategories();
      if (data.result) {
        setListCategories(data.data);
        let categoryItem = data.data.find(
          (d: listCategoriesType) => d.id.toString() === params.id
        );
        console.log(">>> check categpry edit ", categoryItem);
        if (categoryItem) {
          setCategoryName(categoryItem.categoryName);
          setParentCategoty(categoryItem.parent);
          setProperties(JSON.parse(categoryItem.properties));
        } else {
          navigate("/categories");
        }
      } else {
        setListCategories(null);
      }
    }
  };
  const handleAddProperties = () => {
    let propTMP: propertiesType[] = Object.assign([], properties);
    propTMP?.push({ nameProp: "", option: "" });
    console.log("add properties: ", propTMP);
    setProperties(propTMP);
  };
  const removeProperty = (index: number) => {
    let propRemove: propertiesType[] = Object.assign([], properties);
    propRemove.splice(index, 1);
    setProperties(propRemove);
  };
  const handleBackToCategories = () => {
    navigate("/categories");
  };
  const handleChangePropName = (index: number, value: string) => {
    let propChange: propertiesType[] = Object.assign([], properties);
    propChange[index].nameProp = value;
    setProperties(propChange);
  };
  const handleChangeOption = (index: number, value: string) => {
    let propChange: propertiesType[] = Object.assign([], properties);
    propChange[index].option = value;
    setProperties(propChange);
  };
  const handleSaveCategory = async () => {
    let dataApi = {
      id: params.id,
      categoryName,
      parent: parentCategoty,
      properties: JSON.stringify(properties),
    };
    let { data } = await updateCategory(dataApi);
    console.log("data save: ", dataApi);
    if (data.result) {
      handleBackToCategories();
    } else {
      handleShow(data.message, false);
    }
  };
  const handleClose = () => setShow(false);
  const handleShow = (message: string, confirmation: boolean) => {
    setShow(true);
    setMessageModal(message);
    setConfirmation(confirmation);
  };

  return (
    <div>
      <div className="d-flex flex-column text-dark">
        <h3 className="text-dark">Categories</h3>
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">
            Tạo phân loại sản phẩm
          </label>
          <div className="row">
            <div className="col-sm-6 mb-sm-0 mb-2">
              <input
                type="text"
                className="form-control text-dark"
                id="categoryName"
                placeholder="Tên loại sản phẩm"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <select
                className="form-select text-dark col-sm-6"
                aria-label="Default select example"
                onChange={(e) => setParentCategoty(e.target.value)}
                value={parentCategoty}
                defaultValue="default"
              >
                <option value="default">No parent category</option>
                {listCategories &&
                  listCategories.map((pa) => (
                    <option value={pa.categoryName} key={`cat${pa.id}`}>
                      {pa.categoryName}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">
            Thuộc tính
          </label>
          <div>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleAddProperties}
            >
              <i className="fa-solid fa-plus"></i> Thêm thuộc tính
            </button>
          </div>
          {properties &&
            properties.map((p, index) => (
              <div className="row mt-2" key={`prop${index}`}>
                <div className="col-sm-5 mb-sm-0 mb-2">
                  <input
                    type="text"
                    className="form-control text-dark"
                    id="categoryName"
                    placeholder="Tên loại sản phẩm"
                    value={p.nameProp}
                    onChange={(e) =>
                      handleChangePropName(index, e.target.value)
                    }
                  />
                </div>
                <div className="col-sm-5">
                  <input
                    type="text"
                    className="form-control text-dark"
                    id="categoryName"
                    placeholder="Tên loại sản phẩm"
                    value={p.option}
                    onChange={(e) => handleChangeOption(index, e.target.value)}
                  />
                </div>
                <div className="col-sm-2">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => removeProperty(index)}
                  >
                    <i className="fa-regular fa-trash-can pe-2"></i> Xóa
                  </button>
                </div>
              </div>
            ))}
        </div>

        <div>
          <button
            type="button"
            className="btn btn-primary me-3"
            onClick={handleSaveCategory}
          >
            <i className="fa-regular fa-floppy-disk pe-2"></i> Lưu
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleBackToCategories}
          >
            <i className="fa-solid fa-ban pe-2"></i> Hủy
          </button>
        </div>
      </div>
      {/* modal confirm delete category */}
      <CustomModal
        isOpen={show}
        handleClose={handleClose}
        confirmation={confirmation}
        message={messageModal}
        handleSuccess={handleClose}
      />
    </div>
  );
};

export default EditCategory;
