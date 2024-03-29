import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

import LabelProduct from "./LabelProduct";
import HeartButton from "./HeartButton";
import "../../styles/ProductItem.scss";
import { formatNumber } from "../../utils/format";
import { AddCart } from "../../redux/cart/cartAction";

interface productItemProps {
  data: IProduct;
  isWishList: boolean;
}
const ProductItem = ({ data, isWishList }: productItemProps) => {
  const [image, setImage] = useState("");
  const dispatch: Dispatch<any> = useDispatch();

  const addToCart = (item: IProduct) => {
    let product: ICart = {
      id: item.id,
      image: image,
      productName: item.productName,
      price: item.price,
      discount: item.discount,
      quantity: 1,
    }
    dispatch(AddCart(product));
    console.log("check product add to cart: ", product);
  }

  const getImgProduct = () => {
    const img = JSON.parse(data.images);
    setImage(img[0].src);
  }
  useEffect(() => {
    getImgProduct();
  }, []);

  return (
    // <div className="col-lg-3 col-md-6 col-sm-6">
    <div className="card px-2 border shadow-sm mb-4 product-hover">
      {data.label && <LabelProduct label={data.label} />}
      <NavLink to={`/product-detail/${data.id}`} className="justify-content-center d-flex pb-1">
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
        <div className="price-wrap mb-2 d-flex flex-column">
          {data.discount ? (
            <>
              <div>
                <del>{formatNumber(+data.price)}</del>
              </div>
              <div>
                <strong className="me-2">{formatNumber(+data.price - (+data.price * data.discount / 100))}</strong>
                <span
                  style={{ backgroundColor: "#ff0000", fontSize: "0.8rem" }}
                  className="text-light px-1 my-1 rounded-2"
                >
                  -{data.discount}%
                </span>
              </div>
            </>
          ) :
            (<>
              <div className="mt-4">
                <strong>{formatNumber(+data.price)}</strong>
              </div>
            </>)
          }
        </div>

        {!isWishList && (
          <div className="border-top border-2 d-flex align-items-end py-3 px-0 mt-auto">
            <button className="btn btn-outline-primary w-100 px-1 text-truncate" onClick={() => addToCart(data)}>
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
