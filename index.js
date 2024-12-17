const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

const recipes = [
  {
    id: 1,
    name: 'Paneer Butter Masala',
    cuisine: 'Indian',
    chef: 'Vikas Khanna',
    prepTimeMinutes: 35,
  },
  {
    id: 2,
    name: 'Hyderabadi Dum Biryani',
    cuisine: 'Indian',
    chef: 'Sanjeev Kapoor',
    prepTimeMinutes: 60,
  },
  {
    id: 3,
    name: 'Spaghetti Aglio e Olio',
    cuisine: 'Italian',
    chef: 'Vikas Khanna',
    prepTimeMinutes: 25,
  },
  {
    id: 4,
    name: 'Chole Bhature',
    cuisine: 'Indian',
    chef: 'Kunal Kapur',
    prepTimeMinutes: 50,
  },
  {
    id: 5,
    name: 'Sushi Roll',
    cuisine: 'Japanese',
    chef: 'Ranveer Brar',
    prepTimeMinutes: 45,
  },
  {
    id: 6,
    name: 'Tacos al Pastor',
    cuisine: 'Mexican',
    chef: 'Nisha Madhulika',
    prepTimeMinutes: 30,
  },
  {
    id: 7,
    name: 'Tom Yum Soup',
    cuisine: 'Thai',
    chef: 'Sanjeev Kapoor',
    prepTimeMinutes: 40,
  },
];

function getRecipe(recipe, length) {
  return recipe.chef.length > length;
}

app.get('/filter-recipes-by-chef-length', (req, res) => {
  let length = parseInt(req.query.length);
  let result = recipes.filter((recipe) => getRecipe(recipe, length));
  res.json({ result });
});

function getRecipeByFil(recipe, cuisine) {
  return recipe.cuisine === cuisine;
}

app.get('/recipes/:cuisine', (req, res) => {
  let cuisine = req.params.cuisine;
  let result = recipes.filter((recipe) => getRecipeByFil(recipe, cuisine));
  res.json({ result });
});

function getRecipeByFilter(recipe, minutes) {
  return recipe.prepTimeMinutes <= minutes;
}

app.get('/recipes/prep-time/:minutes', (req, res) => {
  let minutes = parseInt(req.params.minutes);
  let result = recipes.filter((recipe) => getRecipeByFilter(recipe, minutes));
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
