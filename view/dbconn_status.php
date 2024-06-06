<?php
require_once('../model/database.php');

error_reporting(E_ERROR);

$db = new Database();
?>

<html>
    <head>
        <title>Database Sampler</title>
    </head>
    <body>
        <h1>Database Sampler</h1>
        <h1>Database Connection Status</h1>
        <?php if (strlen($db->getDBError())) : ?>
            <h2><?php echo $db->getDBError(); ?></h2>
            <ul>
                <li><?php echo "Database Name: " . $db->getDBName(); ?></li>
                <li><?php echo "Database Host: " . $db->getDBHost(); ?></li>
                <li><?php echo "Database User: " . $db->getDBUser(); ?></li>
                <li><?php echo "Database User Password: " . $db->getDBUserPw(); ?></li>
            </ul>
            <?php else : ?>
                <h2><?php echo "Successfully connected to " . $db->getDBName(); ?></h2>
                <?php endif; ?>
            <h3><a href= "login.php"> Home</a></h3>
    </body>
</html>