<?php
class RecipeSaverDB {
    public static function fetchAllRecipes($conn) {
        $query = "SELECT * FROM Recipes";
        $stmt = $conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function fetchSavedRecipes($conn, $uniqueId) {
        $query = "SELECT r.* FROM Recipes r
                  JOIN UserRecipes ur ON r.id = ur.recipeId
                  JOIN Users u ON ur.userId = u.id
                  WHERE u.uniqueId = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param('s', $uniqueId);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function insertUserRecipe($conn, $uniqueId, $recipeId) {
        $userId = self::getUserIdByUniqueId($conn, $uniqueId);
        $query = "INSERT INTO UserRecipes (userId, recipeId, savedDate) VALUES (?, ?, NOW())";
        $stmt = $conn->prepare($query);
        $stmt->bind_param('ii', $userId, $recipeId);
        $stmt->execute();
    }

    public static function deleteUserRecipe($conn, $uniqueId, $recipeId) {
        $userId = self::getUserIdByUniqueId($conn, $uniqueId);
        $query = "DELETE FROM UserRecipes WHERE userId = ? AND recipeId = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param('ii', $userId, $recipeId);
        $stmt->execute();
    }

    private static function getUserIdByUniqueId($conn, $uniqueId) {
        $query = "SELECT id FROM Users WHERE uniqueId = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param('s', $uniqueId);
        $stmt->execute();
        $stmt->bind_result($userId);
        $stmt->fetch();
        return $userId;
    }
}
?>
