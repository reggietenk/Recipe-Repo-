const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create our Categories model
class Categories extends Model {}

// create fields/columns for Categories model
Categories.init(
    {
      idCategory: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      strCategory: {
        type: DataTypes.STRING,
        allowNull: false
      },
      strCategoryThumb: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isURL: true
        }
      },
      strCategoryDescription: {
        type: DataTypes.STRING,
        allowNull: false
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