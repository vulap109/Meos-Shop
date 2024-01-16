import React from "react";
import ProductItem from "../customComponent/ProductItem";

const ProductGridView = ({ products }: { products: IProduct[] }) => {
  return (
    <>
      <div className="row">
        {
          products.map((item, index) =>
            <div className="col-lg-4 col-md-6 col-sm-6 d-flex" key={`cat${index}`}>
              <ProductItem
                data={item}
                isWishList={false}
              />
            </div>
          )
        }
      </div>
    </>
  );
};

export default ProductGridView;
