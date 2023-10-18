import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/ShoppingCart.scss";
import RecommendedItems from "../RecommendedItems";

const ShoppingCart = () => {
  const navigate = useNavigate();

  const handlePurchase = () => {
    navigate("/check-out");
  };

  return (
    <>
      {/* cart + summary */}
      <section className="bg-light my-3">
        <div className="container">
          <div className="row">
            {/* cart */}
            <div className="col-lg-9">
              <div className="card border shadow-0">
                <div className="m-4">
                  <h4 className="card-title mb-4">Your shopping cart</h4>
                  <div className="row gy-3 mb-4">
                    <div className="col-lg-5">
                      <div className="me-lg-5">
                        <div className="d-flex">
                          <img
                            src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                            className="border rounded me-3 img-product"
                            alt="product"
                          />
                          <div className="">
                            <NavLink to="" className="nav-link">
                              Winter jacket for men and lady
                            </NavLink>
                            <p className="text-muted">Yellow, Jeans</p>
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
                        <text className="h6">$1156.00</text> <br />
                        <small className="text-muted text-nowrap">
                          $460.00 / per item
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
                  </div>

                  <div className="row gy-3 mb-4">
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
                        <text className="h6">$44.80</text> <br />
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
                  </div>

                  <div className="row gy-3">
                    <div className="col-lg-5">
                      <div className="me-lg-5">
                        <div className="d-flex">
                          <img
                            src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/13.webp"
                            className="border rounded me-3 img-product"
                            alt="product"
                          />
                          <div className="">
                            <NavLink to="" className="nav-link">
                              Blazer Suit Dress Jacket for Men
                            </NavLink>
                            <p className="text-muted">XL size, Jeans, Blue</p>
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
                        <text className="h6">$1156.00</text> <br />
                        <small className="text-muted text-nowrap">
                          $460.00 / per item
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
                  </div>
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
            <div className="col-lg-3">
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
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2">$329.00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Discount:</p>
                    <p className="mb-2 text-success">-$60.00</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">TAX:</p>
                    <p className="mb-2">$14.00</p>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Total price:</p>
                    <p className="mb-2 fw-bold">$283.00</p>
                  </div>

                  <div className="mt-3">
                    <button
                      className="btn btn-success w-100 shadow-0 mb-2"
                      onClick={() => handlePurchase()}
                    >
                      Make Purchase
                    </button>
                    <button className="btn btn-light w-100 border mt-2">
                      Back to shop
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
