import React, { useEffect, useState } from "react";
import LabelProduct from "./LabelProduct";
import { NavLink } from "react-router-dom";
import HeartButton from "./HeartButton";
import "../../styles/ProductItem.scss";
import { formatNumber } from "../../utils/format";

interface productItemProps {
  data: IProduct;
  isWishList: boolean;
}
const ProductItem = ({ data, isWishList }: productItemProps) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const img = JSON.parse(data.images);
    setImage(img[0].src);
  }, []);

  return (
    // <div className="col-lg-3 col-md-6 col-sm-6">
    <div className="card px-2 border shadow-sm mb-4 product-hover">
      {data.label && <LabelProduct label={data.label} />}
      <NavLink to={`/product-detail/${data.id}`} className="justify-content-center d-flex">
        <img
          src={image}
          className="card-img-top rounded-2"
          alt="product"
          style={{ maxWidth: "200px" }}
        />
      </NavLink>
      <div className="card-body d-flex flex-column pt-3 p-0 border-top">
        <NavLink to={`/product-detail/${data.id}`} className="nav-link">
          {data.productName}
        </NavLink>
        <div className="price-wrap mb-2 d-flex justify-content-between">
          {data.disscount ? (
            <>
              <div>
                <strong>{formatNumber(+data.price - (+data.price * data.disscount / 100))}</strong>
                <del>{formatNumber(+data.price)}</del>
              </div>
              <span
                style={{ backgroundColor: "#ff0000", fontSize: "0.8rem" }}
                className="text-light px-1 my-1 rounded-2"
              >
                -{data.disscount}%
              </span>
            </>
          ) :
            (<>
              <div>
                <strong>{formatNumber(+data.price)}</strong>
              </div>
            </>)
          }
        </div>

        {!isWishList && (
          <div className="border-top border-2 d-flex align-items-end py-3 px-0 mt-auto">
            <button className="btn btn-outline-primary w-100 px-1 text-truncate">
              <i className="fa-solid fa-cart-shopping me-2"></i>
              <span className="d-none d-sm-inline">Thêm vào giỏ</span>
            </button>
            <HeartButton />
          </div>
        )}
      </div>
    </div>
    // </div>
  );
};

export default ProductItem;
