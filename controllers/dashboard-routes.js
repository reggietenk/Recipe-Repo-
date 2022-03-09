const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipes, User, Comments, Categories } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', withAuth, (req, res) => {
  Recipes.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'recipe_name',
      'recipe_instructions',
      'category_id',
      'ingredients',
      'created_at',
    ],
    include: [
      {
        model: Comments,
        attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      },
      {
        model: Categories,
        attributes: ['str_category']
      }
    ]
  })
    .then(dbRecipeData => {
      // serialize data before passing to template
      const recipes = dbRecipeData.map(recipe => recipe.get({ plain: true }));
      res.render('dashboard', { recipes, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Recipes.findOne({
          where: {
              id: req.params.id
          },
          attributes: [
            'id',
            'recipe_name',
            'recipe_instructions',
            'category_id',
            'ingredients',
            'created_at',
          ],
          include: [{
                  model: Comment,
                  attributes: ['id', 'comment_text', 'recipe_id', 'user_id', 'created_at'],
                  include: {
                      model: User,
                      attributes: ['username']
                  }
              },
              {
                  model: User,
                  attributes: ['username']
              }
          ]
      })
      .then(dbRecipeData => {
          if (!dbRecipeData) {
              res.status(404).json({
                  message: 'No recipe found with this id'
              });
              return;
          }

          const recipe = dbRecipeData.get({
              plain: true
          });

          res.render('edit-recipe', {
              recipe,
              loggedIn: true
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      });
})


module.exports = router;