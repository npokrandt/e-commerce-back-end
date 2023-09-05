const router = require('express').Router();
const { Category, Product } = require('../../models');
// const sequelize = require('./config/connection')

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const category_data = await Category.findAll({include: Product})
 
    res.json(category_data)
  } catch (err){
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const category_data = await Category.findByPk(id, {include: Product})

    res.json(category_data)
  } catch (err){
    res.status(500).json(err)
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
