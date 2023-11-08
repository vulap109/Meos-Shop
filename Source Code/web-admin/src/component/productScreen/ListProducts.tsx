import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { fetchAllProducts } from "../../service/productService";

const ListProducts = () => {
  const [listProducts, setListProducts] = useState<any | null>();

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    let { data } = await fetchAllProducts();
    if (data && data.result) {
      setListProducts(data.data);
    } else {
      setListProducts(null);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddItem = () => {
    navigate("/products/add-new-product");
  };
  const handleEditProduct = (id: number) => {
    navigate("/products/edit-product/" + id);
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
                  ID
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
                listProducts.map((product: any) => (
                  <tr key={`product${product.id}`}>
                    <th scope="row">{product.id}</th>
                    <td>{product.productName}</td>
                    <td>{product.price} đ</td>
                    <td>{product.description}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-info me-2"
                        onClick={() => handleEditProduct(product.id)}
                      >
                        <i className="fa-solid fa-pen pe-2"></i>Sửa
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleShow}
                      >
                        <i className="fa-regular fa-trash-can pe-2"></i>Xóa
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
