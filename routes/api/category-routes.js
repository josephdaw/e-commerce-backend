const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories - including the associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product}]
    })
    res.status(200).json(categoryData)
  } catch (error) {
    res.status(500).json(error)
  }
});

// find one category by its `id` value - include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product}]
    })
    res.status(200).json(categoryData)
  } catch (error) {
    res.status(500).json(error)
  }
});

// create a new category
router.post('/', (req, res) => {
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
});

module.exports = router;
