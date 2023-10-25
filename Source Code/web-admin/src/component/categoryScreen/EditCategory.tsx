import React, { useEffect, useState } from "react";

interface listCategoriesType {
  productName: string;
  parentCategoty: string;
  properties: propertiesType;
}
interface propertiesType {
  nameProp: string;
  option: string;
}
const EditCategory = () => {
  const listCategories = {
    name: "Áo khoác",
    parentCategoty: "",
    properties: [
      { nameProp: "color", option: "red,black,blue" },
      { nameProp: "size", option: "s,m,l" },
    ],
  };
  const categories = ["Áo khoác", "Áo Phông", "Quần", "Quần đùi"];
  const [categoryName, setCategoryName] = useState("");
  const [parentCategoty, setParentCategoty] = useState("");
  const [properties, setProperties] = useState<propertiesType[]>();

  useEffect(() => {
    setCategoryName(listCategories.name);
    setParentCategoty(listCategories.parentCategoty);
    setProperties(listCategories.properties);
  }, []);

  const handleAddProperties = () => {
    let propTMP = properties;
    propTMP?.push({ nameProp: "", option: "" });
    console.log("add properties: ", propTMP);
    setProperties(propTMP);
  };

  return (
    <div>
      <div className="d-flex flex-column text-dark">
        <h3 className="text-dark">Categories</h3>
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">
            Tạo phân loại sản phẩm
          </label>
          <div className="row">
            <div className="col-sm-6 mb-sm-0 mb-2">
              <input
                type="text"
                className="form-control text-dark"
                id="categoryName"
                placeholder="Tên loại sản phẩm"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <select
                className="form-select text-dark col-sm-6"
                aria-label="Default select example"
                onChange={(e) => setParentCategoty(e.target.value)}
                value={parentCategoty}
                defaultValue="default"
              >
                <option value="default">No parent category</option>
                {categories.length > 0 &&
                  categories.map((c, i) => (
                    <option key={`c${i}`} value={c}>
                      {c}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">
            Thuộc tính
          </label>
          <div>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleAddProperties}
            >
              <i className="fa-solid fa-plus"></i> Thêm thuộc tính
            </button>
          </div>
          {properties &&
            properties.map((p, index) => (
              <div className="row mt-2" key={`prop${index}`}>
                <div className="col-sm-6 mb-sm-0 mb-2">
                  <input
                    type="text"
                    className="form-control text-dark"
                    id="categoryName"
                    placeholder="Tên loại sản phẩm"
                    value={p.nameProp}
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="text"
                    className="form-control text-dark"
                    id="categoryName"
                    placeholder="Tên loại sản phẩm"
                    value={p.option}
                  />
                </div>
              </div>
            ))}
        </div>

        <div>
          <button type="button" className="btn btn-primary">
            <i className="fa-regular fa-floppy-disk pe-2"></i> Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
