<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');

$signup_msg = '';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['signup'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['pw'];
    $image = $_POST['image'] ?? null;
    $isAdmin = isset($_POST['isAdmin']) ? true : false;

    // Create a new User object
    $user = new User(null, null, $username, $email, $password, $image, $isAdmin);

    if (UserController::addUser($user)) {
        $signup_msg = "User signed up successfully!";
    } else {
        $signup_msg = "Error signing up user. Please try again.";
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
    <title>Sign Up</title>
</head>
<body>
<main class="card">
    <h1>Sign Up</h1>
    <form method="POST">
        <h3>Username: <input type="text" name="username" required></h3>
        <h3>Email: <input type="email" name="email" required></h3>
        <h3>Password: <input type="password" id="psw" name="pw" 
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
            required>
        </h3>
        <h3>Image URL: <input type="text" name="image"></h3>
        <?php if (isset($_SESSION['isAdmin']) && $_SESSION['isAdmin']): ?>
            <h3>Admin: <input type="checkbox" name="isAdmin"></h3>
        <?php endif; ?>
        <input type="submit" value="Sign Up" name="signup">
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
        <li><h4><a href="login.php">Login</a></h4></li>
    </ul>
</main>
<script src="javascript/passwordValidation.js"></script>
</body>
</html>
