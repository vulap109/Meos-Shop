import db from "../models";

const findAllCategories = async () => {
  try {
    let data = [];
    data = await db.Category.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
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

const findCategories = async (id) => {
  try {
    let data = [];
    data = await db.Category.findOne({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      where: { id: id },
    });
    console.log("check data by id", data);
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

const createCategory = async (rawData) => {
  try {
    let data = [];
    data = await db.Category.create({
      categoryName: rawData.categoryName,
      parent: rawData.parent,
      properties: rawData.properties,
    });
    if (data.id) {
      return {
        result: true,
        message: `Save category success with id: ${data.id}`,
      };
    } else {
      return {
        result: false,
        message: "Save category faild.",
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
const updateCategory = async (rawData) => {
  try {
    let data = [];
    data = await db.Category.update(
      {
        categoryName: rawData.categoryName,
        parent: rawData.parent,
        properties: rawData.properties,
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
        message: `Save category successfully.`,
      };
    } else {
      return {
        result: false,
        message: "Save category faild.",
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
  findAllCategories,
  createCategory,
  findCategories,
  updateCategory,
};
