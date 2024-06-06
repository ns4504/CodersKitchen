<?php 
session_start();
require_once('../controller/user.php');
require_once('../controller/user_controller.php');

// Check if the user is logged in and is an admin
if (!isset($_SESSION['uniqueId']) || !isset($_SESSION['isAdmin']) || !$_SESSION['isAdmin']) {
    header('Location: login.php'); // Redirect to login page if not logged in or not an admin
    exit();
}

if (isset($_POST['update'])) {
    // Update button pressed for a user
    if (isset($_POST['uidUpd'])) {
        header('Location: ./adminUpdate.php?uniqueId=' . $_POST['uidUpd']);
    }
    unset($_POST['update']);
    unset($_POST['uidUpd']);
}

if (isset($_POST['delete'])) {
    // Delete button pressed for a user
    if (isset($_POST['uidDel'])) {
        UserController::deleteUser($_POST['uidDel']);
    }
    unset($_POST['delete']);
    unset($_POST['uidDel']);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ADMIN - View Users</title>
    <link rel="stylesheet" type="text/css" href="css/view_users.css"/>
</head>
<body>
    <h1>All Users List</h1>
    <div class="user-cards">
        <?php foreach (UserController::getAllUsers() as $user) : ?>
        <div class="user-card">
            <p><strong>User ID:</strong> <?php echo $user->getId(); ?></p>
            <p><strong>Unique ID:</strong> <?php echo $user->getUniqueId(); ?></p>
            <p><strong>Username:</strong> <?php echo $user->getUsername(); ?></p>
            <p><strong>Email:</strong> <?php echo $user->getEmail(); ?></p>
            <p><strong>Password:</strong> <?php echo $user->getPassword(); ?></p>
            <p><strong>Profile Image:</strong> <img src="<?php echo $user->getImage(); ?>" alt="Profile Image" /></p>
            <p><strong>Admin:</strong> <?php echo $user->getIsAdmin() ? 'Yes' : 'No'; ?></p>
            <div class="user-actions">
                <form method="POST">
                    <input type="hidden" name="uidUpd" value="<?php echo $user->getUniqueId(); ?>"/>
                    <input type="submit" value="Update" name="update" class="btn-update"/>
                </form>
                <form method="POST">
                    <input type="hidden" name="uidDel" value="<?php echo $user->getUniqueId(); ?>"/>
                    <input type="submit" value="Delete" name="delete" class="btn-delete"/>
                </form>
            </div>
        </div>
        <?php endforeach; ?>
    </div>
    <h3><a href="profile.php">Home</a></h3>
    <h3><a href="signup.php">Create New User</a></h3> <!-- Link to the signup form -->
</body>
</html>
