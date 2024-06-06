<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');

$adduser_msg = '';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['adduser'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['pw'];
    $image = $_POST['image'] ?? null;

    // Create a new User object
    $user = new User(null, null, $username, $email, $password, $image);

    if (UserController::addUser($user)) {
        $adduser_msg = "User added successfully!";
    } else {
        $adduser_msg = "Error adding user. Please try again.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/validation.css" >
    <title>Add User</title>
</head>
<body>
<main class="card">
    <h1>Add User</h1>
    <form method="POST">
        <h3>Username: <input type="text" name="username" required></h3>
        <h3>Email: <input type="email" name="email"  required></h3>
        <h3>Password: <input type="password" id="psw" name="pw" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
            required>
        </h3>
        <h3>Image URL: <input type="text" name="image" ></h3>
        <input type="submit" value="Add User" name="adduser">
    </form>
    <div id="message">
            <h3>Password must contain the following:</h3>
            <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
            <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
            <p id="number" class="invalid">A <b>number</b></p>
            <p id="length" class="invalid">Minimum <b>8 characters</b></p>
    </div>
    <h2><?php echo $adduser_msg; ?></h2>
    <ul>
        <li><h4><a href="admin_view_users.php">View All Users</a></h4></li>
    </ul>
</main>
<script src="javascript/passwordValidation.js"></script>
</body>
</html>
