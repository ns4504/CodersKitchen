<?php
include_once("ingredient.php");
include_once("../model/ingredient_db.php");

class IngredientController {
    public static function getAllIngredients($recipeID) {
        $queryRes = IngredientDB::getIngredients($recipeID);

        if ($queryRes) {
            $ingredients = array();
            foreach ($queryRes as $row) {
                $ingredients[] = new Ingredient($row['Ingredient'], 
                    $row['Quantity'], $row['Unit']);
            }

            return $ingredients;
        } else {
            return false;
        }
    }
}