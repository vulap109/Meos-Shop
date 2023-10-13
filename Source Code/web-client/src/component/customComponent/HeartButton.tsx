import React, { useState } from "react";

const HeartButton = () => {
  const [like, setLike] = useState(false);

  return (
    <>
      {like ? (
        <button
          type="button"
          className="btn btn-outline-danger mx-2"
          onClick={() => setLike(!like)}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      ) : (
        <button
          type="button"
          className="btn btn-outline-secondary mx-2"
          onClick={() => setLike(!like)}
        >
          <i className="fa-solid fa-heart"></i>
        </button>
      )}
    </>
  );
};

export default HeartButton;
