document.addEventListener('DOMContentLoaded', function() {
  const selectElement = document.getElementById('recipeSelect');
  const searchInput = document.getElementById('recipeSearch');
  let currentRecipes = originalRecipe.recipes; // Stores the current list of recipes being displayed

  // Function to populate the dropdown menu
  function populateDropdown(filteredRecipes) {
    currentRecipes = filteredRecipes; // Update the current recipes to the filtered list
    selectElement.innerHTML = ''; // Clear existing options
    filteredRecipes.forEach((recipe, index) => {
      let option = new Option(recipe.recipeName, index);
      selectElement.add(option);
    });
    if (filteredRecipes.length > 0) {
      updateRecipe(filteredRecipes[0], document.getElementById('servingsInput').value); // Update view with the first filtered recipe
    }
  }
  
  // Populate dropdown initially with all recipes
  populateDropdown(originalRecipe.recipes);

function updateRecipe(recipe, servings) {
    const recipeImage = document.getElementById('recipeImage');
    const imageContainer = recipeImage.closest('.recipeImageContainer');

    // Set the initial image source and alt text
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.recipeName + " Image";
    recipeImage.style.opacity = 1;  // Image is fully opaque by default

    // Handle image load failure
    recipeImage.onerror = () => {
        recipeImage.src = 'https://example.com/default-image.png';  // Fallback image URL
        recipeImage.alt = 'Default recipe image';  // Fallback alt text
    };

    // Update dynamic elements such as servings and ingredients
    document.getElementById('recipeName').textContent = recipe.recipeName;
    document.getElementById('servings').textContent = servings;
    document.getElementById('cuisine').textContent = recipe.cuisine;

    const scaleFactor = servings / recipe.originalServings;
    document.getElementById('caloriesPerServing').textContent = Math.round(recipe.caloriesPerOriginalServing * scaleFactor);

    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = '';
    recipe.ingredients.forEach(item => {
        let quantity = typeof item.quantity === 'number' ? (item.quantity * scaleFactor).toFixed(2) : item.quantity;
        let li = document.createElement('li');
        li.textContent = `${quantity} ${item.unit} ${item.ingredient}`;
        ingredientsList.appendChild(li);
    });

    const instructionsList = document.getElementById('instructionsList');
    instructionsList.innerHTML = ''; // Clear previous instructions
    recipe.instructions.forEach(step => {
        let li = document.createElement('li');
        li.textContent = step;
        instructionsList.appendChild(li);
    });
}

  // Search functionality
  searchInput.addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    const filteredRecipes = originalRecipe.recipes.filter(recipe => recipe.recipeName.toLowerCase().includes(searchText));
    populateDropdown(filteredRecipes);
  });

  selectElement.addEventListener('change', function() {
    if (currentRecipes.length > 0) {
      const selectedRecipe = currentRecipes[this.selectedIndex];
      updateRecipe(selectedRecipe, document.getElementById('servingsInput').value);
    }
  });

  // Servings input change
  document.getElementById('servingsInput').addEventListener('input', function() {
    if (currentRecipes.length > 0) {
      const selectedRecipe = currentRecipes[selectElement.selectedIndex];
      updateRecipe(selectedRecipe, this.value);
    }
  });
});
