import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { getProductRecommeded } from "../service/productService";
import ProductItem from "./customComponent/ProductItem";
import "../styles/Home.scss";

const RecommendedItems = () => {
  const [recomendedList, setRecomendedList] = useState<IProductItem[] | null>();
  const fetchProduct = async () => {
    let { data } = await getProductRecommeded();
    console.log("check get recm product ", data);
    if (data && data.result) {
      setRecomendedList(data.data);
    } else {
      setRecomendedList(null);
    }
  }
  useEffect(() => {
    fetchProduct();
  }, [])

  return (
    // Recommended
    <section>
      <div className="container my-3">
        <header className="py-2">
          <h3>Recommended items</h3>
        </header>

        <div className="row">
          {recomendedList && recomendedList.length > 0 ?
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
              {recomendedList.map((items, index) => (
                <div className="me-4" key={`productItem${index}`}>
                  <ProductItem
                    data={items.Product}
                    isWishList={false}
                  />
                </div>
              ))}
            </Carousel>
            :
            <h5>Sản phẩm đang cập nhật</h5>
          }
          {/* {recomendedList && recomendedList.map((items, index) => (
            <div
              className="col-lg-3 col-md-4 col-6 product-space"
              key={`re${index}`}
            >
              <ProductItem
                data={items.Product}
                isWishList={false}
              />
            </div>
          ))} */}
        </div>
      </div>
    </section>
    // <!-- Recommended -->
  );
};

export default RecommendedItems;
