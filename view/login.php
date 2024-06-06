<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');

$login_msg = '';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['pw'];
    $user = UserController::validUser($email, $password);

    if ($user) {
        $_SESSION['uniqueId'] = $user->getUniqueId();
        $_SESSION['isAdmin'] = $user->getIsAdmin();
        echo "<script>console.log('Login successful for user: " . $user->getUsername() . "');</script>";
        header('Location: dashboard.php'); // Redirect to a dashboard or home page after login
        exit();
    } else {
        echo "<script>console.log('Invalid login credentials.');</script>";
        $login_msg = "Invalid login credentials.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <title>Login</title>
</head>
<body>
<ul>
    <li><h4><a href="dbconn_status.php">Database Connection Status</a></h4></li>
</ul>
<main class="card">
    <h1>Login</h1>
    <form method="POST">
        <h3>Login ID (e-mail): <input type="email" name="email" required></h3>
        <h3>Password: <input type="password" name="pw" required></h3>
        <input type="submit" value="Login" name="login">
    </form>
    <h2><?php echo $login_msg; ?></h2>
    <ul>
        <li><h4><a href="signup.php">Sign Up</a></h4></li>
    </ul>
</main>
</body>
</html>
