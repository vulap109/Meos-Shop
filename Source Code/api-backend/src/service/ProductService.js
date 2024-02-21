import db from "../models";
import { Sequelize } from 'sequelize';
import { Op } from 'sequelize';

const findAllProducts = async () => {
  try {
    let data = [];
    data = await db.Product.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "CategoryId"] },
    });
    if (data) {
      return {
        result: true,
        data: data,
      };
    } else {
      return {
        result: false,
        message: "No data to return.",
      };
    }
  } catch (error) {
    // return error if ORM create user has catch
    console.log("error service", error);
    return {
      result: false,
      message: "Some error occupied with service!",
    };
  }
};

const findProductById = async (id) => {
  try {
    let data = [];
    data = await db.Product.findOne({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: { id: id },
      include: {
        model: db.Category,
        attributes: ["properties"],
      },
    });
    console.log("check data product by id", data);
    if (data) {
      // get similar product by category id
      let similarProduct = [];
      similarProduct = await db.DetailOrder.findAll({
        attributes: ['productId', [Sequelize.fn('sum', Sequelize.col('quantity')), 'sumcol']],
        order: [['sumcol', 'DESC']],
        limit: 5,
        group: 'productId',
        include: {
          model: db.Product,
          attributes: ['id', 'productName', 'discount', 'label', 'price', 'images'],
          where: {
            categoryId: data.categoryId,
            id: { [Op.ne]: data.id }
          }
        },
      });
      console.log("check data product similar", similarProduct);
      return {
        result: true,
        data: data,
        similarProduct: similarProduct,
      };
    } else {
      return {
        result: false,
        message: "No data to return.",
      };
    }
  } catch (error) {
    // return error if ORM create user has catch
    console.log("error service", error);
    return {
      result: false,
      message: "Some error occupied with service!",
    };
  }
};

const createProduct = async (rawData) => {
  try {
    let data = [];
    data = await db.Product.create({
      productName: rawData.productName,
      properties: rawData.properties,
      images: rawData.images,
      description: rawData.description,
      price: rawData.price,
      categoryId: rawData.categoryId,
    });
    if (data.id) {
      return {
        result: true,
        message: `Save product success with id: ${data.id}`,
      };
    } else {
      return {
        result: false,
        message: "Save product faild.",
      };
    }
  } catch (error) {
    // return error if ORM create user has catch
    console.log("error service", error);
    return {
      result: false,
      message: "Some error occupied with service!",
    };
  }
};
const updateProduct = async (rawData) => {
  try {
    let data = [];
    data = await db.Product.update(
      {
        productName: rawData.productName,
        properties: rawData.properties,
        images: rawData.images,
        description: rawData.description,
        price: rawData.price,
        categoryId: rawData.categoryId,
      },
      {
        where: {
          id: rawData.id,
        },
      }
    );
    if (data) {
      return {
        result: true,
        message: `Save product successfully.`,
      };
    } else {
      return {
        result: false,
        message: "Save product faild.",
      };
    }
  } catch (error) {
    // return error if ORM create user has catch
    console.log("error service", error);
    return {
      result: false,
      message: "Some error occupied with service!",
    };
  }
};
const findProductsNew = async () => {
  try {
    let data = [];
    data = await db.Product.findAll({
      // attributes: { exclude: ["createdAt", "updatedAt"] },
      order: ['createdAt'],
      limit: 10,
    });
    console.log("check data product by id", data);
    if (data) {
      return {
        result: true,
        data: data,
      };
    } else {
      return {
        result: false,
        message: "No data to return.",
      };
    }
  } catch (error) {
    // return error if ORM create user has catch
    console.log("error service", error);
    return {
      result: false,
      message: "Some error occupied with service!",
    };
  }
};
const productRecomendedList = async () => {
  try {
    let data = [];
    data = await db.DetailOrder.findAll({
      attributes: ['productId', [Sequelize.fn('sum', Sequelize.col('quantity')), 'sumcol']],
      order: [['sumcol', 'DESC']],
      limit: 10,
      group: 'productId',
      include: {
        model: db.Product,
        attributes: ['id', 'productName', 'discount', 'label', 'price', 'images']
      },
    });
    if (data) {
      return {
        result: true,
        data: data,
      };
    } else {
      return {
        result: false,
        message: "No data to return.",
      };
    }
  } catch (error) {
    // return error if ORM create user has catch
    console.log("error service", error);
    return {
      result: false,
      message: "Some error occupied with service!",
    };
  }
};
const productByCategory = async (idCat) => {
  try {
    let data = [];
    data = await db.Product.findAll({
      attributes: ['id', 'productName', 'discount', 'label', 'price', 'images', 'description', 'properties', 'categoryId', 'information'],
      include: {
        model: db.Category,
        attributes: ['id'],
        where: {
          [Op.or]: [
            { parent: idCat },
            { id: idCat }
          ]
        }
      },
    });

    if (data) {
      return {
        result: true,
        data: data,
      };
    } else {
      return {
        result: false,
        message: "No data to return.",
      };
    }
  } catch (error) {
    // return error if ORM create user has catch
    console.log("error service", error);
    return {
      result: false,
      message: "Some error occupied with service!",
    };
  }
};

module.exports = {
  findAllProducts,
  createProduct,
  findProductById,
  updateProduct,
  findProductsNew,
  productRecomendedList,
  productByCategory,
};
