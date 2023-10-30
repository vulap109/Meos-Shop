import productService from "../service/ProductService";

const getAllCategories = async (req, res) => {
  try {
    let categoryList = {};
    categoryList = await productService.findAllCategories();
    if (categoryList) {
      return res.status(200).json(categoryList);
    } else {
      return res.status(200).json({
        result: false,
        message: "Some error occupied with server!",
      });
    }
  } catch (error) {
    // return case error
    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};

const saveCategory = async (req, res) => {
  try {
    console.log(">>> check body data: ", req.body);
    if (req.body.categoryName) {
      let save = await productService.createCategory(req.body);
      return res.status(200).json(save);
    }
    return res.status(200).json({
      result: false,
      message: "Can not save category without category name.",
    });
  } catch (error) {
    // return case error
    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};

module.exports = {
  getAllCategories,
  saveCategory,
};
