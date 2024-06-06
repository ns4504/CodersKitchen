<?php
require_once('database.php');

class IngredientDB {
    public static function getIngredients($recipeID) {
        $db = new Database();
        $dbConn = $db->getDbConn();
    
        if ($dbConn) {
            $query = 'SELECT * FROM ingredients WHERE RecipeID = ?';
            $stmt = $dbConn->prepare($query);
            if (!$stmt) {
                // Handle query preparation error
                echo "Query preparation error: " . $dbConn->error;
                return false;
            }
            if (!$stmt->bind_param('i', $recipeID)) {
                // Handle parameter binding error
                echo "Parameter binding error: " . $stmt->error;
                return false;
            }
            if (!$stmt->execute()) {
                // Handle query execution error
                echo "Query execution error: " . $stmt->error;
                return false;
            }
    
            return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
        } else {
            // Handle database connection error
            echo "Database connection error";
            return false;
        }
    }
    
    
    
}