import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import logo from '../assets/icons/cat.png'
const Home = () => {
  return (
    <>
      {/* intro  */}
      <section className="mt-3">
        <div className="container">
          <main className="card p-3 shadow-2-strong">
            <div className="row">
              <div className="col-lg-3">
                <nav className="nav flex-column nav-pills mb-md-2">
                  <a className="nav-link active py-2 ps-3 my-0" aria-current="page" href="#">Electronics</a>
                  <a className="nav-link my-0 py-2 ps-3 bg-white" href="#">Clothes and wear</a>
                  <a className="nav-link my-0 py-2 ps-3 bg-white" href="#">Home interiors</a>
                  <a className="nav-link my-0 py-2 ps-3 bg-white" href="#">Computer and tech</a>
                  <a className="nav-link my-0 py-2 ps-3 bg-white" href="#">Tools, equipments</a>
                  <a className="nav-link my-0 py-2 ps-3 bg-white" href="#">Sports and outdoor</a>
                  <a className="nav-link my-0 py-2 ps-3 bg-white" href="#">Animal and pets</a>
                  <a className="nav-link my-0 py-2 ps-3 bg-white" href="#">Machinery tools</a>
                  <a className="nav-link my-0 py-2 ps-3 bg-white" href="#">Other products</a>
                </nav>
              </div>
              <div className="col-lg-9">
                <div className="card-banner h-auto p-5 bg-primary rounded-5" style="height: 350px;">
                  <div>
                    <h2 className="text-white">
                      Great products with <br />
                      best deals
                    </h2>
                    <p className="text-white">No matter how far along you are in your sophistication as an amateur astronomer, there is always one.</p>
                    <a href="#" className="btn btn-light shadow-0 text-primary"> View more </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* container end.// */}
      </section>
      {/* intro */}

      {/* Products */}
      <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>New products</h3>
          </header>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="img-wrap">
                  <div className="mask" style={{ height: "50px" }}>
                    <div className="d-flex justify-content-start align-items-start h-100 m-2">
                      <h6><span className="badge bg-success pt-2">Offer</span></h6>
                    </div>
                  </div>
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp" className="card-img-top" style="aspect-ratio: 1 / 1" />
                </a>
                <div className="card-body p-0 pt-3">
                  <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover"><i className="fas fa-heart fa-lg px-1 text-secondary"></i></a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">GoPro action camera 4K</p>
                  <p className="text-muted">
                    Model: X-200
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="img-wrap">
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp" className="card-img-top" style="aspect-ratio: 1 / 1" />
                </a>
                <div className="card-body p-0 pt-2">
                  <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover"><i className="fas fa-heart fa-lg px-1 text-secondary"></i></a>
                  <h5 className="card-title">$590.00</h5>
                  <p className="card-text mb-0">Canon EOS professional</p>
                  <p className="text-muted">
                    Capacity: 128GB
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="img-wrap">
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp" className="card-img-top" style="aspect-ratio: 1 / 1" />
                </a>
                <div className="card-body p-0 pt-2">
                  <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover"><i className="fas fa-heart fa-lg px-1 text-secondary"></i></a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">
                    Sizes: S, M, XL
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="img-wrap">
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp" className="card-img-top" style="aspect-ratio: 1 / 1" />
                </a>
                <div className="card-body p-0 pt-2">
                  <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover"><i className="fas fa-heart fa-lg px-1 text-secondary"></i></a>
                  <h5 className="card-title">$1099.00</h5>
                  <p className="card-text mb-0">Apple iPhone 13 Pro max</p>
                  <p className="text-muted">
                    Color: Black, Memory: 128GB
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="img-wrap">
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp" className="card-img-top" style="aspect-ratio: 1 / 1" />
                </a>
                <div className="card-body p-0 pt-2">
                  <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover"><i className="fas fa-heart fa-lg px-1 text-secondary"></i></a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">
                    Sizes: S, M, XL
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="img-wrap">
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp" className="card-img-top" style="aspect-ratio: 1 / 1" />
                </a>
                <div className="card-body p-0 pt-2">
                  <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover"><i className="fas fa-heart fa-lg px-1 text-secondary"></i></a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">
                    Model: X-200
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="img-wrap">
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp" className="card-img-top" style="aspect-ratio: 1 / 1" />
                </a>
                <div className="card-body p-0 pt-2">
                  <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover"><i className="fas fa-heart fa-lg px-1 text-secondary"></i></a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">
                    Sizes: S, M, XL
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card my-2 shadow-0">
                <a href="#" className="img-wrap">
                  <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" className="card-img-top" style="aspect-ratio: 1 / 1" />
                </a>
                <div className="card-body p-0 pt-2">
                  <a href="#!" className="btn btn-light border px-2 pt-2 float-end icon-hover"><i className="fas fa-heart fa-lg px-1 text-secondary"></i></a>
                  <h5 className="card-title">$29.95</h5>
                  <p className="card-text mb-0">Modern product name here</p>
                  <p className="text-muted">
                    Material: Jeans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products */}

      {/* Feature */}
      <section className="">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="card-banner bg-gray h-100" style="
                                                      min-height: 200px;
                                                      background-size: cover;
                                                      background-position: center;
                                                      width: 100%;
                                                      background-repeat: no-repeat;
                                                      top: 50%;
                                                      background-image: url('https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/banners/banner-item2.webp');">
                <div className="p-3 p-lg-5" style="max-width: 70%;">
                  <h3 className="text-dark">Best products & brands in our store at 80% off</h3>
                  <p>That's true but not always</p>
                  <button className="btn btn-warning shadow-0" href="#"> Claim offer </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mb-3 mb-sm-4 g-3 g-sm-4">
                <div className="col-6 d-flex">
                  <div className="card w-100 bg-primary" style="min-height: 200px;">
                    <div className="card-body">
                      <h5 className="text-white">Gaming toolset</h5>
                      <p className="text-white-50">Technology for cyber sport</p>
                      <a className="btn btn-outline-light btn-sm" href="#">Learn more</a>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex">
                  <div className="card w-100 bg-primary" style="min-height: 200px;">
                    <div className="card-body">
                      <h5 className="text-white">Quality sound</h5>
                      <p className="text-white-50">All you need for music</p>
                      <a className="btn btn-outline-light btn-sm" href="#">Learn more</a>
                    </div>
                  </div>
                </div>
              </div>
              {/* row.// */}

              <div className="card bg-success" style="min-height: 200px;">
                <div className="card-body">
                  <h5 className="text-white">Buy 2 items, With special gift</h5>
                  <p className="text-white-50" style="max-width: 400px;">Buy one, get one free marketing strategy helps your business improves the brand by sharing the profits</p>
                  <a className="btn btn-outline-light btn-sm" href="#">Learn more</a>
                </div>
              </div>
            </div>
            {/* col.// */}
          </div>
          {/* row.// */}
        </div>
        {/* container end.// */}
      </section>
      {/* Feature */}

      {/* Recently viewed */}
      <section className="mt-5 mb-4">
        <div className="container text-dark">
          <header className="">
            <h3 className="section-title">Recently viewed</h3>
          </header>

          <div className="row gy-3">
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img height="200" width="200" className="img-thumbnail" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp" />
              </a>
            </div>
            {/* col.// */}
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img height="200" width="200" className="img-thumbnail" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/2.webp" />
              </a>
            </div>
            {/* col.// */}
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img height="200" width="200" className="img-thumbnail" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/3.webp" />
              </a>
            </div>
            {/* col.// */}
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img height="200" width="200" className="img-thumbnail" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/4.webp" />
              </a>
            </div>
            {/* col.// */}
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img height="200" width="200" className="img-thumbnail" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp" />
              </a>
            </div>
            {/* col.// */}
            <div className="col-lg-2 col-md-4 col-4">
              <a href="#" className="img-wrap">
                <img height="200" width="200" className="img-thumbnail" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Recently viewed */}

      <section>
        <div className="container">
          <div className="px-4 pt-3 border">
            <div className="row pt-1">
              <div className="col-lg-3 col-md-6 mb-3 d-flex">
                <div className="d-flex align-items-center">
                  <div className="badge badge-warning p-2 rounded-4 me-3">
                    <i className="fas fa-thumbs-up fa-2x fa-fw"></i>
                  </div>
                  <span className="info">
                    <h6 className="title">Reasonable prices</h6>
                    <p className="mb-0">Have you ever finally just</p>
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3 d-flex">
                <div className="d-flex align-items-center">
                  <div className="badge badge-warning p-2 rounded-4 me-3">
                    <i className="fas fa-plane fa-2x fa-fw"></i>
                  </div>
                  <span className="info">
                    <h6 className="title">Worldwide shipping</h6>
                    <p className="mb-0">Have you ever finally just</p>
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3 d-flex">
                <div className="d-flex align-items-center">
                  <div className="badge badge-warning p-2 rounded-4 me-3">
                    <i className="fas fa-star fa-2x fa-fw"></i>
                  </div>
                  <span className="info">
                    <h6 className="title">Best ratings</h6>
                    <p className="mb-0">Have you ever finally just</p>
                  </span>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 mb-3 d-flex">
                <div className="d-flex align-items-center">
                  <div className="badge badge-warning p-2 rounded-4 me-3">
                    <i className="fas fa-phone-alt fa-2x fa-fw"></i>
                  </div>
                  <span className="info">
                    <h6 className="title">Help center</h6>
                    <p className="mb-0">Have you ever finally just</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;