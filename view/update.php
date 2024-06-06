<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');

$signup_msg = '';
$pageTitle = "Update Profile";

// Get uniqueId from query to fill in data for user to update
if (isset($_GET['uniqueId'])) {
    $user = UserController::getUserByUniqueId($_GET['uniqueId']);
}

// PHP to update the user
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['update'])) {
    $username = $_POST['username'];
    $password = $_POST['pw'];
    $image = $_POST['image'];
    $uniqueId = $_POST['uniqueId'];

    // Create a new User object with the updated information
    $user = new User(null, $uniqueId, $username, null, $password, $image);

    // Debug: Log before updating
    echo "<script>console.log('Updating user - UniqueId: " . $user->getUniqueId() . ", Username: " . $user->getUsername() . ", Password: " . $user->getPassword() . ", Image: " . $user->getImage() . "');</script>";

    if (UserController::updateUser($user)) {
        $signup_msg = "Profile updated successfully!";
    } else {
        $signup_msg = "Error updating profile. Please try again.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/validation.css">
    <title><?php echo $pageTitle ?></title>
</head>
<body>
<main class="card">
    <h1><?php echo $pageTitle ?></h1>
    <form method="POST">
        <h3>Username: <input type="text" name="username" value="<?php echo $user->getUsername()?>" required></h3>
        <h3>Password: <input type="password" id="psw" name="pw" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
            required>
        </h3>
        <h3>Image URL: <input type="text" name="image" value="<?php echo $user->getImage()?>"></h3>
        <input type="hidden" value="<?php echo $user->getUniqueId(); ?>" name="uniqueId">
        <input type="submit" value="Update Profile" name="update">
    </form>
    <div id="message">
        <h3>Password must contain the following:</h3>
        <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
        <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
        <p id="number" class="invalid">A <b>number</b></p>
        <p id="length" class="invalid">Minimum <b>8 characters</b></p>
    </div>
    <h2><?php echo $signup_msg; ?></h2>
    <ul>
        <li><h4><a href="profile.php">Back to my Profile</a></h4></li>
    </ul>
</main>
<script src="javascript/passwordValidation.js"></script>
</body>
</html>
