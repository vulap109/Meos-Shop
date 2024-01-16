import React, { useEffect, useState } from "react";
import { Accordion, Button, Collapse } from "react-bootstrap";
import { NavLink, Navigate, useParams } from "react-router-dom";
import HeaderTitle from "../layout/HeaderTitle";
import ProductListView from "./ProductListView";
import ProductGridView from "./ProductGridView";
import { categoryT } from "../../config/constant";
import { getProductByCat } from "../../service/productService";

const ProductList = () => {
  const breadcrumbOg = [
    { url: "/", titleName: "Trang chủ" },
    { url: "", titleName: "Sản phẩm" },
  ];
  const [openCollapse, setOpenCollapse] = useState(false);
  const [productList, setProductList] = useState<IProduct[] | null>();
  const [breadcrumb, setBreadcrumb] = useState<breadcrumbProps[]>(breadcrumbOg);
  let { categoryParam } = useParams();

  // fetch product by menu selected
  const fetchProductListByCategory = async () => {
    if (categoryParam) {
      let categoryId = categoryT.find(c => c.url === categoryParam)?.id
      if (categoryId) {
        let { data } = await getProductByCat(categoryId.toString());
        if (data && data.result) {
          setProductList(data.data);
        } else {
          setProductList(null);
        }
      } else {
        return <Navigate to="/404" />
      }
    } else {
      return <Navigate to="/404" />
    }
  }
  // set breadcrumb by menu selected
  const handleSetHeader = () => {
    let HedTmp = breadcrumbOg;
    let categoryName = categoryT.find(c => c.url === categoryParam)?.title
    HedTmp.push({ url: "", titleName: categoryName ? categoryName : "" });
    setBreadcrumb(HedTmp);
  }
  useEffect(() => {
    fetchProductListByCategory();
    handleSetHeader();
  }, [categoryParam])
  // const handleChangeProductView = (type: boolean) => {
  //   setProductListView()
  // }
  return (
    <>
      <HeaderTitle data={breadcrumb} />
      {/* sidebar + content */}
      <section>
        <div className="container mt-3">
          <div className="row">
            {/* sidebar */}
            <div className="col-lg-3">
              {/* Toggle button filter */}
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
                  <span><i className="fa-solid fa-arrow-down-wide-short"></i> Sắp xếp theo: </span>
                  <select className="form-select d-inline-block w-auto border pt-1">
                    <option value="0">Nổi bật</option>
                    <option value="1">Tên từ A-Z</option>
                    <option value="2">Tên từ Z-A</option>
                    <option value="3">Giá giảm dần</option>
                    <option value="4">Giá tăng dần</option>
                  </select>
                  {/* <div className="btn-group shadow-0 border">
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
                  </div> */}
                </div>
              </header>

              {/* Product listing */}
              {productList && productList.length > 0
                ?
                <ProductGridView products={productList} />
                :
                (<h3>Không có sản phẩm</h3>)
              }

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
