import React, { useEffect, useState } from "react";
import { Carousel, Tab, Tabs } from "react-bootstrap";
import HeaderTitle from "../layout/HeaderTitle";
import { NavLink, Navigate, useParams } from "react-router-dom";
import { getProductById } from "../../service/productService";
import { formatNumber } from "../../utils/format";
import "../../styles/ProductItem.scss";

interface infoType {
  name: string;
  value: string;
}
interface carouselType {
  src: string;
}
interface ISimilarProduct {
  id: number;
  images: string;
  productName: string;
  price: string;
  discount: number;
}
const ProductDetail = () => {
  const [indexImg, setIndexImg] = useState(0);
  const [similarProduct, setSimilarProduct] = useState<ISimilarProduct[]>();
  const [carouselItem, setCarouselItem] = useState<carouselType[]>();
  const [productItem, setProductItem] = useState<IProduct>();
  const [information, setInformation] = useState<infoType[]>();
  const [propertiesTofill, setPropertiesToFill] = useState<propertiesType[] | null>();
  const [productProperties, setProductProperties] = useState();
  let { id } = useParams();
  const headerTitleData = [
    { url: "/", titleName: "Trang chủ" },
    { url: "/products", titleName: "Sản phẩm" },
    { url: "", titleName: "Chi tiết" }
  ]

  const handleSelect = (i: number) => {
    setIndexImg(i);
  };
  const fetchProductById = async () => {
    if (id) {
      let { data } = await getProductById(id);
      if (data && data.result) {
        console.log("fetch data by id ", data);
        setProductItem(data.data);
        console.log("json carousel ", JSON.parse(data.data.images));

        setCarouselItem(JSON.parse(data.data.images));
        if (data.data?.information) {
          prepareInformation(data.data.information);
        }
        if (data.data.Category) {
          prepareProperties(data.data.Category.properties);
        }
        if (data && data.similarProduct) {
          let SiProduct = JSON.parse(JSON.stringify(data.similarProduct));
          let SPTmp: ISimilarProduct[] = [];
          SiProduct.map((sp: IProductItem) => {
            let img = JSON.parse(sp.Product.images);
            SPTmp.push({
              id: sp.Product.id,
              images: img[0].src,
              productName: sp.Product.productName,
              price: sp.Product.price,
              discount: sp.Product.discount
            });
          });
          console.log("json SiProduct ", SPTmp);
          setSimilarProduct(SPTmp);
        }
      }
    } else {
      return <Navigate to="/404" />
    }
  }
  const prepareInformation = (information: string) => {
    let info = information.split(", ");
    let info1: infoType[] = [];
    info.map((item: any) => {
      let strPath = item.split(":")
      info1.push({
        name: strPath[0],
        value: strPath[1]
      });
      return info1;
    })
    setInformation(info1);
  }
  // display properties to select box
  const prepareProperties = (properties: string) => {
    let catProperties = JSON.parse(properties.toString());
    if (catProperties) {
      catProperties.map(
        (cp: propertiesType) => {
          cp.option = cp.option.toString().split("||");
          handleSelectedProperties(cp.nameProp, cp.option[0]);
        }
      );
    }
    setPropertiesToFill(catProperties);
  };
  // set prpperties is selected
  const handleSelectedProperties = (propKey: string, value: string) => {
    let productProp: any = Object.assign({}, productProperties);
    productProp[propKey] = value;
    setProductProperties(productProp);
  };
  useEffect(() => {
    fetchProductById();
  }, [])

  return (
    <>
      <HeaderTitle data={headerTitleData} />
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
                      {carouselItem && carouselItem.map((item, index) => (
                        <Carousel.Item key={`carousel${index}`}>
                          <img
                            src={item.src}
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
                        {carouselItem && carouselItem.map((item, index) => (
                          <button
                            className={"col border thumb-width " +
                              (indexImg === index
                                ? "border-danger card px-0 mx-1"
                                : "card px-0 mx-1")
                            }
                            key={`thumb${index}`}
                            onClick={() => setIndexImg(index)}
                          >
                            <img
                              src={item.src}
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
                    <h3>{productItem?.productName}</h3>
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
                      {productItem?.discount
                        ?
                        <>
                          <h4 className="text-danger fw-bold mb-1 me-1">
                            {formatNumber(+productItem?.price - (+productItem?.price * productItem?.discount / 100))}
                          </h4>
                          <span className="mx-2">
                            <s>{formatNumber(+productItem?.price)}</s>
                          </span>
                          <span
                            style={{ backgroundColor: "#ff0000", fontSize: "0.8rem" }}
                            className="text-light px-1 my-1 rounded-2"
                          >
                            -{productItem.discount}%
                          </span>
                        </>
                        :
                        <h4 className="mb-1 me-1">{formatNumber(productItem?.price ? +productItem?.price : 0)}</h4>}
                    </div>
                    <p className="text mb-3">{productItem?.description}</p>
                    <h5>Thông tin chung:</h5>
                    {
                      information && information.map((inf, index) =>
                        <div className="d-flex flex-row" key={`inf${index}`}>
                          <p className="mb-2 col-sm-2 col-3 fw-bold">{inf.name}:</p>
                          <p className="mb-2">{inf.value}</p>
                        </div>
                      )
                    }
                    <hr />
                    <div className="row">
                      {propertiesTofill && propertiesTofill.map((prop, index) =>
                        <div className="col-md-5 col-xl-4 me-5" key={`prop${index}`}>
                          <p className="mb-0">{prop.nameProp}</p>
                          <select
                            className="form-select border border-dark text-center"
                            style={{ maxWidth: "279px" }}
                            onChange={(e) =>
                              handleSelectedProperties(prop.nameProp, e.target.value)
                            }
                            value={prop.option[0]}
                          >
                            {prop.option &&
                              prop.option.map((pa) => (
                                <option value={pa} key={`op${pa}`}>
                                  {pa}
                                </option>
                              ))}
                          </select>
                        </div>
                      )}

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
                {similarProduct && similarProduct.length > 0
                  ?
                  similarProduct.map((item, index) => (
                    <div className="row pt-2" key={`similar${index}`}>
                      <div className="me-lg-5">
                        <NavLink to="/" className="d-flex nav-link">
                          <img
                            src={item.images}
                            className="border rounded me-3 img-product"
                            alt="product"
                          />
                          <div className="d-flex flex-column">
                            <span>{item.productName}</span>
                            {/* <p className="text-muted">{item.details}</p> */}
                            <p className="m-0">
                              <s>{formatNumber(+item?.price)}</s>
                            </p>
                            <div className="">
                              <span className="fw-bold text-danger me-3">
                                {formatNumber(+item.price - (+item.price * item.discount / 100))}
                              </span>
                              <span
                                style={{ backgroundColor: "#ff0000", fontSize: "0.8rem" }}
                                className="text-light px-1 my-1 rounded-2"
                              >
                                -{item.discount}%
                              </span>
                            </div>
                          </div>
                        </NavLink>
                      </div>
                    </div>
                  ))
                  :
                  <h6>Không có sản phẩm tương tự</h6>
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
