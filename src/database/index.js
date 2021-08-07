const Sequelize = require('sequelize');
const dbProps = require('../config/dbproperties');

const Produto = require('../models/Product');
const conn = new Sequelize(dbProps);

Produto.init(conn);

module.exports = conn;