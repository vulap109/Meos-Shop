import React from "react";

const Home = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <h3 className="text-dark">Order</h3>

        <div className="row m-0 justify-content-evenly">
          <div className="col-lg-3 col-md-4 col-sm-8 mb-md-0 mb-3">
            <div className="card p-2 border shadow-sm product-hover align-items-center">
              <h5>TODAY</h5>
              <h2 className="text-primary">10</h2>
              <span>10 orders today</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-8 mb-md-0 mb-3">
            <div className="card p-2 border shadow-sm product-hover align-items-center">
              <h5>WEEK</h5>
              <h2 className="text-primary">10</h2>
              <span>10 orders this week</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-8">
            <div className="card p-2 border shadow-sm product-hover align-items-center">
              <h5>THIS MONTH</h5>
              <h2 className="text-primary">10</h2>
              <span>10 orders this month</span>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column mt-5">
        <h3 className="text-dark">Revenue</h3>

        <div className="row m-0 justify-content-evenly">
          <div className="col-lg-3 col-md-4 col-sm-8 mb-md-0 mb-3">
            <div className="card p-2 border shadow-sm product-hover align-items-center">
              <h5>TODAY</h5>
              <h2 className="text-primary">1.234.567 đ</h2>
              <span>10 orders today</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-8 mb-md-0 mb-3">
            <div className="card p-2 border shadow-sm product-hover align-items-center">
              <h5>WEEK</h5>
              <h2 className="text-primary">1.234.567 đ</h2>
              <span>10 orders this week</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-8">
            <div className="card p-2 border shadow-sm product-hover align-items-center">
              <h5>THIS MONTH</h5>
              <h2 className="text-primary">1.234.567 đ</h2>
              <span>10 orders this month</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
