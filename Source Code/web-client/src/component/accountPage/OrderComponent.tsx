import React from "react";

const OrderComponent = () => {
  return (
    <>
      <h4>Đơn hàng của bạn</h4>
      <hr />
      <div className="card p-0">
        <div className="row justify-content-between align-items-center m-0 mt-2">
          <div className="col-lg-6">
            <div>
              <span className="fw-bold pe-3">ID đơn hàng: 12345</span>
              <span className="text-success fw-bold">Shipped</span>
            </div>
            <span className="text-muted">Ngày: 17/10/2023</span>
          </div>
          <div className="col-lg-6">
            <div className="float-end">
              <button className="btn btn-outline-danger me-3">
                Hủy đơn hàng
              </button>
              <button className="btn btn-primary">Theo dõi đơn hàng</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row justify-content-between m-0">
          <div className="d-flex flex-column border-end col-lg-4">
            <span className="text-muted">Liên hệ</span>
            <span className="">Vũ Lập</span>
            <span className="">Phone: 096***97</span>
            <span className="">Email: vu***109@gmail.com</span>
          </div>
          <div className="d-flex flex-column border-end col-lg-4">
            <span className="text-muted">Địa chỉ nhận hàng</span>
            <span className="">Tòa nhà Simco, 28 Phạm Hùng</span>
            <span className="">Phường Mỹ Đình 1, Quận Nam Từ Liêm, Hà nội</span>
          </div>
          <div className="d-flex flex-column col-lg-4">
            <span className="text-muted">Thanh toán</span>
            <span className="">TT khi nhận hàng</span>
            <span className="">Phí Ship: 30.000đ</span>
            <span className="fw-bold">Tổng: 2.000.000đ</span>
          </div>
        </div>
        <hr />
        <div className="row justify-content-between m-0 mb-3">
          <div className="d-flex flex-row border-end col-lg-4">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
              className="border rounded me-3 img-product"
              alt="product"
            />
            <div className="d-flex flex-column">
              <span className="">Áo khoác phao</span>
              <span className="">Size M</span>
              <span className="fw-bold">200.000đ x2</span>
            </div>
          </div>
          <div className="d-flex flex-row border-end col-lg-4">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
              className="border rounded me-3 img-product"
              alt="product"
            />
            <div className="d-flex flex-column">
              <span className="">Áo khoác phao</span>
              <span className="">Size M</span>
              <span className="fw-bold">200.000đ x2</span>
            </div>
          </div>
          <div className="d-flex flex-row col-lg-4">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
              className="border rounded me-3 img-product"
              alt="product"
            />
            <div className="d-flex flex-column">
              <span className="">Áo khoác phao</span>
              <span className="">Size M</span>
              <span className="fw-bold">200.000đ x2</span>
            </div>
          </div>
        </div>
      </div>

      {/* order 2 */}
      <div className="card p-0 mt-3">
        <div className="row justify-content-between align-items-center m-0 mt-2">
          <div className="col-lg-6">
            <div>
              <span className="fw-bold pe-3">ID đơn hàng: 12345</span>
              <span className="text-success fw-bold">Shipped</span>
            </div>
            <span className="text-muted">Ngày: 17/10/2023</span>
          </div>
          <div className="col-lg-6">
            <div className="float-end">
              <button className="btn btn-outline-danger me-3">
                Hủy đơn hàng
              </button>
              <button className="btn btn-primary">Theo dõi đơn hàng</button>
            </div>
          </div>
        </div>
        <hr />
        <div className="row justify-content-between m-0">
          <div className="d-flex flex-column border-end col-lg-4">
            <span className="text-muted">Liên hệ</span>
            <span className="">Vũ Lập</span>
            <span className="">Phone: 096***97</span>
            <span className="">Email: vu***109@gmail.com</span>
          </div>
          <div className="d-flex flex-column border-end col-lg-4">
            <span className="text-muted">Địa chỉ nhận hàng</span>
            <span className="">Tòa nhà Simco, 28 Phạm Hùng</span>
            <span className="">Phường Mỹ Đình 1, Quận Nam Từ Liêm, Hà nội</span>
          </div>
          <div className="d-flex flex-column col-lg-4">
            <span className="text-muted">Thanh toán</span>
            <span className="">TT khi nhận hàng</span>
            <span className="">Phí Ship: 30.000đ</span>
            <span className="fw-bold">Tổng: 2.000.000đ</span>
          </div>
        </div>
        <hr />
        <div className="row justify-content-between m-0 mb-3">
          <div className="d-flex flex-row border-end col-lg-4">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
              className="border rounded me-3 img-product"
              alt="product"
            />
            <div className="d-flex flex-column">
              <span className="">Áo khoác phao</span>
              <span className="">Size M</span>
              <span className="fw-bold">200.000đ x2</span>
            </div>
          </div>
          <div className="d-flex flex-row border-end col-lg-4">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
              className="border rounded me-3 img-product"
              alt="product"
            />
            <div className="d-flex flex-column">
              <span className="">Áo khoác phao</span>
              <span className="">Size M</span>
              <span className="fw-bold">200.000đ x2</span>
            </div>
          </div>
          <div className="d-flex flex-row col-lg-4">
            <img
              src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
              className="border rounded me-3 img-product"
              alt="product"
            />
            <div className="d-flex flex-column">
              <span className="">Áo khoác phao</span>
              <span className="">Size M</span>
              <span className="fw-bold">200.000đ x2</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderComponent;
