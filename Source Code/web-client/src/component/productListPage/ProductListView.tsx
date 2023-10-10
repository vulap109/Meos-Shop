import React from "react";
import { NavLink } from "react-router-dom";

const ProductListView = () => {
  return (
    <>
      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp"
                      className="w-100"
                      alt="product"
                    />
                    <NavLink to="">
                      <div className="hover-overlay">
                        <div className="mask bg-color-255"></div>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>Rucksack Backpack Jeans</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">154 orders</span>
                  </div>

                  <p className="text mb-4 mb-md-0">
                    Short description about the product goes here, for ex its
                    features. Lorem ipsum dolor sit amet with hapti you enter
                    into any new area of science, you almost lorem ipsum is
                    great text consectetur adipisicing
                  </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$34,50</h4>
                    <span className="text-danger">
                      <s>$49.99</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="mt-4">
                    <button className="btn btn-primary shadow-0" type="button">
                      Buy this
                    </button>
                    <NavLink
                      to=""
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp"
                      className="w-100"
                      alt="product"
                    />
                    <NavLink to="">
                      <div className="hover-overlay">
                        <div className="mask bg-color-255"></div>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>Men's Denim Jeans Shorts</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="far fa-star"></i>
                      <i className="far fa-star"></i>
                      <span className="ms-1">3</span>
                    </div>
                    <span className="text-muted">73 orders</span>
                  </div>

                  <p className="text mb-4 mb-md-0">
                    Re-engineered Digital Crown with hapti Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua tempor
                    incididunt ut labore et dolore magna [...]
                  </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$34,50</h4>
                    <span className="text-danger">
                      <s>$49.99</s>
                    </span>
                  </div>
                  <h6 className="text-warning">Paid shipping</h6>
                  <div className="mt-4">
                    <button className="btn btn-primary shadow-0" type="button">
                      Buy this
                    </button>
                    <NavLink
                      to=""
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp"
                      className="w-100"
                      alt="product"
                    />
                    <NavLink to="">
                      <div className="hover-overlay">
                        <div className="mask bg-color-255"></div>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>T-shirt for Men Blue Cotton Base</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <i className="far fa-star"></i>
                      <span className="ms-1">3.5</span>
                    </div>
                    <span className="text-muted">910 orders</span>
                  </div>

                  <p className="text mb-4 mb-md-0">
                    Short description about the product goes here, for ex its
                    features. Lorem ipsum dolor sit amet with hapti you enter
                    into any new area of science, you almost lorem ipsum is
                    great text consectetur adipisicing
                  </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$99,50</h4>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="mt-4">
                    <button className="btn btn-primary shadow-0" type="button">
                      Buy this
                    </button>
                    <NavLink
                      to=""
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp"
                      className="w-100"
                      alt="product"
                    />
                    <NavLink to="">
                      <div className="hover-overlay">
                        <div className="mask bg-color-255"></div>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>Winter Jacket for Men and Women</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">154 orders</span>
                  </div>

                  <p className="text mb-4 mb-md-0">
                    Short description about the product goes here, for ex its
                    features. Lorem ipsum dolor sit amet with hapti you enter
                    into any new area of science, you almost lorem ipsum is
                    great text
                  </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$140</h4>
                    <span className="text-danger">
                      <s>$190</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="mt-4">
                    <button className="btn btn-primary shadow-0" type="button">
                      Buy this
                    </button>
                    <NavLink
                      to=""
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mb-3">
        <div className="col-md-12">
          <div className="card shadow-0 border rounded-3">
            <div className="card-body">
              <div className="row g-0">
                <div className="col-xl-3 col-md-4 d-flex justify-content-center">
                  <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">
                    <img
                      src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp"
                      className="w-100"
                      alt="product"
                    />
                    <NavLink to="">
                      <div className="hover-overlay">
                        <div className="mask bg-color-255"></div>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <div className="col-xl-6 col-md-5 col-sm-7">
                  <h5>T-shirt for Men Blue Cotton Base</h5>
                  <div className="d-flex flex-row">
                    <div className="text-warning mb-1 me-2">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fas fa-star-half-alt"></i>
                      <span className="ms-1">4.5</span>
                    </div>
                    <span className="text-muted">154 orders</span>
                  </div>

                  <p className="text mb-4 mb-md-0">
                    Short description about the product goes here, for ex its
                    features. Lorem ipsum dolor sit amet with hapti you enter
                    into any new area of science, you almost lorem ipsum is
                    great text
                  </p>
                </div>
                <div className="col-xl-3 col-md-3 col-sm-5">
                  <div className="d-flex flex-row align-items-center mb-1">
                    <h4 className="mb-1 me-1">$99.50</h4>
                    <span className="text-danger">
                      <s>$190</s>
                    </span>
                  </div>
                  <h6 className="text-success">Free shipping</h6>
                  <div className="mt-4">
                    <button className="btn btn-primary shadow-0" type="button">
                      Buy this
                    </button>
                    <NavLink
                      to=""
                      className="btn btn-light border px-2 pt-2 icon-hover"
                    >
                      <i className="fas fa-heart fa-lg px-1"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListView;
