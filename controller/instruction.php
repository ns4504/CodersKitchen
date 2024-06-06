<?php
class Instruction {
    private $instructionId;
    private $recipeId;
    private $stepNumber;
    private $instruction;

    public function __construct($stepNumber, $instruction) {
        $this->stepNumber = $stepNumber;
        $this->instruction = $instruction;
    }

    public function getInstructionId() {
        return $this->instructionId;
    }
    public function setInstructionId($value) {
        $this->instructionId = $value;
    }

    public function getRecipeId() {
        return $this->recipeId;
    }
    public function setRecipeId($value) {
        $this->recipeId = $value;
    }

    public function getStepNumber() {
        return $this->stepNumber;
    }
    public function setStepNumber($value) {
        $this->stepNumber = $value;
    }

    public function getInstruction() {
        return $this->instruction;
    }
    public function setInstruction($value) {
        $this->instruction = $value;
    }
}