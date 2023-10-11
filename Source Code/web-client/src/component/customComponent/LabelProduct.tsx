import React from "react";

const LabelProduct = ({ label }: { label: string }) => {
  return (
    <div className="mask px-2 heart-height position-absolute">
      <div className="d-flex justify-content-between">
        <h6>
          <span className="badge bg-danger pt-1 mt-3 ms-2">{label}</span>
        </h6>
      </div>
    </div>
  );
};

export default LabelProduct;
