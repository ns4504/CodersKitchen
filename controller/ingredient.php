<?php
class Ingredient {
    private $ingredientId;
    private $recipeId;
    private $ingredient;
    private $quantity;
    private $unit;

    public function __construct($ingredient, $quantity, $unit) {
        $this->ingredient = $ingredient;
        $this->quantity = $quantity;
        $this->unit = $unit;
    }

    public function getIngredientId() {
        return $this->ingredientId;
    }
    public function setIngredientId($value) {
        $this->ingredientId = $value;
    }

    public function getRecipeId() {
        return $this->recipeId;
    }
    public function setRecipeId($value) {
        $this->recipeId = $value;
    }

    public function getIngredient() {
        return $this->ingredient;
    }
    public function setIngredient($value) {
        $this->ingredient = $value;
    }

    public function getQuantity() {
        return $this->quantity;
    }
    public function setQuantity($value) {
        $this->quantity = $value;
    }

    public function getUnit() {
        return $this->unit;
    }
    public function setUnit($value) {
        $this->unit = $value;
    }
}