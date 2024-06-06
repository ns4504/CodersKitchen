<?php
require_once("database.php");

class UserDB {
    //function to get all users
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
            $query = "SELECT id, uniqueId, username, email, password, image FROM Users WHERE email = ?";
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
            $query = "SELECT id, uniqueId, username, email, password, image FROM Users WHERE uniqueId = ?";
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
    public static function addUser($uniqueId, $username, $email, $password, $image) {
        $db = new Database();
        $dbConn = $db->getDbConn();

        if ($dbConn) {
            $query = "INSERT INTO Users (uniqueId, username, email, password, image) VALUES (?, ?, ?, ?, ?)";
            $statement = $dbConn->prepare($query);
            $statement->bind_param('sssss', $uniqueId, $username, $email, $password, $image);

            return $statement->execute();
        } else {
            return false; // Return false if database connection fails
        }
    }

    //delete user
    public static function deleteUser($uniqueId) {
        $db = new Database();
        $dbConn = $db->getDbConn();
        
        if ($dbConn) {
            $query = "DELETE FROM users
                WHERE uniqueId = '$uniqueId'";

            return $dbConn->query($query) === TRUE;
        } else {
            return false;
        }
    }

    //update user
    public static function updateUser($username, $password, $image, $uniqueId) {
        $db = new Database();
        $dbConn = $db->getDbConn();  
    
        if ($dbConn) {
            // If password is not empty, hash it before updating
            if (!empty($password)) {
                $hashedPassword = md5($password); // Consider using a stronger hashing algorithm
                $query = "UPDATE users SET
                    username = '$username',
                    password = '$hashedPassword',
                    image = '$image'
                WHERE uniqueId = '$uniqueId'";
            } else {
                return false;
            }
    
            // Print out the SQL query for debugging
            echo nl2br ("***OUTPUT FOR DEBUGGING*** \n\n $query \n\n");
    
            // Execute the query
            $result = $dbConn->query($query);
    
            if ($result === TRUE) {
                echo nl2br ("User updated successfully! \n\n");
                return true;
            } else {
                // Print out the MySQL error message if query execution fails
                echo "Error updating user: " . $dbConn->error;
                return false;
            }
        } else {
            echo "Database connection error.";
            return false;
        }
    }
    
    
}