import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
// import { Dispatch } from "redux";

import { getProductsNew, getProductByCat } from "../../service/productService";
import ProductItem from "../customComponent/ProductItem";
import RecommendedItems from "../RecommendedItems";
import banner from "../../assets/images/banner-sales.png"
import "../../styles/Home.scss";
// import { AddCart } from "../../redux/cart/cartAction";

const Home = () => {
  // const dispatch: Dispatch<any> = useDispatch();
  const carts = useSelector((state: state) => state.cartState);

  const [productList, setProductList] = useState<IProduct[] | null>();
  const [laptopGamingListShow, setLaptopGamingListShow] = useState<IProduct[] | null>();
  const [pcListShow, setPCListShow] = useState<IProduct[] | null>();
  const [monitorListShow, setMonitorListShow] = useState<IProduct[] | null>();
  const [keyboardListShow, setKeyboardListShow] = useState<IProduct[] | null>();
  const [mouseListShow, setMouseListShow] = useState<IProduct[] | null>();
  const [accessoryListShow, setAccessoryListShow] = useState<IProduct[] | null>();

  const [bannerBottom, setBannerBottom] = useState("../assets/images/banner-sales.png");

  // get list new product
  const fetchListProduct = async () => {
    let { data } = await getProductsNew();
    console.log("check get new product ", data);
    if (data && data.result) {
      setProductList(data.data.slice(0, 5));
    } else {
      setProductList(null);
    }
  }
  // get list laptop gaming best seller
  const fetchListLaptopGaming = async () => {
    let { data } = await getProductByCat("2");
    console.log("check get laptop gaming list: ", data);
    if (data && data.result) {
      setLaptopGamingListShow(data.data.slice(0, 10));
    } else {
      setLaptopGamingListShow(null);
    }
  }

  // get list PC best seller
  const fetchListPC = async () => {
    let { data } = await getProductByCat("3");
    console.log("check get PC list: ", data);
    if (data && data.result) {
      setPCListShow(data.data.slice(0, 10));
    } else {
      setPCListShow(null);
    }
  }

  // get list monitor best seller
  const fetchListMonitor = async () => {
    let { data } = await getProductByCat("4");
    console.log("check get monitor list: ", data);
    if (data && data.result) {
      setMonitorListShow(data.data.slice(0, 10));
    } else {
      setMonitorListShow(null);
    }
  }

  // get list keyboard best seller
  const fetchListKeyB = async () => {
    let { data } = await getProductByCat("5");
    console.log("check get key board list: ", data);
    if (data && data.result) {
      setKeyboardListShow(data.data.slice(0, 10));
    } else {
      setKeyboardListShow(null);
    }
  }

  // get list mouse best seller
  const fetchListMouse = async () => {
    let { data } = await getProductByCat("6");
    console.log("check get mouse list: ", data);
    if (data && data.result) {
      setMouseListShow(data.data.slice(0, 10));
    } else {
      setMouseListShow(null);
    }
  }

  // get list accessory best seller
  const fetchListAccessory = async () => {
    let { data } = await getProductByCat("7");
    console.log("check get accessory list: ", data);
    if (data && data.result) {
      setAccessoryListShow(data.data.slice(0, 10));
    } else {
      setAccessoryListShow(null);
    }
  }

  useEffect(() => {
    fetchListProduct();
    fetchListLaptopGaming();
    fetchListPC();
    fetchListMonitor();
    fetchListKeyB();
    fetchListMouse();
    fetchListAccessory();
  }, []);
  useEffect(() => {
    console.log("check cart state: ", carts);

  }, [carts])

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
          <header className="mb-4 d-flex justify-content-between">
            <h3>New products</h3>
            <div>
              <button className="btn">
                <i className="fa-solid fa-circle-chevron-left fs-3 text-primary"></i>
              </button>
              <button className="btn">
                <i className="fa-solid fa-circle-chevron-right fs-3 text-primary"></i>
              </button>
            </div>
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
          <hr />
        </div>
      </section>
      {/* Products */}

      {/* Laptop gaming */}
      <section>
        <div className="container my-5">
          <header className="mb-4 d-flex justify-content-between">
            <h3>Laptop gaming bán chạy</h3>
            <div>
              <NavLink to={"/products/laptop-gaming"} className="nav-link text-primary fs-5">Xem tất cả</NavLink>
            </div>
          </header>
          <div className="row">
            {laptopGamingListShow && laptopGamingListShow.length > 0 ?
              <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container-with-dots"
                draggable
                infinite
                minimumTouchDrag={80}
                pauseOnHover
                // arrows
                // focusOnSelect={false}
                // keyBoardControl
                // renderArrowsWhenDisabled={false}
                // renderButtonGroupOutside={false}
                // renderDotsOutside={false}
                // rewind={false}
                // rewindWithAnimation={false}
                // rtl={false}
                // shouldResetAutoplay
                // showDots={false}
                slidesToSlide={1}
                swipeable
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 5,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 768
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                  },
                  tablet2: {
                    breakpoint: {
                      max: 768,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
              >
                {laptopGamingListShow.map((items, index) => (
                  <div className="me-4" key={`productItem${index}`}>
                    <ProductItem
                      data={items}
                      isWishList={false}
                    />
                  </div>
                ))}
              </Carousel>
              :
              <h5>Sản phẩm đang cập nhật</h5>
            }
          </div>
          <hr />
        </div>
      </section>
      {/* Laptop gaming */}

      {/* PC */}
      <section>
        <div className="container my-5">
          <header className="mb-4 d-flex justify-content-between">
            <h3>PC bán chạy</h3>
            <div>
              <NavLink to={"/products/pc"} className="nav-link text-primary fs-5">Xem tất cả</NavLink>
            </div>
          </header>
          <div className="row">
            {pcListShow && pcListShow.length > 0 ?
              <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container-with-dots"
                draggable
                infinite
                minimumTouchDrag={80}
                pauseOnHover
                slidesToSlide={1}
                swipeable
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 5,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 768
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                  },
                  tablet2: {
                    breakpoint: {
                      max: 768,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
              >
                {pcListShow.map((items, index) => (
                  <div className="me-4" key={`productItem${index}`}>
                    <ProductItem
                      data={items}
                      isWishList={false}
                    />
                  </div>
                ))}
              </Carousel>
              :
              <h5>Sản phẩm đang cập nhật</h5>
            }
          </div>
          <hr />
        </div>
      </section>
      {/* PC */}

      {/* Monitor */}
      <section>
        <div className="container my-5">
          <header className="mb-4 d-flex justify-content-between">
            <h3>Màn hình bán chạy</h3>
            <div>
              <NavLink to={"/products/monitor"} className="nav-link text-primary fs-5">Xem tất cả</NavLink>
            </div>
          </header>
          <div className="row">
            {monitorListShow && monitorListShow.length > 0 ?
              <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container-with-dots"
                draggable
                infinite
                minimumTouchDrag={80}
                pauseOnHover
                slidesToSlide={1}
                swipeable
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 5,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 768
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                  },
                  tablet2: {
                    breakpoint: {
                      max: 768,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
              >
                {monitorListShow.map((items, index) => (
                  <div className="me-4" key={`productItem${index}`}>
                    <ProductItem
                      data={items}
                      isWishList={false}
                    />
                  </div>
                ))}
              </Carousel>
              :
              <h5>Sản phẩm đang cập nhật</h5>
            }
          </div>
          <hr />
        </div>
      </section>
      {/* Monitor */}

      {/* key board */}
      <section>
        <div className="container my-5">
          <header className="mb-4 d-flex justify-content-between">
            <h3>Bàn phím bán chạy</h3>
            <div>
              <NavLink to={"/products/key-board"} className="nav-link text-primary fs-5">Xem tất cả</NavLink>
            </div>
          </header>
          <div className="row">
            {keyboardListShow && keyboardListShow.length > 0 ?
              <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container-with-dots"
                draggable
                infinite
                minimumTouchDrag={80}
                pauseOnHover
                slidesToSlide={1}
                swipeable
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 5,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 768
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                  },
                  tablet2: {
                    breakpoint: {
                      max: 768,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
              >
                {keyboardListShow.map((items, index) => (
                  <div className="me-4" key={`productItem${index}`}>
                    <ProductItem
                      data={items}
                      isWishList={false}
                    />
                  </div>
                ))}
              </Carousel>
              :
              <h5>Sản phẩm đang cập nhật</h5>
            }
          </div>
          <hr />
        </div>
      </section>
      {/* key board */}

      {/* Mouse */}
      <section>
        <div className="container my-5">
          <header className="mb-4 d-flex justify-content-between">
            <h3>Chuột bán chạy</h3>
            <div>
              <NavLink to={"/products/mouse"} className="nav-link text-primary fs-5">Xem tất cả</NavLink>
            </div>
          </header>
          <div className="row">
            {mouseListShow && mouseListShow.length > 0 ?
              <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container-with-dots"
                draggable
                infinite
                minimumTouchDrag={80}
                pauseOnHover
                slidesToSlide={1}
                swipeable
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 5,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 768
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                  },
                  tablet2: {
                    breakpoint: {
                      max: 768,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
              >
                {mouseListShow.map((items, index) => (
                  <div className="me-4" key={`productItem${index}`}>
                    <ProductItem
                      data={items}
                      isWishList={false}
                    />
                  </div>
                ))}
              </Carousel>
              :
              <h5>Sản phẩm đang cập nhật</h5>
            }
          </div>
          <hr />
        </div>
      </section>
      {/* Mouse */}

      {/* Accessory */}
      <section>
        <div className="container my-5">
          <header className="mb-4 d-flex justify-content-between">
            <h3>Phụ kiện bán chạy</h3>
            <div>
              <NavLink to={"/products/accessory"} className="nav-link text-primary fs-5">Xem tất cả</NavLink>
            </div>
          </header>
          <div className="row">
            {accessoryListShow && accessoryListShow.length > 0 ?
              <Carousel
                additionalTransfrom={0}
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container-with-dots"
                draggable
                infinite
                minimumTouchDrag={80}
                pauseOnHover
                slidesToSlide={1}
                swipeable
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 5,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 768
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                  },
                  tablet2: {
                    breakpoint: {
                      max: 768,
                      min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  }
                }}
              >
                {accessoryListShow.map((items, index) => (
                  <div className="me-4" key={`productItem${index}`}>
                    <ProductItem
                      data={items}
                      isWishList={false}
                    />
                  </div>
                ))}
              </Carousel>
              :
              <h5>Sản phẩm đang cập nhật</h5>
            }
          </div>
          <hr />
        </div>
      </section>
      {/* Accessory */}

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
