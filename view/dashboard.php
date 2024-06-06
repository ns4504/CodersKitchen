<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');

// Check if the user is logged in
if (!isset($_SESSION['uniqueId'])) {
    header('Location: login.php'); // Redirect to login page if not logged in
    exit();
}

// Get the unique ID from the session
$uniqueId = $_SESSION['uniqueId'];

// Fetch user details using the unique ID
$user = UserController::getUserByUniqueId($uniqueId);

if (!$user) {
    $dashboard_msg = "User not found.";
} else {
    $username = $user->getUsername();
    $email = $user->getEmail();
    $password = $user->getPassword();
    $image = $user->getImage();
    $dashboard_msg = "Welcome, $username!";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/main.css">
    <title>Dashboard</title>
</head>
<body>
    <main class="card">
        <h1>User Validation for Grading Purposes</h1>
        <h2><?php echo $dashboard_msg; ?></h2>
        <?php if ($user): ?>
            <p><strong>Username:</strong> <?php echo htmlspecialchars($username); ?></p>
            <p><strong>Email:</strong> <?php echo htmlspecialchars($email); ?></p>
            <p><strong>MD5 Hashed Password:</strong> <?php echo htmlspecialchars($password); ?></p>
            <p><strong>Unique ID:</strong> <?php echo htmlspecialchars($uniqueId); ?></p>
            <p><strong>Image URL:</strong> <?php echo htmlspecialchars($image); ?></p>
        <?php endif; ?>
        <a href="profile.php">GO TO YOUR PROFILE</a>
    </main>
</body>
</html>
