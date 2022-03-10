const router = require('express').Router();
const { Categories, Recipes } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Categories.findAll({
      attributes: ['id_category', 'str_category', 'str_category_thumb', 'str_category_description'],
    //   include: [
    //       {
    //           model: Product,
    //           attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    //       }
    //   ]
  })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
  Categories.findOne({
    where: {
      id_category: req.params.id
    },
    attributes: ['str_category', 'str_category', 'str_category_thumb', 'str_category_description'
    ],
    include: [
      {
        model: Recipes,
        attributes: ['id', 'recipe_name', 'recipe_instructions', 'category_id', 'ingredients', 'user_id', 'created_at' ]
      }
    ]
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No Category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new category
  Categories.create({
      str_category: req.body.str_category,
      str_category_thumb: req.body.str_category_thumb,
      str_category_description: req.body.str_category_description
  })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});


router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Categories.update(
    {
     str_category: req.body.str_category
    },
    {
      where: {
        id_category: req.params.id
      }
    }
  )
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No Category found with this ID' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Categories.destroy({
    where: {
      id_category: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;