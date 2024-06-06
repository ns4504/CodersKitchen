<?php
include_once("recipe.php");
include_once("../model/recipe_db.php");

class RecipeController {
    //helper function for taking all information
    //from a recipe info query (row) and converting
    //it into a Recipe object
    private static function rowToRecipe($row) {
        $recipe = new Recipe(   
            $row['name']
            ,$row['mealTypeId']
            ,$row['cuisineId']
            ,$row['servings']
            ,$row['description']
            ,$row['image']
            );
        $recipe->setId($row['id']);
        return $recipe;
    }

        //function to get all recipes in the database
        public static function getAllRecipes() {
            $queryRes = RecipeDB::getRecipes();
    
            if ($queryRes) {
                //process the results into an array with
                //the MealType and the Cuisine - allows the
                //UI to not care about the DB structure
                $recipes = array();
                foreach ($queryRes as $row) {
                    //process each row into an array of
                    //Recipe objects (i.e. "recipes")
                    $recipes[] = self::rowToRecipe($row);
                }
    
                return $recipes;
            } else {
                return false;
            }
        }

        public static function getRecipesByMealtype($mealTypeId) {
            $queryRes = RecipeDB::getRecipesByMealtype($mealTypeId);

            if ($queryRes) {
            $recipes = array();
            foreach ($queryRes as $row) {
                $recipes[] = self::rowToRecipe($row);
            }

            return $recipes;
        } else {
            return false;
            }
        }

        public static function getRecipesByCuisine($cuisineId) {
            $queryRes = RecipeDB::getRecipesByCuisine($cuisineId);

            if ($queryRes) {
            $recipes = array();
            foreach ($queryRes as $row) {
                $recipes[] = self::rowToRecipe($row);
            }

            return $recipes;
        } else {
            return false;
            }
        }
}