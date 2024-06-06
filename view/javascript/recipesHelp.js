// Function to update the image source
function updateRecipeImage(imageUrl) {
    const recipeImage = document.getElementById('recipeImage');
    recipeImage.src = imageUrl;
    recipeImage.alt = "Image of the recipe";
    recipeImage.style.opacity = 0;  // Start with the image transparent

    recipeImage.onload = () => {
        recipeImage.style.opacity = 1;  // Fade in the image once it's loaded
    };
}

// Example usage
updateRecipeImage('https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd');
