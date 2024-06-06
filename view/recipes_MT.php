<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');
require_once('../util/security.php');
require_once('../controller/recipe.php');
require_once('../controller/recipe_controller.php');
require_once('../controller/ingredient.php');
require_once('../controller/ingredient_controller.php');
require_once('../controller/instruction.php');
require_once('../controller/instruction_controller.php');
require_once('../controller/mealtype.php');
require_once('../controller/mealtype_controller.php');

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
<title>Recipe Page</title>
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/header.css">
<link rel="stylesheet" href="css/recipes.css">

</head>
<body>
  <div class="slideshow-container" id="slideshow-container1"></div>
  <div id="navbar-container"></div>
  <div class="slideshow-container" id="slideshow-container2"></div>
  <div class="navbar">
    <h1 style="color: black;">Sorting Methods</h1>
    <a href="recipes.php">No Sorting Method</a>
    <a href="recipes_MT.php">Sort By Meal Type</a>
    <a href="recipes_C.php">Sort By Cuisine</a> 
  </div>
  <?php foreach (MealtypeController::getAllMealtypes() as $mealtype) : ?>
  <h1 id="sorting-header" style="color: black;"><center><?php echo $mealtype->getType(); ?></center></h1>
    <?php foreach (RecipeController::getRecipesByMealtype($mealtype->getMealtypeId()) as $recipe) : ?>
      <div class="card" id="recipe"> 
        <h1><center><?php echo $recipe->getName(); ?></center></h1>
        <h2><center><?php echo $recipe->getDescription(); ?></center></h2>
        <h2><center>Servings: <?php echo $recipe->getServings(); ?></center></h2>
        <div class="ingredients-instructions">
            <div class="third" id="image">
              <img src="<?php echo $recipe->getImage(); ?>" />
            </div>
            <div class="third" id="ingre"> 
                <h3>You will need these ingredients.</h3>
                
                <?php  foreach (IngredientController::getAllIngredients($recipe->getId()) as $ingredient) : ?>
                <ul>
                    <li><?php echo $ingredient->getQuantity(); ?> <?php echo $ingredient->getUnit(); ?> 
                      <?php echo $ingredient->getIngredient(); ?></li>
                </ul>
                <?php endforeach; ?>
            </div>
            <div class="third" id="instr"> 
                <h3>Here is how you will prepare the dish.</h3>
                <?php foreach (InstructionController::getAllInstructions($recipe->getId()) as $instruction) : ?>
                <ul>
                <li><?php echo $instruction->getStepNumber(); ?>. <?php echo $instruction->getInstruction(); ?></li>
                </ul>
                <?php endforeach; ?>
            </div>
        </div>
      </div> </br>
    <?php endforeach; ?>
  <?php endforeach; ?>
  <div class="slideshow-container" id="slideshow-container3"></div>
  <script src="javascript/header.js"></script>
  <script src="javascript/navbar.js"></script>
</body>
</html>