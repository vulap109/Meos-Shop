import React from "react";

const Setting = () => {
  return (
    <>
      <div className="text-dark">
        <h3 className="text-dark">Settings</h3>

        {/* Title banner top left */}
        <div className="mb-3">
          <label htmlFor="banner-left-1" className="form-label">
            Title banner top left
          </label>
          <input type="text" className="form-control" id="banner-left-1" />
        </div>
        <div className="mb-3">
          <label htmlFor="des-left-1" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="des-left-1" />
        </div>

        {/* Title banner top right */}
        <div className="mb-3">
          <label htmlFor="banner-right-1" className="form-label">
            Title banner top right
          </label>
          <input type="text" className="form-control" id="banner-right-1" />
        </div>
        <div className="mb-3">
          <label htmlFor="des-right-1" className="form-label">
            Description
          </label>
          <input type="text" className="form-control" id="des-right-1" />
        </div>

        {/* Sticky banner left */}
        <div className="mb-3">
          <label htmlFor="banner-left" className="form-label">
            Sticky banner left
          </label>
          <input type="file" className="form-control" id="banner-left" />
        </div>
        {/* Sticky banner right */}
        <div className="mb-3">
          <label htmlFor="banner-right" className="form-label">
            Sticky banner right
          </label>
          <input type="file" className="form-control" id="banner-right" />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Shipping price (VND)
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="0 đ"
          />
        </div>

        <div className="row">
          <button
            type="button"
            className="btn btn-success me-2 mb-2 mb-sm-0 col-sm-3"
          >
            <i className="fa-regular fa-floppy-disk pe-2"></i>Save
          </button>
          <button type="button" className="btn btn-danger col-sm-3">
            <i className="fa-solid fa-ban pe-2"></i>Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Setting;
