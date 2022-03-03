const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create our Categories model
class Categories extends Model {}

// create fields/columns for Categories model
Categories.init(
    {
      id_category: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      str_category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      str_category_thumb: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      str_category_description: {
        type: DataTypes.STRING(1000),
        allowNull: true
      }
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'categories'
    }
  );

module.exports = Categories;