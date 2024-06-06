<?php
require_once('../model/recipesaver_db.php');

class RecipeSaverController {
    public static function getAllRecipes($conn) {
        return RecipeSaverDB::fetchAllRecipes($conn);
    }

    public static function getSavedRecipes($conn, $uniqueId) {
        return RecipeSaverDB::fetchSavedRecipes($conn, $uniqueId);
    }

    public static function addRecipeToUser($conn, $uniqueId, $recipeId) {
        RecipeSaverDB::insertUserRecipe($conn, $uniqueId, $recipeId);
    }

    public static function removeRecipeFromUser($conn, $uniqueId, $recipeId) {
        RecipeSaverDB::deleteUserRecipe($conn, $uniqueId, $recipeId);
    }
}
?>
