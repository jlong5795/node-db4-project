const express = require('express');

const Recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'There was an error with your request.'});
    });
});

router.get('/steps/:id', (req, res) => {
    const { id } = req.params
    Recipes.getInstructions(id)
    .then(steps => {
        res.status(200).json(steps);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'There was an error with your request.'});
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ error: 'I failed.' })
    });
});

module.exports = router;