<?php
session_start();
require_once('../util/security.php');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/trix/1.3.1/trix.css">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="stylesheet" href="Popupcss/popupchat.css">
  <link rel="stylesheet" href="Popupcss/Popupindex.css">
  <link rel="stylesheet" href="Popupcss/PopupMLstyles.css">
  <link rel="stylesheet" href="Popupcss/Popuploader.css">
  <link rel="stylesheet" href="Popupcss/trix-custom.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/trix/1.3.1/trix.js"></script>
</head>
<body>
    <div id="chatContainer">
    <button id="chatButton" class="open-button" style="display: none;">
      <div class="button-content">
        <div class="image-container"></div>
        <h4><span class="label label-default">Chat</span></h4>
      </div>
    </button>
    
    <div class="chat-popup" id="myForm" style="display: none;">
      <div class="form-header">
        <button class="minimize-button">-</button>
        <button class="fullpage-button">&#x2922;</button>
        <button class="close-button">x</button>
      </div>
      <div class="Popup_container">
        <form id="messageForm">
          <div id="chatContainer" class="chat-container">
            <div class="button-container">

      <button type="button" onclick="handleButtonClick('recipeTips')">Recipe Tips</button>

      <button type="button" onclick="handleButtonClick('other')">Other</button>

      <button type="button" onclick="handleButtonClick('identifyFood')">Identify Food</button>

    </div>
            <div id="messageContainer" class="messages"></div>
            <div id="responseContainer" class="responses"></div>
          </div>
          <div class="form-container">
            <label for="name"></label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required><br><br>
            <label for="message"></label><br>
            <input id="message" type="hidden" name="message">
            <trix-editor input="message"></trix-editor><br><br>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="slideshow-container" id="slideshow-container1"></div>
  <div id="navbar-container"></div>
  <div class="slideshow-container" id="slideshow-container2"></div>
  <div class="navbar">
    <a href="recipeHelp.php" style="display: block; width: 70%; padding: 10px; margin: 0 auto; text-align: center;">Recipe Helper</a>
</div>
  <section class="card">
    <h2>Select an Option:</h2>
    <select id="options" onchange="handleOptionSelection()" aria-label="Select a category">
      <option value="">Select...</option>
      <option value="userAccount">User Account</option>
      <option value="FAQ">FAQ</option>
      <option value="recipes">Recipes</option>
      </select>
  </section>
   <!-- Section for Search Input -->
  <section class="card">
    <div>
      <label for="targetWord">Browse Topics:</label>
      <input type="text" id="targetWord" aria-label="Enter a keyword to search">
      <button onclick="handleSearch()">Search</button>
    </div>
  </section>
  <div class="slideshow-container" id="slideshow-container3"></div>
  <!-- Section for Displaying Content -->
  <section id="content" class="card" aria-live="polite">
    <!-- Content will be dynamically inserted here based on user selection or search -->
  </section>
  <script src="javascript/home.js"></script>
  <script src="javascript/header.js"></script>
  <script src="javascript/navbar.js"></script>
  <script src="javascript/genreClassification.js"></script>
  <script type="module" src="Popupjavascript/Popupindex.js"></script>
  <script type="module" src="Popupjavascript/popupchat.js"></script>
  <script type="module" src="Popupjavascript/Popuploader.js"></script>
  <script type="module" src="Popupjavascript/PopupMLscript.js"></script>  
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet"></script>

</body>

</html>