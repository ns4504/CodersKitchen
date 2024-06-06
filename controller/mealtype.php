<?php
class Mealtype {
    private $mealtypeId;
    private $type;

    public function __construct($mealtypeId, $type){
        $this->mealtypeId = $mealtypeId;
        $this->type = $type;
    }
    
    public function getMealtypeId() {
        return $this->mealtypeId;
    }
    public function setMealtypeId($value) {
        $this->mealtypeId = $value;
    }  

    
    public function getType() {
        return $this->type;
    }
    public function setType($value) {
        $this->type = $value;
    }  
}