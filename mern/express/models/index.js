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
const SESSION = require("./definitions/session");

const models = { USERS, ROLES, VARIATIONS, PRODUCTS, CARTS, ORDERS, ORDER_ITEMS, CART_ITEMS, SESSION };

//relationships between tables

//USER-CART 1:1

USERS.hasOne(CARTS, { foreignKey: 'userId' });
CARTS.belongsTo(USERS, { foreignKey: 'userId' });

//userS-role 1:M

ROLES.hasMany(USERS, { foreignKey: 'roleId' });
USERS.belongsTo(ROLES, { foreignKey: 'roleId' });

//USER-ORDER 1:M

USERS.hasMany(ORDERS, { foreignKey: 'userId' });
ORDERS.belongsTo(USERS, { foreignKey: 'userId' });


//USER-PRODUCT 1:M

USERS.hasMany(PRODUCTS, { foreignKey: 'userId' });
PRODUCTS.belongsTo(USERS, { foreignKey: 'userId' });

//PRODUCT-VARIATION 1:M

PRODUCTS.hasMany(VARIATIONS, { foreignKey: 'variationId' });
VARIATIONS.belongsTo(PRODUCTS, { foreignKey: 'variationId' });

//VARIATION-CART_ITEMS 1:M && CART-CART_ITEM 1:M (VARIATION-CART_ITEMS-CART  M:M)

VARIATIONS.hasMany(CART_ITEMS, { foreignKey: 'variationId' });
CART_ITEMS.belongsTo(VARIATIONS, { foreignKey: 'variationId' });

CARTS.hasMany(CART_ITEMS, { foreignKey: 'cartId' });
CART_ITEMS.belongsTo(CARTS, { foreignKey: 'cartId' });

//VARIATION-ORDER_ITEMS 1:M && ORDER-ORDER_ITEM 1:M (VARIATION-ORDER_ITEMS-ORDER  M:M)

VARIATIONS.hasMany(ORDER_ITEMS, { foreignKey: 'variationId' });
ORDER_ITEMS.belongsTo(VARIATIONS, { foreignKey: 'variationId' });

ORDERS.hasMany(ORDER_ITEMS, { foreignKey: 'orderId' });
ORDER_ITEMS.belongsTo(ORDERS, { foreignKey: 'orderId' });

//USER-SESSION 1:1

USERS.hasOne(SESSION, { foreignKey: 'userId' });
SESSION.belongsTo(USERS, { foreignKey: 'userId' });


const db = {};

db.sequelize = sequelize; // creating a key called sequelize and assigning it the value of the sequelize connection
sequelize.models = models;

module.exports = { models, db }; 