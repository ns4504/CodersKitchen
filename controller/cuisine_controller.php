<?php
include_once('cuisine.php');
include_once('../model/cuisine_db.php');

class CuisineController {
    public static function getAllCuisines() {
        $queryRes = CuisineDB::getCuisines();

        if ($queryRes) {
            $cuisines = array();
            foreach ($queryRes as $row) {
                $cuisines[] = new Cuisine($row['cuisineId'], 
                    $row['cuisineName']);
            }

            return $cuisines;
        } else {
            return false;
        }
    }
}