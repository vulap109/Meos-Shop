import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ListProducts = () => {
  const listProducts = [
    {
      name: "Áo khoác blue",
      price: "250.000",
      describe: "áo khoác làm từ lông cừu, ...",
    },
    {
      name: "Áo khoác blue",
      price: "250.000",
      describe: "áo khoác làm từ lông cừu, ...",
    },
    {
      name: "Áo khoác blue",
      price: "250.000",
      describe: "áo khoác làm từ lông cừu, ...",
    },
    {
      name: "Áo khoác blue",
      price: "250.000",
      describe: "áo khoác làm từ lông cừu, ...",
    },
    {
      name: "Áo khoác blue",
      price: "250.000",
      describe: "áo khoác làm từ lông cừu, ...",
    },
    {
      name: "Áo khoác blue",
      price: "250.000",
      describe: "áo khoác làm từ lông cừu, ...",
    },
    {
      name: "Áo khoác blue",
      price: "250.000",
      describe: "áo khoác làm từ lông cừu, ...",
    },
  ];

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddItem = () => {
    navigate("/products/add-new-product");
  };
  return (
    <>
      <div className="d-flex flex-column">
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddItem}
          >
            <i className="fa-solid fa-plus"></i> Add new product
          </button>
        </div>

        <div className="mt-5">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-dark fs-6">
                  STT
                </th>
                <th scope="col" className="text-dark fs-6">
                  Tên sản phẩm
                </th>
                <th scope="col" className="text-dark fs-6">
                  Giá tiền
                </th>
                <th scope="col" className="text-dark fs-6">
                  Mô tả
                </th>
                <th scope="col" className="text-dark fs-6">
                  Chức năng
                </th>
              </tr>
            </thead>
            <tbody>
              {listProducts &&
                listProducts.map((product, index) => (
                  <tr key={`product${index}`}>
                    <th scope="row">{index + 1}</th>
                    <td>{product.name}</td>
                    <td>{product.price} đ</td>
                    <td>{product.describe}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger me-2"
                        onClick={handleShow}
                      >
                        <i className="fa-regular fa-trash-can pe-2"></i>Xóa
                      </button>
                      <button type="button" className="btn btn-info">
                        <i className="fa-solid fa-pen pe-2"></i>Sửa
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cảnh báo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có thực sự muốn xóa sản phẩm này?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Hủy
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListProducts;
