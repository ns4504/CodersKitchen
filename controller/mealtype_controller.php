<?php
include_once('mealtype.php');
include_once('../model/mealtype_db.php');

class MealtypeController {
    public static function getAllMealtypes() {
        $queryRes = MealtypeDB::getMealtypes();
        
        if ($queryRes) {
            $mealtypes = array();
            foreach ($queryRes as $row) {
                $mealtypes[] = new Mealtype($row['mealtypeId'], 
                    $row['type']);
            }

            return $mealtypes;
        } else {
            return false;
        }
    }
}