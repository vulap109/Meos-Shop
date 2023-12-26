import React, { useEffect, useState } from "react";
import ProductItem from "./customComponent/ProductItem";
import "../styles/Home.scss";
import { getProductRecommeded } from "../service/productService";

const RecommendedItems = () => {
  const Recommended = [
    {
      label: "New",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp",
      title: "Gaming Headset with Mic",
      describe: "",
      price: "$18.95",
      priceAf: "$16.95",
      disscount: "18%",
    },
    {
      label: "",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp",
      title: "Apple Watch Series 1 Sport",
      describe: "",
      price: "$40.95",
      priceAf: "",
      disscount: "",
    },
    {
      label: "",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/9.webp",
      title: "Men's Denim Jeans Shorts",
      describe: "",
      price: "$17.95",
      priceAf: "$16.95",
      disscount: "18%",
    },
    {
      label: "",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp",
      title: "Mens T-shirt Cotton Base Layer Slim fit",
      describe: "",
      price: "$13.95",
      priceAf: "",
      disscount: "",
    },
    {
      label: "",
      img: "https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp",
      title: "Mens T-shirt Cotton Base Layer Slim fit",
      describe: "",
      price: "$13.95",
      priceAf: "",
      disscount: "",
    },
  ];
  const [recomendedList, setRecomendedList] = useState<IRecommeded[] | null>();
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
          {recomendedList && recomendedList.map((items, index) => (
            <div
              className="col-lg-3 col-md-4 col-6 product-space"
              key={`re${index}`}
            >
              <ProductItem
                data={items.Product}
                isWishList={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    // <!-- Recommended -->
  );
};

export default RecommendedItems;
