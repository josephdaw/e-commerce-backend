const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all Tags and include associated Product data
router.get('/', async (req, res) => {
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product}]
    })
    res.status(200).json(tagsData)

  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product}]
    })
    res.status(200).json(tagsData)
    
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({where: {id: req.params.id}});
    if (!tagData) return res.status(400).json({ message: 'No Tag found with this ID.'});
    res.status(200).json(tagData)

  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
