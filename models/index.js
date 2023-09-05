// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// One to many relationship between categories and products
Category.hasMany(Product, {
  foreignKey: 'category_id',
})

Product.belongsTo(Category, {
  foreignKey: 'category_id'
})

Tag.belongsToMany(Product, {
  through: ProductTag,
  uniqueKey: false
})

Product.belongsToMany(Tag, {
  through: ProductTag,
  uniqueKey: false
})

//many to many relationship between products and tags
// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = { 
  Product,
  Category,
  Tag,
  ProductTag,
};
