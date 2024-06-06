<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');
require_once('../controller/user_manager.php');
require_once('../util/security.php');

// connect to database
try { 
    $db = new Database();
    $conn = $db->getDBConn(); 
}
catch (Exception $e) {
    die($e->getMessage());
}

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
    $isAdmin = $user->getIsAdmin();
    $dashboard_msg = "Welcome, $username!";
}

if (isset($_POST['update'])) {
    //update button pressed for a user
    if (isset($_POST['uidUpd'])) {
        header('Location: ./update.php?uniqueId=' . $_POST['uidUpd']);
    }
    unset($_POST['update']);
    unset($_POST['uidUpd']);
}

if (isset($_GET['logout_id']) && $_GET['logout_id'] == $uniqueId) {
    // Unset all session variables
    $_SESSION = array();

    // Destroy the session
    session_destroy();

    // Manually delete the session cookie
    if (isset($_COOKIE[session_name()])) {
        setcookie(session_name(), '', time() - 42000, '/');
    }

    // Redirect to the login page
    header("Location: login.php");
    exit();
}

// Fetch current user details if needed
$userManager = new UserManager($conn, $uniqueId);
$currentUser = $userManager->fetchCurrentUserDetails();
?>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Profile</title>
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/header.css">
<link rel="stylesheet" href="css/profile.css">
</head>
<body>
  <div class="slideshow-container" id="slideshow-container1"></div>
  <div id="navbar-container"></div>
  <div class="slideshow-container" id="slideshow-container2"></div>
  <div class="prof">
    <img id="pfp" src=
    <?php 
        if ($image != NULL) {
            echo $image; 
        } else {
            echo ".";
        }
    ?> 
    alt="No Image or Invalid Image Uploaded" >
    <h1><?php echo $username ?></h1>
    <h2><?php echo $email ?></h2>

    <form method="POST">
        <input type="hidden" name="uidUpd"
            value="<?php echo $user->getUniqueId(); ?>" />
        <input type="submit" value="Change my Profile" name="update" />
        
<a href="?logout_id=<?php echo $currentUser['uniqueId']; ?>" class="logout">Logout</a>
<?php if ($isAdmin): ?>
<a href="admin_view_users.php" class="logout">View All Users</a>
<?php endif; ?>
    </form>
    <h3>Saved Recipes</h3>
    <ul>
    <li><h4><a href="recipePicker.php">Edit your saved recipes</a></h4></li>
</ul>
  </div>

  <div class="slideshow-container" id="slideshow-container3"></div>
  <script src="javascript/header.js"></script>
  <script src="javascript/navbar.js"></script>
</body>
</html>
