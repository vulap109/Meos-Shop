import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100">
      <div
        className="spinner-border text-warning spinner-border-lg"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
