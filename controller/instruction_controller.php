<?php
include_once("instruction.php");
include_once("../model/instruction_db.php");

class InstructionController {
    public static function getAllInstructions($recipeID) {
        $queryRes = InstructionDB::getInstructions($recipeID);

        if ($queryRes) {
            $ingredients = array();
            foreach ($queryRes as $row) {
                $ingredients[] = new Instruction($row['StepNumber'], 
                    $row['Instruction']);
            }

            return $ingredients;
        } else {
            return false;
        }
    }
}