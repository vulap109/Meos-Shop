import React from "react";

const Home = () => {
  return (
    <>
      <div className="d-flex flex-column">
        <h4>Order</h4>

        <div className="row m-0">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card p-2 border shadow-sm product-hover align-items-center">
              <h6>TODAY</h6>
              <h2>10</h2>
              <span>10 orders today</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card p-2 border shadow-sm product-hover align-items-center">
              <h6>WEEK</h6>
              <h2>10</h2>
              <span>10 orders this week</span>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card p-2 border shadow-sm product-hover align-items-center">
              <h6>THIS MONTH</h6>
              <h2>10</h2>
              <span>10 orders this month</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
