import React, { useState } from "react";
import { Accordion, Button, Collapse } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HeaderTitle from "../layout/HeaderTitle";
import ProductListView from "./ProductListView";
import ProductGridView from "./ProductGridView";

const ProductList = () => {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [productListView, setProductListView] = useState(true);
  const headerTitleData = [
    { url: "/", titleName: "Trang chủ" },
    { url: "", titleName: "Sản phẩm" },
  ]

  // const handleChangeProductView = (type: boolean) => {
  //   setProductListView()
  // }
  return (
    <>
      <HeaderTitle data={headerTitleData} />
      {/* sidebar + content */}
      <section>
        <div className="container mt-3">
          <div className="row">
            {/* sidebar */}
            <div className="col-lg-3">
              {/* Toggle button */}
              <Button
                onClick={() => setOpenCollapse(!openCollapse)}
                aria-controls="navbarSupportedContent"
                aria-expanded={openCollapse}
                className="mb-3 w-100 d-lg-none"
              >
                Show filter
              </Button>
              {/* Collapsible wrapper */}
              <Collapse in={openCollapse}>
                <div
                  className="card d-lg-block mb-5"
                  id="navbarSupportedContent"
                >
                  <Accordion
                    defaultActiveKey={["0", "1", "2", "3", "4"]}
                    alwaysOpen
                  >
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Related items</Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-unstyled">
                          <li>
                            <NavLink to="" className="text-dark nav-link">
                              Electronics
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="" className="text-dark nav-link">
                              Home items
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="" className="text-dark nav-link">
                              Books, Magazines
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="" className="text-dark nav-link">
                              Men's clothing
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="" className="text-dark nav-link">
                              Interiors items
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="" className="text-dark nav-link">
                              Underwears
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="" className="text-dark nav-link">
                              Shoes for men
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="" className="text-dark nav-link">
                              Accessories
                            </NavLink>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Brands</Accordion.Header>
                      <Accordion.Body>
                        <div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked1"
                            >
                              Mercedes
                            </label>
                            <span className="badge bg-secondary float-end">
                              120
                            </span>
                          </div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked2"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked2"
                            >
                              Toyota
                            </label>
                            <span className="badge bg-secondary float-end">
                              15
                            </span>
                          </div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked3"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked3"
                            >
                              Mitsubishi
                            </label>
                            <span className="badge bg-secondary float-end">
                              35
                            </span>
                          </div>
                          {/* Checked checkbox */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckChecked4"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked4"
                            >
                              Nissan
                            </label>
                            <span className="badge bg-secondary float-end">
                              89
                            </span>
                          </div>
                          {/* Default checkbox */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Honda
                            </label>
                            <span className="badge bg-secondary float-end">
                              30
                            </span>
                          </div>
                          {/* Default checkbox */}
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckDefault"
                            >
                              Suzuki
                            </label>
                            <span className="badge bg-secondary float-end">
                              30
                            </span>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>Price</Accordion.Header>
                      <Accordion.Body>
                        <div className="range">
                          <input
                            type="range"
                            className="form-range"
                            id="customRange1"
                          />
                        </div>
                        <div className="row mb-3">
                          <div className="col-6">
                            <p className="mb-0">Min</p>
                            <div className="form-outline">
                              <input
                                type="number"
                                id="typeNumber"
                                className="form-control"
                                placeholder="$0"
                              />
                              {/* <label className="form-label" for="typeNumber">
                              $0
                            </label> */}
                            </div>
                          </div>
                          <div className="col-6">
                            <p className="mb-0">Max</p>
                            <div className="form-outline">
                              <input
                                type="number"
                                id="typeNumber"
                                className="form-control"
                                placeholder="$1,0000"
                              />
                              {/* <label className="form-label" for="typeNumber">
                              $1,0000
                            </label> */}
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-white w-100 border border-secondary"
                        >
                          apply
                        </button>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                      <Accordion.Header>Size</Accordion.Header>
                      <Accordion.Body>
                        <input
                          type="checkbox"
                          className="btn-check justify-content-center"
                          id="btn-check1"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary mb-1 mx-1 width-60"
                          htmlFor="btn-check1"
                        >
                          XS
                        </label>
                        <input
                          type="checkbox"
                          className="btn-check border justify-content-center"
                          id="btn-check2"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary mb-1 mx-1 width-60"
                          htmlFor="btn-check2"
                        >
                          SM
                        </label>
                        <input
                          type="checkbox"
                          className="btn-check border justify-content-center"
                          id="btn-check3"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary mb-1 mx-1 width-60"
                          htmlFor="btn-check3"
                        >
                          LG
                        </label>
                        <input
                          type="checkbox"
                          className="btn-check border justify-content-center"
                          id="btn-check4"
                          autoComplete="off"
                        />
                        <label
                          className="btn btn-outline-secondary mb-1 mx-1 width-60"
                          htmlFor="btn-check4"
                        >
                          XXL
                        </label>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                      <Accordion.Header>Ratings</Accordion.Header>
                      <Accordion.Body>
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                          </label>
                        </div>
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-secondary"></i>
                          </label>
                        </div>
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-secondary"></i>
                            <i className="fas fa-star text-secondary"></i>
                          </label>
                        </div>
                        {/* Default checkbox */}
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-secondary"></i>
                            <i className="fas fa-star text-secondary"></i>
                            <i className="fas fa-star text-secondary"></i>
                          </label>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </Collapse>
            </div>
            {/* sidebar */}
            {/* content */}
            <div className="col-lg-9">
              <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                <strong className="d-block py-2">32 Items found </strong>
                <div className="ms-auto">
                  <select className="form-select d-inline-block w-auto border pt-1">
                    <option value="0">Best match</option>
                    <option value="1">Recommended</option>
                    <option value="2">High rated</option>
                    <option value="3">Randomly</option>
                  </select>
                  <div className="btn-group shadow-0 border">
                    <button
                      className={
                        productListView
                          ? "btn btn-light active"
                          : "btn btn-light"
                      }
                      title="List view"
                      onClick={() => setProductListView(true)}
                    >
                      <i className="fa fa-bars fa-lg"></i>
                    </button>
                    <button
                      className={
                        productListView
                          ? "btn btn-light"
                          : "btn btn-light active"
                      }
                      title="Grid view"
                      onClick={() => setProductListView(false)}
                    >
                      <i className="fa fa-th fa-lg"></i>
                    </button>
                  </div>
                </div>
              </header>

              {/* Product listing */}
              {productListView ? <ProductListView /> : <ProductGridView />}

              <hr />

              {/* Pagination */}
              <nav
                aria-label="Page navigation example"
                className="d-flex justify-content-center mt-3"
              >
                <ul className="pagination">
                  <li className="page-item disabled">
                    <NavLink className="page-link" to="" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </NavLink>
                  </li>
                  <li className="page-item active">
                    <NavLink className="page-link" to="">
                      1
                    </NavLink>
                  </li>
                  <li className="page-item">
                    <NavLink className="page-link" to="">
                      2
                    </NavLink>
                  </li>
                  <li className="page-item">
                    <NavLink className="page-link" to="">
                      3
                    </NavLink>
                  </li>
                  <li className="page-item">
                    <NavLink className="page-link" to="">
                      4
                    </NavLink>
                  </li>
                  <li className="page-item">
                    <NavLink className="page-link" to="">
                      5
                    </NavLink>
                  </li>
                  <li className="page-item">
                    <NavLink className="page-link" to="" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </NavLink>
                  </li>
                </ul>
              </nav>
              {/* Pagination */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
