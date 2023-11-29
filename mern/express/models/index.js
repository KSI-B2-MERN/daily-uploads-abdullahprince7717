//Tables are created here and defined(structured) in definitions folder
const sequelize = require("../bin/dbConnection");
const USERS = require("./definitions/users");
const ROLES = require("./definitions/roles");
const VARIATIONS = require("./definitions/variations");
const PRODUCTS = require("./definitions/products");
const CARTS = require("./definitions/carts");
const ORDERS = require("./definitions/orders");
const ORDER_ITEMS = require("./definitions/orderItems");
const CART_ITEMS = require("./definitions/cartItems");

const models = { USERS, ROLES, VARIATIONS, PRODUCTS, CARTS, ORDERS, ORDER_ITEMS, CART_ITEMS };
const db = {};

db.sequelize = sequelize; // creating a key called sequelize and assigning it the value of the sequelize connection
sequelize.models = models;

module.exports = { models, db }; 