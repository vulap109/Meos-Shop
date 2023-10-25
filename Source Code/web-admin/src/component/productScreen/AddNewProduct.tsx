import React from "react";
import "../../styles/product.scss";

const AddNewProduct = () => {
  const imgProduct = [1, 2, 3, 4, 5];

  return (
    <>
      <div>
        <h3 className="text-dark">Edit item</h3>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">
            Tên sản phẩm
          </label>
          <input
            type="text"
            className="form-control"
            id="productName"
            placeholder="Tên sản phẩm"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Loại sản phẩm
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            placeholder="Tên sản phẩm"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="color" className="form-label">
            Màu sắc
          </label>
          <input
            type="text"
            className="form-control"
            id="color"
            placeholder="Tên sản phẩm"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="size" className="form-label">
            Kích cỡ
          </label>
          <input
            type="text"
            className="form-control"
            id="size"
            placeholder="Tên sản phẩm"
          />
        </div>
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
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                    alt="item"
                    height={130}
                    className="img-product-border"
                  />
                </div>
              ))}

            <button className="btn justify-content-center align-items-center px-0 bg-white img-product-container">
              <i className="fa-solid fa-upload fs-1"></i>
              <h5>Add image</h5>
            </button>
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
          />
        </div>

        <div className="row">
          <button
            type="button"
            className="btn btn-success me-2 mb-2 mb-sm-0 col-sm-3"
          >
            <i className="fa-regular fa-floppy-disk pe-2"></i>Lưu sản phẩm
          </button>
          <button type="button" className="btn btn-danger col-sm-3">
            <i className="fa-solid fa-ban pe-2"></i>Hủy thay đổi
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;
