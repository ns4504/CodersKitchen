<?php
require_once('user.php');
require_once(__DIR__ . '/../model/user_db.php');

class UserController {
    // Helper function for taking all information from a user info query (row) and converting it into a User object
    private static function rowToUser($row) {
        $id = $row['id'] ?? null;
        $uniqueId = $row['uniqueId'] ?? null;
        $username = $row['username'] ?? null;
        $email = $row['email'] ?? null;
        $password = $row['password'] ?? null;
        $image = $row['image'] ?? null;

        $user = new User($id, $uniqueId, $username, $email, $password, $image);

        return $user;
    }

    // Function to get a specific user by their uniqueId
    public static function getUserByUniqueId($uniqueId) {
        $queryRes = UserDB::getUserByUniqueId($uniqueId);

        if ($queryRes) {
            return self::rowToUser($queryRes);
        } else {
            return false;
        }
    }

    // Function to validate a user by their email and password
    public static function validUser($email, $password) {
        $queryRes = UserDB::getUserByEmail($email);

        if ($queryRes) {
            // Process the user row
            $user = self::rowToUser($queryRes);
            if ($user->getPassword() === md5($password)) { // Compare hashed passwords
                return $user;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    // Function to add a user to the DB
    public static function addUser($user) {
        $uniqueId = rand(time(), 100000000); // Generate unique ID
        $user->setUniqueId($uniqueId); // Set the generated unique ID

        // When adding, ensure the password is hashed correctly
        $hashedPassword = md5($user->getPassword());
        $user->setPassword($hashedPassword);

        return UserDB::addUser(
            $uniqueId,
            $user->getUsername(),
            $user->getEmail(),
            $hashedPassword, // The password should be hashed
            $user->getImage()
        );
    }

        //function to get all users in the database
        public static function getAllUsers() {
            $queryRes = UserDB::getUsers();
    
            if ($queryRes) {
                //process the results into an array with
                $people = array();
                foreach ($queryRes as $row) {
                    //process each row into an array of
                    //Person objects (i.e. "people")
                    $people[] = self::rowToUser($row);
                }
    
                return $people;
            } else {
                return false;
            }
        }

    //function to delete a person by their UniqueId
    public static function deleteUser($uniqueId) {
        //no special processing needed - just use the 
        //DB function
        return UserDB::deleteUser($uniqueId); 
    }

    //function to uppdate person's info
    public static function updateUser($user) {
        return UserDB::updateUser(
            $user->getUsername(),
            $user->getPassword(),
            $user->getImage(),
            $user->getUniqueId()
        );
    }
}

