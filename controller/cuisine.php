<?php
class Cuisine {
    private $cuisineId;
    private $cuisineName;

    public function __construct($cuisineId, $cuisineName){
        $this->cuisineId = $cuisineId;
        $this->cuisineName = $cuisineName;
    }
    
    public function getCuisineId() {
        return $this->cuisineId;
    }
    public function setCuisineId($value) {
        $this->cuisineId = $value;
    }  

    
    public function getCuisineName() {
        return $this->cuisineName;
    }
    public function setCuisineName($value) {
        $this->cuisineName = $value;
    }  
}