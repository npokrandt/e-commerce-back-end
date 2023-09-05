const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tag_data = await Tag.findAll({include: [
      {
        model: Product
      }
    ]})
 
    res.json(tag_data)
  } catch (err){
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id
  try {
    const tag_data = await Tag.findByPk(id, {include: [
      {
        model: Product
      }
    ]})

    res.json(tag_data)
  } catch (err){
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  
  try {
    await Tag.create(req.body)
  
    res.status(201).json(`new tag created!`)
  } catch (err){
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  const id = req.params.id
  try {
    await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: id
        }
      }
    )
  
    res.status(201).json(`tag updated!`)
  } catch (err){
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id
  try {
    await Tag.destroy(
      {
        where: {
         id: id
        } 
      }
    )

    res.send(`tag deleted!`)
  } catch (err){
    res.status(500).json(err)
  } 
});

module.exports = router;
