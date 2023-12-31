"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DetailOrder.belongsTo(models.Product);
      DetailOrder.belongsTo(models.Order);
    }
  }
  DetailOrder.init(
    {
      quantity: DataTypes.INTEGER,
      properties: DataTypes.STRING,
      note: DataTypes.STRING,
      productId: DataTypes.INTEGER,
      orderId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "DetailOrder",
    }
  );
  return DetailOrder;
};
