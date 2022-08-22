var DataTypes = require("sequelize").DataTypes;
var _productos = require("./products");
var _posts = require('./posts');


function initModels(sequelize) {
  var productos = _productos(sequelize, DataTypes);
  var posts = _posts(sequelize,DataTypes);

  return {
    productos,
    posts
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
