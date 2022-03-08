const sequelize = require('../../config/connection');
const router = require('express').Router();
const { Recipes, User, Categories, Comments } = require('../../models');
const withAuth = require('../../utils/auth')


// get all recipes
router.get('/', (req, res) => {
    console.log('======================');
    Recipes.findAll({
        attributes: ['id', 'recipe_name', 'recipe_instructions', 'category_id', 'ingredients', 'user_id' ],
        order: [['created_at', 'DESC']],
        include: [
            {
            model: Categories,
            attributes: ['str_category']
            },
            {
            model: User,
            attributes: ['username']
            }
        ],
        include: [
          {
            model: User,
            attributes: ['username']
          },
          {
            model: Comments,
            attributes: ['id', 'comment_text', 'user_id', 'recipe_id', 'created_at']
          }
        ]
    })
    .then(dbRecipeData => res.json(dbRecipeData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  router.get('/:id', (req, res) => {
    Recipes.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 'recipe_name', 'recipe_instructions', 'category_id', 'ingredients', 'user_id'
    ],
      include: [
        {
        model: Categories,
        attributes: ['str_category']
        },
        {
          model: User,
          attributes: ['username']
        }
      ],
      include: [
        {
          model: Comments,
          attributes: ['id', 'comment_text', 'user_id', 'recipe_id', 'created_at']
        }
      ]
    })
      .then(dbRecipeData => {
        if (!dbRecipeData) {
          res.status(404).json({ message: 'No recipe found with this id' });
          return;
        }
        res.json(dbRecipeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  
  router.post('/', (req, res) => {
     // expects { "recipe_name": "pizza", "recipe_instructions": "put in the oven", "category_id": 5, "ingredients": "Dough, flour, sauce, and cheese", "user_id": 1 } 
    Recipes.create({
      recipe_name: req.body.recipe_name,
      recipe_instructions: req.body.recipe_instructions,
      category_id: req.body.category_id,
      ingredients: req.body.ingredients,
      user_id: req.body.user_id
    })
      .then(dbRecipeData => res.json(dbRecipeData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  
  router.put('/:id', withAuth, (req, res) => {
    Recipes.update(
      {
        recipe_name: req.body.recipe_name,
        recipe_instructions: req.body.recipe_instructions,
        ingredients: req.body.ingredients,
      },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(dbRecipeData => {
        if (!dbRecipeData) {
          console.log("No recipe found for ID", req.params.id)
          res.status(404).json({ message: 'No recipe found with this id' });
          return;
        }
        res.json(dbRecipeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete('/:id', withAuth, (req, res) => {
    Recipes.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbRecipeData => {
        if (!dbRecipeData) {
          res.status(404).json({ message: 'No recipe found with this id' });
          return;
        }
        res.json(dbRecipeData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

module.exports = router;