<?php
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');

$signup_msg = '';
$pageTitle = "Update Profile";

//get uniqueID from query and fill in data for user to update
if (isset($_GET['uniqueId'])) {
    $user = UserController::getUserByUniqueId($_GET['uniqueId']);
    $pageTitle = "Update Profile";
}

// php to update the user
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['update'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
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
        <h3>Username: <input type="text" name="username" value="<?php echo $user->getUsername(); ?>" required></h3>
        <input type="hidden" name="email" value="<?php echo $user->getEmail(); ?>">
        <h3>Password: <input type="password" name="password" required></h3>
        <h3>Image URL: <input type="text" name="image" value="<?php echo $user->getImage(); ?>"></h3>
        <input type="hidden" name="uniqueId" value="<?php echo $user->getUniqueId(); ?>">
        <input type="submit" value="Update Profile" name="update">
    </form>

    <h2><?php echo $signup_msg; ?></h2>
    <ul>
        <li><h4><a href="profile.php">Back to my Profile</a></h4></li>
        <li><h4><a href="admin_view_users.php">View All Users</a></h4></li>
    </ul>
</main>
</body>
</html>
