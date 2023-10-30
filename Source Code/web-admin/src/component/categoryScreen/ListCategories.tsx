import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchAllCategories, saveCategory } from "../../service/productService";

interface listCategoriesType {
  productName: string;
  parentCategoty: string;
  properties: propertiesType;
}
interface propertiesType {
  nameProp: string;
  option: string;
}
interface parentCategoriesType {
  id: number;
  categoryName: string;
  parent: string;
}
const ListCategories = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [listCategories, setListCategories] = useState<
    parentCategoriesType[] | null
  >();
  const [properties, setProperties] = useState<propertiesType[]>();
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoty, setParentCategoty] = useState("");

  // start code
  useEffect(() => {
    getCategoryLists();
  }, []);
  const getCategoryLists = async () => {
    let { data } = await fetchAllCategories();
    console.log("category list: ", data);
    if (data.result) {
      setListCategories(data.data);
    } else {
      setListCategories(null);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditCategory = () => {
    navigate("/categories/edit-category");
  };
  const handleAddProperties = () => {
    let propTMP: propertiesType[] = Object.assign([], properties);
    propTMP?.push({ nameProp: "", option: "" });
    setProperties(propTMP);
  };
  const removeProperty = (index: number) => {
    let propRemove: propertiesType[] = Object.assign([], properties);
    propRemove.splice(index, 1);
    setProperties(propRemove);
  };
  const handleChangePropName = (index: number, value: string) => {
    let propChange: propertiesType[] = Object.assign([], properties);
    propChange[index].nameProp = value;
    console.log("change properties: ", propChange);
    setProperties(propChange);
  };
  const handleChangeOption = (index: number, value: string) => {
    let propChange: propertiesType[] = Object.assign([], properties);
    propChange[index].option = value;
    setProperties(propChange);
  };
  const handleSaveCategory = async () => {
    let dataApi = {
      categoryName,
      parent: parentCategoty,
      properties: properties ? JSON.stringify(properties) : "",
    };
    let { data } = await saveCategory(dataApi);
    console.log("data save: ", data);

    if (data.result) {
      getCategoryLists();
    }
  };

  return (
    <>
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
                placeholder="Tên phân loại sản phẩm"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <select
                className="form-select text-dark col-sm-6"
                aria-label="Default select example"
                defaultValue="default"
                onChange={(e) => setParentCategoty(e.target.value)}
                value={parentCategoty}
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
                    placeholder="Tên thuộc tính"
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
                    placeholder="Tên lựa chọn"
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
            className="btn btn-primary"
            onClick={handleSaveCategory}
          >
            <i className="fa-regular fa-floppy-disk pe-2"></i> Lưu
          </button>
        </div>

        <div className="mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-dark fs-6">
                  Tên loại
                </th>
                <th scope="col" className="text-dark fs-6">
                  Phân loại cha
                </th>
                <th scope="col" className="text-dark fs-6">
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody>
              {listCategories &&
                listCategories.map((cate, index) => (
                  <tr key={`product${index}`}>
                    <td>{cate.categoryName}</td>
                    <td>{cate.parent}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger me-2"
                        onClick={handleShow}
                      >
                        <i className="fa-regular fa-trash-can pe-2"></i>Xóa
                      </button>
                      <button
                        type="button"
                        className="btn btn-info"
                        onClick={handleEditCategory}
                      >
                        <i className="fa-solid fa-pen pe-2"></i>Sửa
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Cảnh báo!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Bạn có thực sự muốn xóa phân loại sản phẩm này?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="danger" onClick={handleClose}>
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default ListCategories;
