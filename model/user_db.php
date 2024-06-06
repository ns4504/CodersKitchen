<?php
require_once("database.php");

class UserDB {
    // Function to get all users
    public static function getUsers() {
        $db = new Database();
        $dbConn = $db->getDbConn();

        if ($dbConn) {
            $query = 'SELECT * FROM users';
            return $dbConn->query($query);
        } else {
            return false;
        }
    }
    
    // Function to get a specific user by their email
    public static function getUserByEmail($email) {
        $db = new Database();
        $dbConn = $db->getDbConn();
    
        if ($dbConn) {
            $query = "SELECT id, uniqueId, username, email, password, image, isAdmin FROM Users WHERE email = ?";
            $statement = $dbConn->prepare($query);
            $statement->bind_param('s', $email);
            $statement->execute();
            $result = $statement->get_result();
            if ($row = $result->fetch_assoc()) {
                return $row;
            } else {
                return false;  // No user found or error in fetch
            }
        } else {
            return false;  // Database connection failed
        }
    }

    // Function to get a specific user by their uniqueId
    public static function getUserByUniqueId($uniqueId) {
        $db = new Database();
        $dbConn = $db->getDbConn();

        if ($dbConn) {
            $query = "SELECT id, uniqueId, username, email, password, image, isAdmin FROM Users WHERE uniqueId = ?";
            $statement = $dbConn->prepare($query);
            $statement->bind_param('s', $uniqueId);
            $statement->execute();
            $result = $statement->get_result();
            if ($row = $result->fetch_assoc()) {
                return $row;
            } else {
                return false;  // No user found or error in fetch
            }
        } else {
            return false;  // Database connection failed
        }
    }

    // Function to add a new user to the database; returns true on success, false on failure or DB connection failure
    public static function addUser($uniqueId, $username, $email, $password, $image, $isAdmin) {
        $db = new Database();
        $dbConn = $db->getDbConn();

        if ($dbConn) {
            $query = "INSERT INTO Users (uniqueId, username, email, password, image, isAdmin) VALUES (?, ?, ?, ?, ?, ?)";
            $statement = $dbConn->prepare($query);
            $statement->bind_param('sssssi', $uniqueId, $username, $email, $password, $image, $isAdmin);

            return $statement->execute();
        } else {
            return false; // Return false if database connection fails
        }
    }

    // Function to delete a user by their uniqueId
    public static function deleteUser($uniqueId) {
        $db = new Database();
        $dbConn = $db->getDbConn();
        
        if ($dbConn) {
            $query = "DELETE FROM Users WHERE uniqueId = ?";
            $statement = $dbConn->prepare($query);
            $statement->bind_param('s', $uniqueId);
            return $statement->execute();
        } else {
            return false;
        }
    }

    // Function to update user information
    public static function updateUser($username, $password, $image, $uniqueId, $isAdmin) {
        $db = new Database();
        $dbConn = $db->getDbConn();

        if ($dbConn) {
            $query = "UPDATE Users SET username = ?, password = ?, image = ?, isAdmin = ? WHERE uniqueId = ?";
            $statement = $dbConn->prepare($query);
            $statement->bind_param('ssssi', $username, $password, $image, $isAdmin, $uniqueId);

            return $statement->execute();
        } else {
            return false; // Return false if database connection fails
        }
    }
}
?>