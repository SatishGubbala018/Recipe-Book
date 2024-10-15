const API_KEY = "c0bfa374286a49c288a5c44242360b07";

const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes) {
  recipeListEl.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItemEl = document.createElement("li");
    recipeItemEl.classList.add("recipe-item");

    // recipe image
    recipeImgEl = document.createElement("img");
    recipeImgEl.src = recipe.image;
    recipeImgEl.alt = "recipe image";

    //recipe  title
    recipeTitleEl = document.createElement("h2");
    recipeTitleEl.innerText = recipe.title;

    //recipe ingrediants
    recipeIngredientsEl = document.createElement("p");
    recipeIngredientsEl.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients
    .map((ingrident) => ingrident.original)
    .join(", ")}`;

    // recipe link element
    recipeLinkEl = document.createElement('a')
    recipeLinkEl.href = recipe.sourceUrl
    recipeLinkEl.innerText = "View Recipe"

    //appending child elements
    recipeItemEl.appendChild(recipeImgEl);
    recipeItemEl.appendChild(recipeTitleEl);
    recipeItemEl.appendChild(recipeIngredientsEl);
    recipeItemEl.appendChild(recipeLinkEl)
    recipeListEl.appendChild(recipeItemEl);
  });
}

async function getRecipies() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );
  const data = await response.json();

  return data.recipes;
}

async function init() {
  const recipes = await getRecipies();
  displayRecipes(recipes);
}

init();
