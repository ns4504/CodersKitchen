<?php
session_start();
require_once('util/security.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Delight</title>
  <link rel="stylesheet" href="view/css/header.css">
  <style>
    h1 {
    color: black;
    text-align: center;
}
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
}

@keyframes animateBackground {
    0% { transform: scale(1.0); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1.0); }
}

#background-image-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://assets.codepen.io/7389588/2c5b30fe-3f72-4ee4-9ce7-75199552a14e.jpg") no-repeat center center/cover;
    animation: animateBackground 10s infinite;
}

h1 {
    color: black;
    text-align: center;
}

#site-button {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 20px;
    font-size: 20px;
    background-color: #FF5733; /* Warm autumn orange */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0,0,0,0.5);
    transition: background-color 0.3s;
}

#site-button:hover {
    background-color: #C13E10; /* Darker shade for hover effect */
}

#chef-image {
    display: block;
    margin: 0 auto;
    max-width: 40%;
    height: auto;
}

  </style>
</head>
<body>
    <div id="background-image-container"></div>
    <div class="slideshow-container" id="slideshow-container1"></div>
    <img id="chef-image" src="https://assets.codepen.io/7389588/Chef-bro.png" alt="Chef Image" />
    <h1>Welcome</h1>
    <div class="slideshow-container" id="slideshow-container2"></div>
    <button id="site-button">Start Browsing Recipes</button>
    <div class="slideshow-container" id="slideshow-container3"></div>
    <script src="view/javascript/index.js"></script>
    <script src="view/javascript/header.js"></script>
</body>
</html>
