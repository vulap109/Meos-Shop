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
const editProduct = async (req, res) => {
  try {
    if (req.body.productName && req.body.price) {
      let save = await productService.updateProduct(req.body);
      return res.status(200).json(save);
    }
    return res.status(200).json({
      result: false,
      message: "Can not save category without name and price.",
    });
  } catch (error) {
    // return case error
    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};
const uploadImg = async (req, res) => {
  try {
    const listFiles = [...req.files];
    if (listFiles && listFiles.length > 0) {
      let imagesURL = [];
      listFiles.map((lf) =>
        imagesURL.push({ src: "http://localhost:8080/images/" + lf.filename })
      );
      console.log(">>> check images ", imagesURL);
      return res.status(200).json({
        result: true,
        message: "Upload images success!",
        images: imagesURL,
      });
    }

    return res.status(200).json({
      result: false,
      message: "Upload images failed!",
    });
  } catch (error) {
    // return case error
    return res.status(500).json({
      result: false,
      message: "Some error occupied with server!",
    });
  }
};
const getProductsNew = async (req, res) => {
  try {
    let productList = {};
    productList = await productService.findProductsNew();
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

module.exports = {
  getAllProducts,
  saveProduct,
  getProductById,
  editProduct,
  uploadImg,
  getProductsNew
};
