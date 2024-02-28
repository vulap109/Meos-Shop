import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import RecommendedItems from "../RecommendedItems";
import "../../styles/ShoppingCart.scss";
import { useSelector } from "react-redux";
import { formatNumber } from "../../utils/format";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const carts = useSelector((state: state) => state.cartState);
  const [totalBillAfter, setTotalBillAfter] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [deliveryFee, setDelivaryFee] = useState(30000);

  const handlePurchase = () => {
    navigate("/check-out");
  };
  const goBackToShop = () => {
    navigate("/");
  };
  const prepareForBill = () => {
    console.log("check cart: ", carts);
    let totalBill = 0;
    carts.carts.map((item) => {
      let total = 0;
      total = item.quantity * (+item.price - (+item.price * item.discount / 100));
      totalBill += total;
    });
    console.log("check total bill: ", totalBill);

    setTotalBill(totalBill);
    setTotalBillAfter(totalBill + deliveryFee);
  }
  useEffect(() => {
    prepareForBill();
  }, [carts.numberCart])

  return (
    <>
      {/* cart + summary */}
      <section className="bg-light my-3">
        <div className="container">
          <div className="row">
            {/* cart */}
            <div className="col-lg-8">
              <div className="card border shadow-0">
                <div className="m-4">
                  <h4 className="card-title mb-4">Giỏ hàng của bạn</h4>
                  <hr />

                  {carts.numberCart > 0 ?
                    carts.carts && carts.carts.map((product, index) => (
                      <div className="row gy-3 mb-4">
                        <div className="col-lg-7 col-xl-8">
                          <div>
                            <div className="d-flex">
                              <img
                                src={product.image}
                                className="border rounded me-3 img-product"
                                alt="product"
                              />
                              <div className="d-flex flex-column mt-2">
                                <NavLink to="" className="nav-link">
                                  <p className="fw-bold">{product.productName}</p>
                                </NavLink>
                                <div className="d-flex flex-row">
                                  {product.discount ?
                                    <>
                                      <p className="text-muted">{formatNumber(+product.price - (+product.price * product.discount / 100))}</p>
                                      <del className="text-muted ms-3 fw-lighter">{formatNumber(+product.price)}</del>
                                    </>
                                    :
                                    <p className="text-muted">{formatNumber(+product.price)}</p>
                                  }
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 col-6 d-flex flex-column maxwidth-del-btn">
                          <div className="d-flex justify-content-center">
                            {
                              product.discount ?
                                <h6>{formatNumber(product.quantity * (+product.price - (+product.price * product.discount / 100)))}</h6>
                                :
                                <h6>{formatNumber(product.quantity * (+product.price))}</h6>
                            }
                          </div>
                          <div className="input-group border border-secondary rounded">
                            <button className="btn btn-light border-end">
                              <i className="fa-solid fa-minus"></i>
                            </button>
                            <input type="text"
                              className="form-control border-0"
                              aria-describedby="btnGroupQuantity"
                              disabled
                              value={product.quantity} />
                            <button className="btn btn-light border-start">
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          </div>
                        </div>
                        <div className="col-lg col-sm-6 col-5 d-flex justify-content-end align-items-end align-items-lg-center">
                          <div className="float-md-end">
                            <button
                              type="button"
                              className="btn btn-outline-danger"
                            >
                              <i className="fa-solid fa-trash-can"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                    :
                    <h5>Giỏ hàng của bạn đang trống</h5>
                  }

                  {/* demo item */}
                  {/* <div className="row gy-3 mb-4">
                    <div className="col-lg-5">
                      <div className="me-lg-5">
                        <div className="d-flex">
                          <img
                            src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
                            className="border rounded me-3 img-product"
                            alt="product"
                          />
                          <div className="">
                            <NavLink to="" className="nav-link">
                              Mens T-shirt Cotton Base
                            </NavLink>
                            <p className="text-muted">Blue, Medium</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                      <div className="">
                        <select className="form-select me-4 quantity-width">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                      <div className="">
                        <h6>$44.80</h6> <br />
                        <small className="text-muted text-nowrap">
                          $12.20 / per item
                        </small>
                      </div>
                    </div>
                    <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                      <div className="float-md-end">
                        <button
                          type="button"
                          className="btn btn-outline-primary mx-2"
                        >
                          <i className="fa-solid fa-heart text-secondary"></i>
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                        >
                          <i className="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>

                <div className="border-top pt-4 mx-4 mb-4">
                  <p>
                    <i className="fas fa-truck text-muted fa-lg"></i> Free
                    Delivery within 1-2 weeks
                  </p>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip
                  </p>
                </div>
              </div>
            </div>
            {/* cart */}

            {/* summary */}
            <div className="col-lg-4">
              <div className="card mb-3 border shadow-0">
                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label className="form-label">Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control border"
                          name=""
                          placeholder="Coupon code"
                        />
                        <button className="btn btn-light border">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="card shadow-0 border">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Tổng tiền:</p>
                    <p className="mb-2">{formatNumber(totalBill)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Phí vận chuyển:</p>
                    <p className="mb-2">{formatNumber(deliveryFee)}</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2 fw-bold">Tổng tiền:</p>
                    <p className="mb-2 fw-bold text-danger fs-4">{formatNumber(totalBillAfter)}</p>
                  </div>

                  <div className="mt-3">
                    <button
                      className="btn btn-danger w-100 shadow-0 mb-2 py-3"
                      onClick={() => handlePurchase()}
                    >
                      Thanh toán
                    </button>
                    <button
                      className="btn btn-light w-100 border mt-2"
                      onClick={goBackToShop}>
                      Tiếp tục mua hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* summary */}
          </div>
        </div>
      </section>
      {/* cart + summary */}

      {/* Recommended Items */}
      <RecommendedItems />
      {/* Recommended Items */}
    </>
  );
};

export default ShoppingCart;
