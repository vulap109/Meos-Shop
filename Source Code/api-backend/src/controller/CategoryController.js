import categoryService from "../service/CategoryService";

const getAllCategories = async (req, res) => {
  try {
    let categoryList = {};
    categoryList = await categoryService.findAllCategories();
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

const getCategoryById = async (req, res) => {
  try {
    let categoryList = {};
    categoryList = await categoryService.findCategories(req.params.id);
    if (categoryList) {
      return res.status(200).json(categoryList);
    }
    return res.status(200).json({
      result: false,
      message: "Some error occupied with server!",
    });
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
    if (req.body.categoryName) {
      let save = await categoryService.createCategory(req.body);
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
const editCategory = async (req, res) => {
  try {
    if (req.body.categoryName) {
      let save = await categoryService.updateCategory(req.body);
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
  getCategoryById,
  editCategory,
};
