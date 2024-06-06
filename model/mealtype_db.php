<?php
require_once('database.php');

class MealtypeDB {
    public static function getMealtypes() {
        $db = new Database();
        $dbConn = $db->getDbConn();

        if ($dbConn) {
            $query = 'SELECT * FROM mealtypes';

            return $dbConn->query($query);
        } else {
            return false;
        }
    }
}