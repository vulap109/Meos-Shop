import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Home.scss";
import RecommendedItems from "../RecommendedItems";
import ProductItem from "../customComponent/ProductItem";
import { getProductsNew } from "../../service/productService";
import banner from "../../assets/images/banner-sales.png"

const Home = () => {
  const newProduct = [
    {
      label: "New",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp",
      title: "GoPro action camera 4K",
      describe: "Model: X-200",
      price: "$29.95",
      priceAf: "",
      discount: "",
    },
    {
      label: "Offer",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/2.webp",
      title: "Canon EOS professional",
      describe: "Capacity: 128GB",
      price: "$590.00",
      priceAf: "",
      discount: "",
    },
    {
      label: "",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/3.webp",
      title: "Modern product name here",
      describe: "Sizes: S, M, XL",
      price: "$29.95",
      priceAf: "",
      discount: "",
    },
    {
      label: "",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/4.webp",
      title: "Apple iPhone 13 Pro max",
      describe: "Color: Black, Memory: 128GB",
      price: "$1099.00",
      priceAf: "",
      discount: "",
    },
    {
      label: "",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp",
      title: "Modern product name here",
      describe: "Sizes: S, M, XL",
      price: "$29.95",
      priceAf: "",
      discount: "",
    },
    {
      label: "",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp",
      title: "Modern product name here",
      describe: "Model: X-200",
      price: "$18.95",
      priceAf: "",
      discount: "",
    },
    {
      label: "",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp",
      title: "Modern product name here",
      describe: "Sizes: S, M, XL",
      price: "$18.95",
      priceAf: "",
      discount: "",
    },
    {
      label: "",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp",
      title: "Modern product name here",
      describe: "Material: Jeans",
      price: "$18.95",
      priceAf: "",
      discount: "",
    },
  ];
  const [productList, setProductList] = useState<IProduct[] | null>();
  const [bannerBottom, setBannerBottom] = useState("../assets/images/banner-sales.png");

  const fetchListProduct = async () => {
    let { data } = await getProductsNew();
    console.log("check get new product ", data);
    if (data && data.result) {
      setProductList(data.data);
    } else {
      setProductList(null);
    }
  }
  useEffect(() => {
    fetchListProduct()
  }, [])

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
                  <button className="btn btn-light shadow-0 text-primary">
                    View more
                  </button>
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
                  <button className="btn btn-outline-light">View more</button>
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
                    <div className="bg-white mx-auto mb-2">
                      <button
                        type="button"
                        className="btn btn-outline-primary p-3"
                        data-mdb-ripple-color="dark"
                      >
                        <i className="fas fa-couch fa-xl fa-fw"></i>
                      </button>
                    </div>

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
            {productList && productList.map((items, index) => (
              <div className="col-lg-3 col-md-4 col-6 product-space" key={`productItem${index}`}>
                <ProductItem
                  data={items}
                  isWishList={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Products */}

      {/* Feature */}
      <section className="">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="card-banner h-100">
                <NavLink to={"/"} className="feature-div">
                  <img
                    src={banner}
                    className="card-img-top rounded-2 h-100"
                    alt="product"
                  />
                </NavLink>
                {/* <div className="p-3 p-lg-5 max-width-70">
                  <h3 className="text-dark">
                    Best products & brands in our store at 80% off
                  </h3>
                  <p>That's true but not always</p>
                  <button className="btn btn-warning shadow-0">
                    Claim offer
                  </button>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row mb-3 mb-sm-4 g-3 g-sm-4">
                <div className="col-6 d-flex">
                  <div className="card w-100 bg-primary min-height-200">
                    <div className="card-body">
                      <h5 className="text-white">Gaming toolset</h5>
                      <p className="text-white-50">
                        Technology for cyber sport
                      </p>
                      <NavLink className="btn btn-outline-light btn-sm" to="">
                        Learn more
                      </NavLink>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-flex">
                  <div className="card w-100 bg-primary min-height-200">
                    <div className="card-body">
                      <h5 className="text-white">Quality sound</h5>
                      <p className="text-white-50">All you need for music</p>
                      <NavLink className="btn btn-outline-light btn-sm" to="">
                        Learn more
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
              {/* row.// */}

              <div className="card bg-success min-height-200">
                <div className="card-body">
                  <h5 className="text-white">Buy 2 items, With special gift</h5>
                  <p className="text-white-50 max-width-400">
                    Buy one, get one free marketing strategy helps your business
                    improves the brand by sharing the profits
                  </p>
                  <NavLink className="btn btn-outline-light btn-sm" to="">
                    Learn more
                  </NavLink>
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

      {/* <!-- Recommended --> */}
      <RecommendedItems />
      {/* <!-- Recommended --> */}
    </>
  );
};

export default Home;
