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
<title>Recipe Helper</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="css/header.css">
   <link rel="stylesheet" href="css/recipesHelp.css">
  <link rel="stylesheet" href="css/recipesCreator.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/choices.js/public/assets/styles/choices.min.css">
<script src="https://cdn.jsdelivr.net/npm/choices.js/public/assets/scripts/choices.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/trix/1.3.1/trix.css">
  <link rel="stylesheet" href="view/Popupcss/popupchat.css">
  <link rel="stylesheet" href="view/Popupcss/Popupindex.css">
  <link rel="stylesheet" href="view/Popupcss/PopupMLstyles.css">
  <link rel="stylesheet" href="view/Popupcss/Popuploader.css">
  <link rel="stylesheet" href="view/Popupcss/trix-custom.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/trix/1.3.1/trix.js"></script>
</head>
<body>
    <div id="chatContainer">
    <button id="chatButton" class="open-button" style="display: none;">
      <div class="button-content">
        <div class="image-container"></div>
        <h4><span class="label label-default">Chat</span></h4>
      </div>
    </button>
    
    <div class="chat-popup" id="myForm" style="display: none;">
      <div class="form-header">
        <button class="minimize-button">-</button>
        <button class="fullpage-button">&#x2922;</button>
        <button class="close-button">x</button>
      </div>
      <div class="Popup_container">
        <form id="messageForm">
          <div id="chatContainer" class="chat-container">
            <div class="button-container">

      <button type="button" onclick="handleButtonClick('recipeTips')">Recipe Tips</button>

      <button type="button" onclick="handleButtonClick('other')">Other</button>

      <button type="button" onclick="handleButtonClick('identifyFood')">Identify Food</button>

    </div>
            <div id="messageContainer" class="messages"></div>
            <div id="responseContainer" class="responses"></div>
          </div>
          <div class="form-container">
            <label for="name"></label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required><br><br>
            <label for="message"></label><br>
            <input id="message" type="hidden" name="message">
            <trix-editor input="message"></trix-editor><br><br>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>

<div class="slideshow-container" id="slideshow-container1"></div>
<div id="navbar-container"></div>
<div class="slideshow-container" id="slideshow-container2"></div>
  <div class="card">
    <div class="background-container">
    <img src="https://assets.codepen.io/7389588/Recipe+book-pana.png" alt="Recipe Image" class="background-image" />
  </div>

  <h3>Find Recipes Based on the Ingredients You Have</h3>
    <h3>Search for Recipes Found and Adjust Serving Sizes</h3>
  
</div>

  <div class="slideshow-container" id="slideshow-container3"></div>
    <div class="recipe-container">
  <div class="card">
    <form id="ingredientForm">
        <div id="ingredientInputs">
            <!-- Dynamic ingredient entries will be added here by JavaScript -->
        </div>
        <div id="ingredientEntries"></div>
        <button id="addIngredientButton" type="button">Add Ingredient</button>
        <button type="submit">Find Recipes</button>
    </form>
    <div id="recipeResults"></div>
</div>

      <div class="card">
     <h4>Adjust serving size for recipe<h4>
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
  <p><label for="servingsInput" class="bold">Adjust Servings:</label> <input type="number" id="servingsInput" value="4" min="1"></p>
  <p><span class="bold">Servings:</span> <span id="servings">4</span></p>
  <p><span class="bold">Calories per Serving:</span> <span id="caloriesPerServing">500</span></p>
  <p><span class="bold">Cuisine:</span> <span id="cuisine"></span></p>
</div>
  <div class="card">
    <h2>Ingredients</h2>
    <ul id="ingredientsList"></ul>
  </div>
  <div class="card">
    <h2>Instructions</h2>
    <ol id="instructionsList"></ol>
  </div>
</div>
  <script src="javascript/recipes.js"></script>
  <script src="javascript/recipesHelperSearch.js"></script>
  <script src="javascript/recipesCreatorHelper.js"></script>
  <script src="javascript/recipesCreatorDropdowns.js"></script>
  <script src="javascript/home.js"></script>
  <script src="javascript/header.js"></script>
  <script src="javascript/recipesHelp.js"></script>
  <script src="javascript/genreClassification.js"></script>
  <script src="javascript/navbar.js"></script>
        <script type="module" src="view/Popupjavascript/Popupindex.js"></script>
  <script type="module" src="view/Popupjavascript/popupchat.js"></script>
  <script type="module" src="view/Popupjavascript/Popuploader.js"></script>
  <script type="module" src="view/Popupjavascript/PopupMLscript.js"></script>  
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet"></script>
</body>
</html>


