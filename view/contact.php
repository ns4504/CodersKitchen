<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');
require_once('../util/security.php');

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
  <title>Contact Us</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/contact.css">
</head>
<body>
  <div class="slideshow-container" id="slideshow-container1"></div>
  <div id="navbar-container"></div>
  <div class="slideshow-container" id="slideshow-container2"></div>
  <div class="card">
    <h1>Contact Us</h1>
  </div>
  <div class="slideshow-container" id="slideshow-container3"></div>
  <div class="container">
    <form id="messageForm">
      <div id="messageContainer" class="messages"></div>
      <div id="responseContainer" class="responses"></div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required><br><br>
      <label for="message">Message:</label><br>
      <textarea id="message" name="message" required></textarea><br><br>
      <button type="submit">Send</button>
    </form>
  </div>
  <script src="javascript/header.js"></script>
  <script type="module" src="javascript/contact.js"></script>
  <script src="javascript/navbar.js"></script>
</body>
</html>
