"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo(models.Category);
      Product.hasMany(models.DetailOrder);
    }
  }
  Product.init(
    {
      productName: DataTypes.STRING,
      properties: DataTypes.TEXT,
      images: DataTypes.TEXT,
      description: DataTypes.TEXT,
      price: DataTypes.STRING,
      label: DataTypes.STRING,
      discount: DataTypes.INTEGER,
      information: DataTypes.TEXT,
      categoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
