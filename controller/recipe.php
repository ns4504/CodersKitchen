<?php
class Recipe {
    private $id;
    private $name;
    private $mealTypeId;
    private $cuisineId;
    private $servings;
    private $description;
    private $image;
    //private $ingredients = [];
    //private $instructions = [];

    public function __construct($name, $mealTypeId, $cuisineId, $servings, $description, $image) {
        $this->name = $name;
        $this->mealTypeId = $mealTypeId;
        $this->cuisineId = $cuisineId;
        $this->servings = $servings;
        $this->description = $description;
        $this->image = $image;
        //$this->ingredients = $ingredients;
        //$this->instructions = $instructions;
    }

    public function getId() {
        return $this->id;
    }
    public function setId($value) {
        $this->id = $value;
    }

    public function getName() {
        return $this->name;
    }
    public function setName($value) {
        $this->name = $value;
    }

    public function getMealType() {
        return $this->mealTypeId;
    }
    public function setMealType($value) {
        $this->mealTypeId = $value;
    }

    public function getCuisine() {
        return $this->cuisineId;
    }
    public function setCuisine($value) {
        $this->cuisineId = $value;
    }

    public function getServings() {
        return $this->servings;
    }
    public function setServings($value) {
        $this->servings = $value;
    }

    public function getDescription() {
        return $this->description;
    }
    public function setDesription($value) {
        $this->description = $value;
    }

    public function getImage() {
        return $this->image;
    }
    public function setImage($value) {
        $this->image = $value;
    }
}