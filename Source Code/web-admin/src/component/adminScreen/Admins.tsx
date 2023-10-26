import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Admins = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const listAdmin = [
    {
      email: "admin@example.com",
      date: "25/09/2023 8:03",
    },
    {
      email: "admin2@example.com",
      date: "25/09/2023 8:03",
    },
    {
      email: "admin3@example.com",
      date: "25/09/2023 8:03",
    },
  ];
  return (
    <>
      <div className="d-flex flex-column text-dark">
        <h3 className="text-dark">Admins</h3>

        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">
            Tạo tài khoản admin
          </label>
          <div className="row">
            <div className="col-sm-6 mb-sm-0 mb-2">
              <input
                type="text"
                className="form-control text-dark"
                id="categoryName"
                placeholder="email hoặc id"
              />
            </div>
            <div className="col-sm-3">
              <button type="button" className="btn btn-primary">
                <i className="fa-solid fa-plus"></i> Thêm Admin
              </button>
            </div>
          </div>
        </div>

        <div className="mt-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" className="text-dark fs-6">
                  Danh sách admins
                </th>
              </tr>
            </thead>
            <tbody>
              {listAdmin &&
                listAdmin.map((ad, index) => (
                  <tr key={`admin${index}`}>
                    <td>{ad.email}</td>
                    <td>{ad.date}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleShowModal}
                      >
                        <i className="fa-solid fa-trash-can pe-2"></i>Xóa
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cảnh báo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Bạn có thực sự muốn xóa tài khoản admin này?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Hủy
          </Button>
          <Button variant="danger" onClick={handleCloseModal}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Admins;
