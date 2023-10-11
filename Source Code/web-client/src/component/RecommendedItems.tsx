import React from "react";
import ProductItem from "./customComponent/ProductItem";

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
  ];
  return (
    // Recommended
    <section>
      <div className="container my-5">
        <header className="mb-4">
          <h3>Recommended items</h3>
        </header>

        <div className="row">
          {Recommended.map((items, index) => (
            <ProductItem data={items} key={`productItem${index}`} />
          ))}
        </div>
      </div>
    </section>
    // <!-- Recommended -->
  );
};

export default RecommendedItems;
