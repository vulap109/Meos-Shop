import React from "react";
import LabelProduct from "./LabelProduct";
import { NavLink } from "react-router-dom";
import HeartButton from "./HeartButton";
import "../../styles/ProductItem.scss";

interface productItemProps {
  data: {
    label: string;
    img: string;
    title: string;
    describe: string;
    price: string;
    priceAf: string;
    disscount: string;
  };
}
const ProductItem = ({ data }: productItemProps) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card px-4 border shadow-sm mb-4 product-hover">
        {data.label && <LabelProduct label={data.label} />}
        <NavLink to="/">
          <img
            src={data.img}
            className="card-img-top rounded-2"
            alt="product"
          />
        </NavLink>
        <div className="card-body d-flex flex-column pt-3 border-top">
          <NavLink to="/" className="nav-link">
            {data.title}
          </NavLink>
          {data.describe && <span className="text-muted">{data.describe}</span>}
          <div className="price-wrap mb-2 d-flex justify-content-between">
            <div>
              <strong>{data.price}</strong>
              {data.priceAf && <del>{data.priceAf}</del>}
            </div>
            {data.disscount && (
              <span
                style={{ backgroundColor: "#ff0000", fontSize: "0.8rem" }}
                className="text-light px-1 my-1 rounded-2"
              >
                -{data.disscount}
              </span>
            )}
          </div>
          <div className="border-top border-2 d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
            <NavLink to="/" className="btn btn-outline-primary w-100">
              Add to cart
            </NavLink>
            <HeartButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
