const router = require('express').Router();
const { Categories } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Categories.findAll({
      attributes: ['idCategory', 'strCategory', 'strCategoryThumb', 'strCategoryDescription'],
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
          id: req.params.id
      },
      attributes: ['idCategory', 'strCategory', 'strCategoryThumb', 'strCategoryDescription'],
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
      strCategory: req.body.strCategory,
      strCategoryThumb: req.body.strCategoryThumb,
      strCategoryDescription: req.body.strCategoryDescription
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
     strCategory: req.body.strCategory
    },
    {
      where: {
        idCategory: req.params.idCategory
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
      idCategory: req.params.idCategory
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