<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');
require_once('../controller/user_manager.php');
require_once('../controller/recipesaver_controller.php');
require_once('../util/security.php');

// Connect to database
try {
    $db = new Database();
    $conn = $db->getDBConn();
} catch (Exception $e) {
    die($e->getMessage());
}

// Check if the user is logged in
if (!isset($_SESSION['uniqueId'])) {
    header('Location: login.php'); // Redirect to login page if not logged in
    exit();
}

// Get the unique ID from the session
$uniqueId = $_SESSION['uniqueId'];

// Fetch user details using the unique ID
$user = UserController::getUserByUniqueId($uniqueId);

if (!$user) {
    $dashboard_msg = "User not found.";
} else {
    $username = $user->getUsername();
    $email = $user->getEmail();
    $password = $user->getPassword();
    $image = $user->getImage();
    $dashboard_msg = "Welcome, $username!";
}

// Fetch recipes
$recipes = RecipeSaverController::getAllRecipes($conn);
$savedRecipes = RecipeSaverController::getSavedRecipes($conn, $uniqueId);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['add_recipe'])) {
        $recipeId = $_POST['recipe_id'];
        RecipeSaverController::addRecipeToUser($conn, $uniqueId, $recipeId);
        header('Location: RecipePicker.php');
        exit();
    } elseif (isset($_POST['remove_recipe'])) {
        $recipeId = $_POST['recipe_id'];
        RecipeSaverController::removeRecipeFromUser($conn, $uniqueId, $recipeId);
        header('Location: RecipePicker.php');
        exit();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Recipe Picker</title>
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/header.css">
<link rel="stylesheet" href="css/profile.css">
<link rel="stylesheet" href="css/recipesaver.css">
</head>
<body>
<div class="slideshow-container" id="slideshow-container1"></div>
<div id="navbar-container"></div>
<div class="slideshow-container" id="slideshow-container2"></div>
<div class="prof">
    <img id="pfp" src="<?= $image ?: '.' ?>" alt="No Image or Invalid Image Uploaded">
    <h1><?= htmlspecialchars($username) ?></h1>
    <h2><?= htmlspecialchars($email) ?></h2>

    <form method="POST">
        <input type="hidden" name="uidUpd" value="<?= htmlspecialchars($user->getUniqueId()); ?>" />
        <input type="submit" value="Change my Profile" name="update" />
        <a href="?logout_id=<?= htmlspecialchars($uniqueId); ?>" class="logout">Logout</a>
    </form>
    <h3>Saved Recipes</h3>
    <div class="recipe-container">
        <ul>
            <?php foreach ($savedRecipes as $recipe): ?>
                <li class="recipe-card">
                    <div class="recipe-details">
                        <h4><?= htmlspecialchars($recipe['name']) ?></h4>
                        <p><?= htmlspecialchars($recipe['description']) ?></p>
                        <form method="POST">
                            <input type="hidden" name="recipe_id" value="<?= htmlspecialchars($recipe['id']) ?>">
                            <button type="submit" name="remove_recipe">Remove</button>
                        </form>
                    </div>
                    <img src="<?= htmlspecialchars($recipe['image']) ?>" alt="<?= htmlspecialchars($recipe['name']) ?>">
                </li>
            <?php endforeach; ?>
        </ul>
    </div>
</div>

<div class="slideshow-container" id="slideshow-container3"></div>
<h3>All Recipes</h3>
<div class="recipe-container">
    <ul>
        <?php foreach ($recipes as $recipe): ?>
            <li class="recipe-card">
                <div class="recipe-details">
                    <h4><?= htmlspecialchars($recipe['name']) ?></h4>
                    <p><?= htmlspecialchars($recipe['description']) ?></p>
                    <form method="POST">
                        <input type="hidden" name="recipe_id" value="<?= htmlspecialchars($recipe['id']) ?>">
                        <button type="submit" name="add_recipe">Add</button>
                    </form>
                </div>
                <img src="<?= htmlspecialchars($recipe['image']) ?>" alt="<?= htmlspecialchars($recipe['name']) ?>">
            </li>
        <?php endforeach; ?>
    </ul>
</div>

<script src="javascript/header.js"></script>
<script src="javascript/navbar.js"></script>
</body>
</html>
