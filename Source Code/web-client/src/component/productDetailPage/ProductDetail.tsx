import React, { useState } from "react";
import { Carousel, Tab, Tabs } from "react-bootstrap";
import HeaderTitle from "../layout/HeaderTitle";
import { NavLink } from "react-router-dom";

const ProductDetail = () => {
  const [indexImg, setIndexImg] = useState(0);
  const [similarProduct, setSimilarProduct] = useState([
    {
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp",
      title: "Winter jacket for men and lady",
      details: "Yellow, Jeans",
      price: "$14.99",
    },
    {
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/12.webp",
      title: "Mens T-shirt Cotton Base",
      details: "Blue, Medium",
      price: "$14.99",
    },
    {
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/13.webp",
      title: "Blazer Suit Dress Jacket for Men",
      details: "XL size, Jeans, Blue",
      price: "$14.99",
    },
    {
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp",
      title: "Men's Denim Jeans Shorts",
      details: "Yellow, Jeans",
      price: "$14.99",
    },
  ]);
  const [carouselItem, setCarouselItem] = useState([
    {
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp",
    },
    {
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp",
    },
    {
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp",
    },
    {
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp",
    },
  ]);

  const handleSelect = (i: number) => {
    console.log("check selected image index: ", i);
    setIndexImg(i);
  };

  return (
    <>
      <HeaderTitle />
      <section className="bg-light mb-4 mt-3">
        <div className="container">
          <div className="card border">
            <div className="row">
              {/* image product */}
              <div className="col-lg-4 px-0">
                <div className="shadow-0">
                  <div className="m-4">
                    {/* product picture */}
                    <Carousel
                      data-bs-theme="dark"
                      activeIndex={indexImg}
                      onSelect={(index) => handleSelect(index)}
                      indicators={false}
                      interval={null}
                    >
                      {carouselItem.map((item, index) => (
                        <Carousel.Item key={`carousel${index}`}>
                          <img
                            src={item.img}
                            className="card-img-top rounded-2"
                            alt="product"
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    {/* product picture */}

                    {/* product thumb */}
                    <div className="mx-3">
                      <div className="row">
                        {carouselItem.map((item, index) => (
                          <button
                            className={
                              indexImg === index
                                ? "col border border-danger card px-0 mx-1"
                                : "col border card px-0 mx-1"
                            }
                            key={`thumb${index}`}
                            onClick={() => setIndexImg(index)}
                          >
                            <img
                              src={item.img}
                              className="card-img-top rounded-2"
                              alt="product"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                    {/* product thumb */}
                  </div>
                </div>
              </div>
              {/* image product */}

              {/* summary */}
              <div className="col-lg-7 px-2">
                <div className="mb-3 shadow-0">
                  <div className="card-body">
                    <h3>Rucksack Backpack Jeans</h3>
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
                    <div className="d-flex flex-row align-items-center mb-1">
                      <h4 className="mb-1 me-1">$34,50</h4>
                      <span className="text-danger">
                        <s>$49.99</s>
                      </span>
                    </div>
                    <p className="text mb-3">
                      Short description about the product goes here, for ex its
                      features. Lorem ipsum dolor sit amet with hapti you enter
                      into any new area of science, you almost lorem ipsum is
                      great text consectetur adipisicing
                    </p>
                    <h5>Thông tin chung:</h5>
                    <div className="d-flex flex-row">
                      <p className="mb-2 col-sm-2 col-3 fw-bold">Type:</p>
                      <p className="mb-2">Backpack</p>
                    </div>
                    <div className="d-flex flex-row">
                      <p className="mb-2 col-sm-2 col-3 fw-bold">Color:</p>
                      <p className="mb-2">Blue</p>
                    </div>
                    <div className="d-flex flex-row">
                      <p className="mb-2 col-sm-2 col-3 fw-bold">Material:</p>
                      <p className="mb-2">Jeans</p>
                    </div>
                    <div className="d-flex flex-row">
                      <p className="mb-2 col-sm-2 col-3 fw-bold">Brand:</p>
                      <p className="mb-2">Local Brand</p>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-md-5 col-xl-4 me-5">
                        <p className="mb-0">Size</p>
                        <select
                          className="form-select border border-dark text-center"
                          style={{ maxWidth: "279px" }}
                        >
                          <option value="1">S</option>
                          <option value="2">M</option>
                          <option value="3">L</option>
                          <option value="4">XL</option>
                          <option value="5">XXL</option>
                        </select>
                      </div>
                      <div className="col-md-5 col-xl-4">
                        <p className="mb-0">Quantity</p>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <input
                            type="text"
                            id="typeText"
                            placeholder="0"
                            className="form-control rounded-0 text-center border border-start-0 border-dark"
                          />
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow-0">
                  <div className="card-body pt-0">
                    <div className="mt-3">
                      <button className="btn btn-warning me-3 mb-sm-0 mb-2">
                        Buy Now
                      </button>
                      <button className="btn btn-primary me-3 mb-sm-0 mb-2">
                        <i className="fa-solid fa-cart-shopping me-2"></i> Add
                        to cart
                      </button>
                      <button className="btn btn-light border">
                        <i className="fa-solid fa-heart text-secondary me-2"></i>{" "}
                        Like
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* summary */}
            </div>
          </div>

          <div className="row pt-3">
            {/* details product */}
            <div className="col-lg-8">
              <div className="card border p-3">
                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Mô tả">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aliquid, necessitatibus vitae quibusdam atque nihil quos
                      praesentium qui fugiat incidunt illo esse, suscipit saepe
                      ipsum molestiae iusto sapiente repellat quam dolorem!
                    </p>
                  </Tab>
                  <Tab eventKey="details" title="Chi tiết">
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Neque, esse? Architecto, excepturi accusantium at dolor
                      exercitationem voluptas dolore modi vitae minus ipsam
                      velit harum voluptates, mollitia itaque facere temporibus
                      magni.
                    </p>
                  </Tab>
                  <Tab eventKey="comment" title="Bình luận">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur in aliquam doloremque quam facere minus,
                      incidunt at, consequuntur nesciunt tenetur labore dolorum
                      totam obcaecati explicabo natus nemo cum deleniti modi!
                    </p>
                  </Tab>
                </Tabs>
              </div>
            </div>

            {/* similar product */}
            <div className="col-lg-4">
              <div className="card border p-3">
                <h5>Sản phẩm liên quan</h5>
                {similarProduct.map((item, index) => (
                  <div className="row" key={`similar${index}`}>
                    <div className="me-lg-5">
                      <NavLink to="/" className="d-flex nav-link">
                        <img
                          src={item.img}
                          className="border rounded me-3 img-product"
                          alt="product"
                        />
                        <div className="">
                          <span>{item.title}</span>
                          <p className="text-muted">{item.details}</p>
                          <p className="fw-bold">{item.price}</p>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
