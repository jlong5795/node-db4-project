const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
};

function getRecipes() {
    return db('recipes');
};

function getShoppingList(recipe_id) {
    return db('recipe_ingredients')
        .join('recipes', 'recipes.id', 'recipe_ingredients.recipe_id')
        .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
        .select('recipes.name', 'ingredients.ingredient_name', 'ingredients.ingredient_amount')
        .where('recipe_id', recipe_id);
};

function getInstructions(recipe_id) {
    return db('steps')
        .select('*')
        .where('recipe_id', recipe_id)
};