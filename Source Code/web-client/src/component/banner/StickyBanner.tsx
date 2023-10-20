import React, { useEffect, useState } from "react";

const StickyBanner = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [widthBanner, setWidthBanner] = useState(0);

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }

  useEffect(() => {
    const setBanner = () => {
      if (windowSize >= 1560) {
        let wid = (windowSize - 1320) / 2 - 120;
        setWidthBanner(wid);
      }
    };
    setBanner();
  }, [windowSize]);
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <div className="position-relative banner-container">
        <div
          className="position-fixed"
          style={{ top: "170px", left: widthBanner }}
        >
          <img
            src="https://file.hstatic.net/200000722513/file/side_web__1__624412a83eea4c8c82d8e7639a7c9567.png"
            alt=""
            style={{ height: "400px", width: "120px" }}
          />
        </div>
        <div
          className="position-fixed"
          style={{ top: "170px", right: widthBanner }}
        >
          <img
            src="https://file.hstatic.net/200000722513/file/side_web__1__624412a83eea4c8c82d8e7639a7c9567.png"
            alt=""
            style={{ height: "400px", width: "120px" }}
          />
        </div>
      </div>
    </>
  );
};

export default StickyBanner;
