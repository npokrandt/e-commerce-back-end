const router = require('express').Router();
const { Category, Product } = require('../../models');
// const sequelize = require('./config/connection')

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
    const category_data = await Category.findAll({include: [
      {
        model: Product
      }
    ]})
 
    res.json(category_data)
  } catch (err){
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const category_data = await Category.findByPk(id, {include: [
      {
        model: Product
      }
    ]})

    res.json(category_data)
  } catch (err){
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {
    const new_category = await Category.create(req.body)
  
    res.status(201).json(`new category created!`)
  } catch (err){
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: id
      }
    }
  )
  .then((updatedCategory) => {
    res.send(`category of id: ${id} updated!`);
  })
  .catch((err) => res.json(err));



});

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const deleted_category = await Category.destroy(
      {
        where: {
         id: id
        } 
      }
    )

    res.send(`category of id: ${id} deleted!`)
  } catch (err){
    res.status(500).json(err)
  } 
});

module.exports = router;
