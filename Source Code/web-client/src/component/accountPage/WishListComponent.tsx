import React from "react";
import ProductItem from "../customComponent/ProductItem";

const WishListComponent = () => {
  const wishlist = [
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
    <>
      <h4>Danh sách yêu thích</h4>
      <hr />
      <div className="row">
        {wishlist.map((items, index) => (
          <ProductItem
            data={items}
            isWishList={true}
            key={`productItem${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default WishListComponent;
