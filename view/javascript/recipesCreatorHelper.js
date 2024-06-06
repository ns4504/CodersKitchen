document.addEventListener('DOMContentLoaded', () => {
    populateDropdowns();
    addEventListeners();
});

function populateDropdowns() {
    const ingredients = getAllUniqueIngredients();
    const units = getAllUniqueUnits();
    addIngredientEntry(ingredients, units);
}

function getAllUniqueIngredients() {
    const ingredientsSet = new Set();
    originalRecipe.recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            ingredientsSet.add(ingredient.ingredient.toLowerCase());
        });
    });
    return Array.from(ingredientsSet);
}

function getAllUniqueUnits() {
    const unitsSet = new Set();
    originalRecipe.recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            if (ingredient.unit) {
                unitsSet.add(ingredient.unit.toLowerCase());
            }
        });
    });
    return Array.from(unitsSet);
}

function createSelectOptions(items, includeNA = false) {
    let options = includeNA ? '<option value="">N/A</option>' : '';
    options += items.map(item => `<option value="${item}">${item}</option>`).join('');
    return options;
}

function addIngredientEntry(ingredients, units) {
    const container = document.getElementById('ingredientEntries');
    const entry = document.createElement('div');
    entry.className = 'ingredientEntry';
    entry.innerHTML = `
        <select class="ingredient-select" name="ingredient">
            ${createSelectOptions(ingredients)}
        </select>
        <input type="number" name="quantity" placeholder="Quantity" min="0" step="any">
        <select class="unit-select" name="unit">
            ${createSelectOptions(units, true)}
        </select>
        <button type="button" class="remove-ingredient-button">Remove</button>
    `;
    container.appendChild(entry);

    // Initialize Choices.js on the newly added select elements
    new Choices(entry.querySelector('.ingredient-select'), { searchEnabled: true });
    new Choices(entry.querySelector('.unit-select'), { searchEnabled: true });
}

function removeIngredient(entry) {
    entry.remove();
}

function handleFormSubmission(event) {
    event.preventDefault();
    const entries = document.querySelectorAll('.ingredientEntry');
    const ingredients = Array.from(entries).map(entry => ({
        name: entry.querySelector('[name="ingredient"]').value.trim().toLowerCase(),
        quantity: parseFloat(entry.querySelector('[name="quantity"]').value),
        unit: entry.querySelector('[name="unit"]').value.trim().toLowerCase()
    }));
    const matchingRecipes = findMatchingRecipes(ingredients);
    displayRecipes(matchingRecipes);
}

function findMatchingRecipes(ingredients) {
    return originalRecipe.recipes.filter(recipe =>
        ingredients.every(inputIngredient =>
            recipe.ingredients.some(recipeIngredient =>
                recipeIngredient.ingredient.toLowerCase() === inputIngredient.name &&
                (!inputIngredient.quantity || recipeIngredient.quantity >= inputIngredient.quantity) &&
                (recipeIngredient.unit.toLowerCase() === inputIngredient.unit || !inputIngredient.unit)
            )
        )
    );
}

function displayRecipes(recipes) {
    const resultsDiv = document.getElementById('recipeResults');
    resultsDiv.innerHTML = '';
    if (recipes.length > 0) {
        recipes.forEach((recipe, index) => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            if (index === 0) {
                card.classList.add('top-match');
            } else if (index === 1) {
                card.classList.add('second-match');
            }
            card.innerHTML = `
                <p>${recipe.recipeName}</p>
                <button class="clear-recipe-button">Clear</button>
            `;
            resultsDiv.appendChild(card);
        });
    } else {
        resultsDiv.textContent = 'No matching recipes found.';
    }
    resultsDiv.style.display = 'block';
}

function addEventListeners() {
    document.getElementById('addIngredientButton').addEventListener('click', () => {
        const ingredients = getAllUniqueIngredients();
        const units = getAllUniqueUnits();
        addIngredientEntry(ingredients, units);
    });

    document.getElementById('ingredientForm').addEventListener('submit', handleFormSubmission);

    document.getElementById('ingredientEntries').addEventListener('click', event => {
        if (event.target.classList.contains('remove-ingredient-button')) {
            removeIngredient(event.target.parentElement);
        }
    });

    document.getElementById('recipeResults').addEventListener('click', event => {
        if (event.target.classList.contains('clear-recipe-button')) {
            event.target.parentElement.remove();
            const resultsDiv = document.getElementById('recipeResults');
            if (!resultsDiv.children.length) {
                resultsDiv.style.display = 'none';
            }
        }
    });
}
