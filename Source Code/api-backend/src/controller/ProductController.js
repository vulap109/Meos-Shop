import productService from "../service/ProductService";

const getAllProducts = async (req, res) => {
  try {
    let productList = {};
    productList = await productService.findAllProducts();
    if (productList) {
      return res.status(200).json(productList);
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

const getProductById = async (req, res) => {
  try {
    let productList = {};
    productList = await productService.findProductById(req.params.id);
    if (productList) {
      return res.status(200).json(productList);
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
const saveProduct = async (req, res) => {
  try {
    if (req.body.productName && req.body.price) {
      let save = await productService.createProduct(req.body);
      return res.status(200).json(save);
    }
    return res.status(200).json({
      result: false,
      message: "Can not save product without name and price.",
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
      let save = await productService.updateCategory(req.body);
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
  getAllProducts,
  saveProduct,
  getProductById,
  editCategory,
};