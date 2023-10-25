import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ListCategories = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const listCategories = [
    {
      name: "Áo khoác",
      parentCategoty: "",
      properties: [
        { nameProp: "color", option: "red,black,blue" },
        { nameProp: "size", option: "s,m,l" },
      ],
    },
    {
      name: "Áo khoác ",
      parentCategoty: "Áo",
      properties: [
        { nameProp: "color", option: "red,black,blue" },
        { nameProp: "size", option: "s,m,l" },
      ],
    },
    {
      name: "Áo khoác",
      parentCategoty: "",
      properties: [
        { nameProp: "color", option: "red,black,blue" },
        { nameProp: "size", option: "s,m,l" },
      ],
    },
  ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEditCategory = () => {
    navigate("/categories/edit-category");
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
                placeholder="Tên loại sản phẩm"
              />
            </div>
            <div className="col-sm-6">
              <select
                className="form-select text-dark col-sm-6"
                aria-label="Default select example"
                defaultValue="default"
              >
                <option value="default">No parent category</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">
            Thuộc tính
          </label>
          <div>
            <button type="button" className="btn btn-outline-secondary">
              <i className="fa-solid fa-plus"></i> Thêm thuộc tính
            </button>
          </div>
        </div>

        <div>
          <button type="button" className="btn btn-primary">
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
                    <td>{cate.name}</td>
                    <td>{cate.parentCategoty}</td>
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
          <Modal.Body>Bạn có thực sự muốn xóa loại sản phẩm này?</Modal.Body>
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
