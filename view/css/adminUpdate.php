<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');

$signup_msg = '';
$pageTitle = "Update Profile";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['signup'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['pw'];
    $image = $_POST['image'] ?? null;

    // Create a new User object
    $user = new User(null, null, $username, $email, $password, $image);

    if (UserController::addUser($user)) {
        $signup_msg = "User signed up successfully!";
    } else {
        $signup_msg = "Error signing up user. Please try again.";
    }
}

//get uniqueID from query
//fills in data for user to update
if (isset($_GET['uniqueId'])) {
    $user =
        UserController::getUserByUniqueId($_GET['uniqueId']);
    $pageTitle = "Update Profile";
}

// php to update the user
if (isset($_POST['update'])) {
    if (isset($_POST['update'])) {
        // Ensure correct assignment of variables from $_POST
        $uniqueId = $_POST['uniqueId'];
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $image = $_POST['image'];
    
        // Create User object with correct variable assignment
        $user = new User($uniqueId, $username, $email, $password, $image);
    
        UserController::updateUser($user);
    }
    
}

// Print out $_POST data for debugging
print_r($_POST);
echo nl2br ("\n\n");

// Print out variable values for debugging
echo "UniqueID: $uniqueId, Username: $username, Email: $email, Password: $password, Image: $image";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/validation.css" >
    <title><?php echo $pageTitle ?></title>
</head>
<body>
<main class="card">
    <h1><?php echo $pageTitle ?></h1>
        <form method="POST">
        <h3>Username: <input type="text" name="username" value="<?php echo $user->getUsername()?>" required></h3>
        <input type="hidden" name="email" value="<?php echo $user->getEmail()?>">
        <h3>Password: <input type="text" name="password" required></h3>
        <h3>Image URL: <input type="text" name="image" value="<?php echo $user->getImage()?>"></h3>
        <input type="hidden" value="<?php echo $user->getUniqueId(); ?>" name="uniqueId">
        <input type="submit" value="<?php echo $pageTitle ?>" name="update">
    </form>

    <h2><?php echo $signup_msg; ?></h2>
    <ul>
        <li><h4><a href="profile.php">Back to my Profile</a></h4></li>
        <li><h4><a href="admin_view_users.php">View All Users</a></h4></li>
    </ul>
</main>
</body>
</html>
