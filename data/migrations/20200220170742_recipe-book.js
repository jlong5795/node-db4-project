
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('name', 255).unique().notNullable();
    })
    .createTable('qty_of_measure', tbl => {
        tbl.increments();
        tbl.float('quantity').unique().notNullable();
    })
    .createTable('units_of_measure', tbl => {
        tbl.increments();
        tbl.string('quantity', 255).unique().notNullable();
    })
    .createTable('instructions', tbl => {
        tbl.increments();
        tbl.string('steps').notNullable();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    })
    .createTable('list', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('qty_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('qty_of_measure')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        tbl.integer('unit_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('unit_of_measure')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('list')
        .dropTableIfExists('instructions')
        .dropTableIfExists('units_of_measure')
        .dropTableIfExists('qty_of_measures')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
