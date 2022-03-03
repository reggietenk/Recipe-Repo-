const router = require('express').Router();
const { Categories } = require('../../models');

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
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
      where: {
          id_category: req.params.id_category
      },
      attributes: ['id_category', 'str_category', 'str_category_thumb', 'str_category_description'],
    //   include: [
    //       {
    //           model: Product,
    //           attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    //       }
    //   ]
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

router.post('/', (req, res) => {
  // create a new category
  Category.create({
      str_category: req.body.str_category,
      str_category_thumb: req.body.str-category_thumb,
      str_Category_description: req.body.str_category_description
  })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
});


router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
     str_category: req.body.str_category
    },
    {
      where: {
        id_category: req.params.id_category
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
  Category.destroy({
    where: {
      id_category: req.params.id_category
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