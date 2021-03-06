const seedCategories = require('./category-seeds');
const sequelize = require('../config/connection');
const seedRecipes = require('./recipe-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedRecipes();
    console.log('\n----- RECIPES SEEDED -----\n');
    
    

    process.exit(0);
};

seedAll();