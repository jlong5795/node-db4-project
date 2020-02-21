exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        { recipe_id: 1, step_number: 1, description: "add wate to brownie mix" },
        { recipe_id: 1, step_number: 2, description: "mix it up" },
        { recipe_id: 1, step_number: 3, description: "bake it" },
        { recipe_id: 2, step_number: 1, description: "pre-heat pan with 2 tbl of butter"},
        { recipe_id: 2, step_number: 2, description: "Place slice of cheese between two sliced of bread" },
        { recipe_id: 2, step_number: 3, description: "Toast on first side until golden brown" },
        { recipe_id: 2, step_number: 4, description: "Toast on second side until golden brown" },
        { recipe_id: 2, step_number: 5, description: "Eat" },
      ]);
    });
};