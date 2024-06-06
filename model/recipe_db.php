<?php
require_once('database.php');

class RecipeDB {
    public static function getRecipes() {
        $db = new Database();
        $dbConn = $db->getDbConn();

        if ($dbConn) {
            $query = 'SELECT * FROM recipes';

            return $dbConn->query($query);
        } else {
            return false;
        }
    }

    public static function getRecipesByMealtype($mealTypeId) {
        $db = new Database();
        $dbConn = $db->getDbConn();

        if ($dbConn) {
            $query = "SELECT * FROM recipes
                JOIN mealtypes
                    ON recipes.mealTypeId = mealtypes.mealtypeId
                WHERE recipes.mealTypeId = '$mealTypeId'";

            return $dbConn->query($query);
        } else {
            return array();
        }
    }

    public static function getRecipesByCuisine($cuisineId) {
        $db = new Database();
        $dbConn = $db->getDbConn();

        if ($dbConn) {
            $query = "SELECT * FROM recipes
                JOIN cuisine
                    ON recipes.cuisineId = cuisine.cuisineId
                WHERE recipes.cuisineId = '$cuisineId'";

            return $dbConn->query($query);
        } else {
            return false;
        }
    }

}