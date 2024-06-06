<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');
require_once('../util/security.php');

// Check if the user is logged in
if (!isset($_SESSION['uniqueId'])) {
  header('Location: login.php'); // Redirect to login page if not logged in
  exit();
}

// Get the unique ID from the session
$uniqueId = $_SESSION['uniqueId'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Recipe Sharing</title>
  <script src="https://static.addtoany.com/menu/page.js"></script>
  <link rel="stylesheet" href="css/styles.css">
   <link rel="stylesheet" href="css/header.css">
   <link rel="stylesheet" href="css/share.css">
     <link rel="stylesheet" href="css/imagegallery.css">
</head>
<body>
<div class="slideshow-container" id="slideshow-container1"></div>
<div id="navbar-container"></div>
<div class="slideshow-container" id="slideshow-container2"></div>
<div class="card">
  <h1>Share Recipes</h1>
  </div>
    <div class="slideshow-container" id="slideshow-container3"></div>
       <div class="imagecard">
        <div class="image-gallery" id="imageGallery">
            <!-- Images will be inserted here by JavaScript -->
        </div>
    </div>
   <div class="recipe-container">
  <div class="card">
    <input type="text" id="recipeSearch" placeholder="Search recipes..." style="margin-bottom: 10px; max-width: 100%; padding: 8px; border: 2px solid #ddd; border-radius: 5px;">
    <select id="recipeSelect">
      <!-- Options added by JavaScript -->
    </select>
</div>

<div class="card">
  <h1 id="recipeName"></h1>
  <div class="recipeImageContainer">
  <img id="recipeImage" src="" alt="Recipe Image">  
  </div>
  <div class="a2a_kit a2a_kit_size_32 a2a_default_style">
            <a class="a2a_dd" href="https://www.addtoany.com/share"></a>
          </div>
  <p><span class="bold">Servings:</span> <span id="servings">4</span></p>
  <p><span class="bold">Calories per Serving:</span> <span id="caloriesPerServing">500</span></p>
  <p><span class="bold">Cuisine:</span> <span id="cuisine"></span></p>
</div>
  <div class="card">
    <h2>Ingredients</h2>
     <p><label for="servingsInput" class="bold">Recommended Servings size:</label> <input type="number" id="servingsInput" value="4" min="1" disabled></p>
    <ul id="ingredientsList"></ul>
  </div>
  <div class="card">
    <h2>Instructions</h2>
    <ol id="instructionsList"></ol>
  </div>
      </div>
      <script src="javascript/imagegallery.js"></script>
  <script src="javascript/recipes.js"></script>
  <script src="javascript/recipesHelperSearch.js"></script>
  <script src="javascript/home.js"></script>
  <script src="javascript/header.js"></script>
  <script src="javascript/navbar.js"></script>
</body>

</html>