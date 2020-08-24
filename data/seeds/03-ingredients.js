exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        { ingredient_name: "brownie mix", ingredient_amount: 1 },
        { ingredient_name: "eggs", ingredient_amount: 8 },
        { ingredient_name: "milk cups", ingredient_amount: 3.5 },
        { ingredient_name: "bread", ingredient_amount: 2 },
        { ingredient_name: "cheese slices", ingredient_amount: 1 },
        { ingredient_name: "butter tbls", ingredient_amount: 2}
      ]);
    });
};