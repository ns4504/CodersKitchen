document.addEventListener('DOMContentLoaded', function() {
    const recipes = originalRecipe.recipes;
    const gallery = document.getElementById('imageGallery');

    recipes.forEach(recipe => {
        const img = document.createElement('img');
        img.src = recipe.image;
        img.alt = `Image of ${recipe.recipeName}`;
        img.classList.add('gallery-image');
        gallery.appendChild(img);
    });

    let currentIndex = 0;
    const images = document.querySelectorAll('.gallery-image');
    const totalImages = images.length;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = (i === index) ? '1' : '0';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    // Initial display
    showImage(currentIndex);

    // Change image every 3 seconds
    setInterval(nextImage, 3000);
});
