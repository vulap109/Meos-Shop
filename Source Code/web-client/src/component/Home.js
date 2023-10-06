import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import "../styles/Home.scss";

const Home = () => {
  return (
    <>
      {/* intro  */}
      <section className="pt-3">
        <div className="container">
          <div className="row gx-3">
            <main className="col-lg-9">
              <div className="card-banner p-5 bg-primary rounded-5 intro-container">
                <div className="intro-content">
                  <h2 className="text-white">
                    Great products with <br />
                    best deals
                  </h2>
                  <p className="text-white">
                    No matter how far along you are in your sophistication as an
                    amateur astronomer, there is always one.
                  </p>
                  <a href="#" className="btn btn-light shadow-0 text-primary">
                    {" "}
                    View more{" "}
                  </a>
                </div>
              </div>
            </main>
            <aside className="col-lg-3">
              <div className="card-banner h-100 rounded-5 side-intro-container">
                <div className="card-body text-center pb-5">
                  <h5 className="pt-5 text-white">Amazing Gifts</h5>
                  <p className="text-white">
                    No matter how far along you are in your sophistication
                  </p>
                  <a href="#" className="btn btn-outline-light">
                    {" "}
                    View more{" "}
                  </a>
                </div>
              </div>
            </aside>
          </div>
          {/* row //end  */}
        </div>
        {/* container end.//  */}
      </section>
      {/* intro  */}

      {/* category  */}
      <section>
        <div className="container pt-5">
          <nav className="row gy-4">
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-couch fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Interior items</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-basketball-ball fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Sport and travel</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-ring fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Jewellery</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-clock fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Accessories</div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-car-side fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Automobiles</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-home fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Home items</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-guitar fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Musical items</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-book fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Book, reading</div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-baby-carriage fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Kid's toys</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-paw fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Pet items</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-tshirt fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Men's clothing</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-shoe-prints fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Men's clothing</div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-mobile fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Smartphones</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-tools fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Tools</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-pencil-ruler fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Education</div>
                  </NavLink>
                </div>
                <div className="col-3">
                  <NavLink
                    to="/"
                    className="text-center d-flex flex-column justify-content-center nav-link"
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary mx-auto p-3 mb-2"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="fas fa-warehouse fa-xl fa-fw"></i>
                    </button>
                    <div className="text-dark">Other items</div>
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      {/* category  */}

      {/* Products */}
      <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>New products</h3>
          </header>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0 border-0">
                <a href="#" className="">
                  <div className="mask label-height position-absolute">
                    <div className="d-flex justify-content-start align-items-start h-100 m-2">
                      <h6>
                        <span className="badge bg-danger pt-1">New</span>
                      </h6>
                    </div>
                  </div>
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp"
                    className="card-img-top rounded-2 img-new-product"
                  />
                </a>
                <div className="card-body p-0 pt-3">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                  </a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">GoPro action camera 4K</p>
                  <p className="text-muted">Model: X-200</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0 border-0">
                <a href="#" className="">
                  <div className="mask label-height position-absolute">
                    <div className="d-flex justify-content-start align-items-start h-100 m-2">
                      <h6>
                        <span className="badge pt-1 bg-danger">Offer</span>
                      </h6>
                    </div>
                  </div>
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/2.webp"
                    className="card-img-top rounded-2 img-new-product"
                  />
                </a>
                <div className="card-body p-0 pt-2">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                  </a>
                  <h5 className="card-title">$590.00</h5>
                  <p className="card-text mb-0">Canon EOS professional</p>
                  <p className="text-muted">Capacity: 128GB</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0 border-0">
                <a href="#" className="">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/3.webp"
                    className="card-img-top rounded-2 img-new-product"
                  />
                </a>
                <div className="card-body p-0 pt-2">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                  </a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">Sizes: S, M, XL</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0 border-0">
                <a href="#" className="">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/4.webp"
                    className="card-img-top rounded-2 img-new-product"
                  />
                </a>
                <div className="card-body p-0 pt-2">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                  </a>
                  <h5 className="card-title">$1099.00</h5>
                  <p className="card-text mb-0">Apple iPhone 13 Pro max</p>
                  <p className="text-muted">Color: Black, Memory: 128GB</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0 border-0">
                <a href="#" className="">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp"
                    className="card-img-top rounded-2 img-new-product"
                  />
                </a>
                <div className="card-body p-0 pt-2">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                  </a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">Sizes: S, M, XL</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0 border-0">
                <a href="#" className="">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp"
                    className="card-img-top rounded-2 img-new-product"
                  />
                </a>
                <div className="card-body p-0 pt-2">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                  </a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">Model: X-200</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0 border-0">
                <a href="#" className="">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp"
                    className="card-img-top rounded-2 img-new-product"
                  />
                </a>
                <div className="card-body p-0 pt-2">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                  </a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">Sizes: S, M, XL</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0 border-0">
                <a href="#" className="">
                  <img
                    src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp"
                    className="card-img-top rounded-2 img-new-product"
                  />
                </a>
                <div className="card-body p-0 pt-2">
                  <a
                    href="#!"
                    className="btn btn-light border px-2 pt-2 float-end icon-hover"
                  >
                    <i className="fas fa-heart fa-lg px-1 text-secondary"></i>
                  </a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">Material: Jeans</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products */}
    </>
  );
};

export default Home;
