<?php
require_once('database.php');

class CuisineDB {
    public static function getCuisines() {
        $db = new Database();
        $dbConn = $db->getDbConn();

        if ($dbConn) {
            $query = 'SELECT * FROM cuisine';

            return $dbConn->query($query);
        } else {
            return false;
        }
    }
}