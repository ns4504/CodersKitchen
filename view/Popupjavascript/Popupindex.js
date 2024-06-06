import { Message } from './PopupMessage.js';
import { FormattedMessage } from './PopupFormattedMessage.js';
import { GenerateResponse } from './PopupGenerateResponse.js';
import { handleImageUpload } from './PopupimageHandler.js';
import { loadModel, classifyImage } from './PopupMLscript.js';
import { Loader } from './Popuploader.js';
import { recipeTipsMessages, recipeTipsKeywords, getRecipeTips } from './recipeTips.js';
import { otherOptionMessages, otherOptionKeywords } from '../javascript/otherOption.js';

let userName = '';
let chatId = generateId();
let modelLoaded = false;

export async function loadAndInitializeModel() {
  const messageContainer = document.getElementById('messageContainer');
  if (!messageContainer) {
    console.error('messageContainer element not found');
    return;
  }
  console.log('Starting model load...');
  modelLoaded = await loadModel(messageContainer);
  console.log('Model loaded:', modelLoaded);
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  document.getElementById('chatButton').addEventListener('click', () => {
    const chatPopup = document.getElementById('myForm');
    chatPopup.style.display = 'block';
    console.log('Opening chat form');
    if (!modelLoaded) {
      loadAndInitializeModel().then(() => {
        console.log('Model loaded after opening chat form');
      });
    }
  });

  document.getElementById('messageForm').addEventListener('submit', handleSubmit);
});

function handleSubmit(event) {
  event.preventDefault();
  console.log('Form submitted');

  if (userName === '') {
    const nameInput = document.getElementById('name');
    userName = nameInput.value.trim();
    if (userName === '') {
      alert('Please enter your name to start the chat.');
      return;
    }
    nameInput.style.display = 'none';
  }

  const messageElement = document.querySelector('trix-editor');
  const messageText = messageElement.editor.getDocument().toString().trim();
  const formattedMessageText = messageElement.innerHTML;

  if (messageText === '') {
    alert('Please enter a message.');
    return;
  }

  const newMessage = createMessageObject(messageText, formattedMessageText);
  processMessage(newMessage);
}

function createMessageObject(messageText, formattedMessageText) {
  const messageId = generateId();
  const timestamp = new Date().toLocaleString();

  return hasFormatting(formattedMessageText)
    ? new FormattedMessage(messageId, userName, formattedMessageText, timestamp, chatId)
    : new Message(messageId, userName, messageText, timestamp);
}

function processMessage(newMessage) {
  console.log('New message object:', newMessage);
  displayMessage(newMessage);

  const loaderElement = Loader.showLoader(document.getElementById('messageContainer'));
  setTimeout(() => {
    generateResponse(newMessage);
    Loader.hideLoader(loaderElement);
  }, 1000); // Simulate loading delay
}

function hasFormatting(htmlContent) {
  const div = document.createElement('div');
  div.innerHTML = htmlContent;
  return div.textContent !== div.innerHTML;
}

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function displayMessage(message) {
  const messageContainer = document.getElementById('messageContainer');
  const messageElement = message instanceof FormattedMessage ? message.formatMessage() : createPlainMessageElement(message);
  console.log('Displaying message:', messageElement);
  messageContainer.appendChild(messageElement);
}

function createPlainMessageElement(message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.innerHTML = `<strong>${message.name} (Chat ID: ${chatId}) - ${message.timestamp}:</strong> ${message.message}`;
  return messageElement;
}

function generateResponse(message) {
  const generateResponse = new GenerateResponse(message.name, message.id, message.message);
  const { response, category } = generateResponse.generate();
  console.log('Generated response:', response, 'Category:', category);
  displayResponse(response, category);
}

function displayResponse(response, category) {
  const messageContainer = document.getElementById('messageContainer');
  const responseElement = document.createElement('div');
  responseElement.classList.add('response');
  responseElement.innerHTML = `<strong>Response (ID: ${response.id}) - ${response.timestamp}:</strong> ${response.reply}`;
  console.log('Displaying response:', responseElement);
  messageContainer.appendChild(responseElement);

  if (category === 'default') {
    addResponseOptions(response.id);
  }
}

function addResponseOptions(id) {
  const messageContainer = document.getElementById('messageContainer');
  const responseElement = document.createElement('div');
  responseElement.classList.add('response');
  responseElement.innerHTML = `
    <img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon">
    <div class="button-container">
      <button type="button" onclick="handleButtonClick(event, 'recipeTips')">Recipe Tips</button>
      <button type="button" onclick="handleButtonClick(event, 'other')">Other</button>
      <button type="button" onclick="handleButtonClick(event, 'identifyFood')">Identify Food</button>
      <button type="button" onclick="handleButtonClick(event, 'temperatures')">Temperatures</button>
    </div>
  `;
  console.log('Adding response options:', responseElement);
  messageContainer.appendChild(responseElement);
}

window.handleButtonClick = function(event, type) {
  const buttonText = event.target.innerText;
  addButtonMessageAsUserMessage(buttonText);

  const messageContainer = document.getElementById('messageContainer');
  const followUpResponse = document.createElement('div');
  followUpResponse.classList.add('response');

  if (type === 'recipeTips') {
    followUpResponse.innerHTML = `<img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon"><strong>Response:</strong> Please specify what kind of tips you need (baking, seasoning, cooking...etc).`;
    document.getElementById('messageForm').removeEventListener('submit', handleSubmit);
    document.getElementById('messageForm').addEventListener('submit', handleRecipeTipsSubmit);
  } else if (type === 'other') {
    followUpResponse.innerHTML = `<img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon"><strong>Response:</strong> Please choose a category:`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    Object.keys(otherOptionMessages).forEach((category) => {
      const categoryButton = document.createElement('button');
      categoryButton.innerText = category.replace(/([A-Z])/g, ' $1');
      categoryButton.onclick = (event) => handleOtherCategoryClick(event, category);
      buttonContainer.appendChild(categoryButton);
    });

    followUpResponse.appendChild(buttonContainer);
  } else if (type === 'identifyFood') {
    followUpResponse.innerHTML = `<img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon">
      <strong>Response:</strong> Please provide an image of the food you want to identify.
      <input type="file" id="foodImageUpload" class="upload-btn">
    `;
    followUpResponse.querySelector('#foodImageUpload').addEventListener('change', function(event) {
      handleImageUpload(event.target, messageContainer, userName, chatId);
      processImage(event.target);
    });
  } else if (type === 'temperatures') {
    followUpResponse.innerHTML = `<img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon"><strong>Response:</strong> For cooking temperatures, here are some general guidelines: Using the correct temperature ensures your food is safe and delicious. Please choose a food group:`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    Object.keys(otherOptionMessages.temperatures).forEach((subcategory) => {
      if (subcategory !== 'default') {
        const subcategoryButton = document.createElement('button');
        subcategoryButton.innerText = subcategory.replace(/([A-Z])/g, ' $1');
        subcategoryButton.onclick = (event) => handleTemperatureSubcategoryClick(event, subcategory);
        buttonContainer.appendChild(subcategoryButton);
      }
    });

    followUpResponse.appendChild(buttonContainer);
  }

  console.log('Follow up response:', followUpResponse);
  messageContainer.appendChild(followUpResponse);
}

function handleRecipeTipsSubmit(event) {
  event.preventDefault();

  const messageElement = document.querySelector('trix-editor');
  const messageText = messageElement.editor.getDocument().toString().trim();
  const formattedMessageText = messageElement.innerHTML;
  const { tips, header, examples } = getRecipeTips(messageText);
  const messageId = generateId();
  const timestamp = new Date().toLocaleString();
  const newMessage = hasFormatting(formattedMessageText)
    ? new FormattedMessage(messageId, userName, formattedMessageText, timestamp, chatId)
    : new Message(messageId, userName, messageText, timestamp);

  console.log('New message for recipe tips:', newMessage);
  displayMessage(newMessage);

  const responseContainer = document.getElementById('messageContainer');
  const followUpResponse = document.createElement('div');
  followUpResponse.classList.add('response');

  let reply = `<img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon"><strong>${header}</strong><ul>`;
  tips.forEach(tip => {
    reply += `<li>${tip}</li>`;
  });
  reply += `</ul><strong>Examples:</strong><ul>`;
  examples.forEach(example => {
    reply += `<li>${example}</li>`;
  });
  reply += `</ul>`;

  followUpResponse.innerHTML = `
    <strong>Response:</strong> ${reply}
  `;

  console.log('Follow up response for recipe tips:', followUpResponse);
  responseContainer.appendChild(followUpResponse);
  messageElement.editor.setSelectedRange([0, messageElement.editor.getDocument().getLength()]);
  messageElement.editor.deleteInDirection('forward');
  document.getElementById('messageForm').removeEventListener('submit', handleRecipeTipsSubmit);
  document.getElementById('messageForm').addEventListener('submit', handleSubmit);
}

function handleOtherCategoryClick(event, category) {
  console.log('Category clicked:', category);

  const buttonText = event.target.innerText;
  addButtonMessageAsUserMessage(buttonText);

  const responseContainer = document.getElementById('messageContainer');
  const followUpResponse = document.createElement('div');
  followUpResponse.classList.add('response');

  const categoryMessages = otherOptionMessages[category];
  const defaultMessages = categoryMessages.default ? categoryMessages.default.join('<br>') : 'No additional information available.';

  followUpResponse.innerHTML = `<img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon"><strong>Response:</strong> ${defaultMessages}`;

  if (Object.keys(categoryMessages).length > 1) {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    
    Object.keys(categoryMessages).forEach((subCategory) => {
      if (subCategory !== 'default') {
        const subCategoryButton = document.createElement('button');
        subCategoryButton.innerText = subCategory.replace(/([A-Z])/g, ' $1');
        subCategoryButton.onclick = (event) => handleSubCategoryClick(event, category, subCategory);
        buttonContainer.appendChild(subCategoryButton);
      }
    });

    followUpResponse.appendChild(buttonContainer);
  }

  responseContainer.appendChild(followUpResponse);
}

function handleSubCategoryClick(event, category, subCategory) {
  console.log('Sub-category clicked:', subCategory);

  const buttonText = event.target.innerText;
  addButtonMessageAsUserMessage(buttonText);

  const responseContainer = document.getElementById('messageContainer');
  const followUpResponse = document.createElement('div');
  followUpResponse.classList.add('response');

  const subCategoryMessages = otherOptionMessages[category][subCategory];
  const messages = subCategoryMessages ? subCategoryMessages.join('<br>') : 'No additional information available.';

  followUpResponse.innerHTML = `<img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon"><strong>Response:</strong> ${messages}`;

  responseContainer.appendChild(followUpResponse);
}

function handleTemperatureSubcategoryClick(event, subcategory) {
  console.log('Temperature sub-category clicked:', subcategory);

  const buttonText = event.target.innerText;
  addButtonMessageAsUserMessage(buttonText);

  const responseContainer = document.getElementById('messageContainer');
  const followUpResponse = document.createElement('div');
  followUpResponse.classList.add('response');

  if (subcategory === 'meats') {
    const meatCategories = otherOptionMessages.temperatures.meats;
    followUpResponse.innerHTML = `<img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon"><strong>Response:</strong> For meats, here are the recommended cooking temperatures:`;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    Object.keys(meatCategories).forEach((meatType) => {
      if (meatType !== 'default') {
        const meatButton = document.createElement('button');
        meatButton.innerText = meatType.replace(/([A-Z])/g, ' $1');
        meatButton.onclick = (event) => handleMeatTypeClick(event, meatType);
        buttonContainer.appendChild(meatButton);
      }
    });

    followUpResponse.appendChild(buttonContainer);
  } else {
    const messages = otherOptionMessages.temperatures[subcategory].join('<br>');
    followUpResponse.innerHTML = `<img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon"><strong>Response:</strong> ${messages}`;
  }

  responseContainer.appendChild(followUpResponse);
}

function handleMeatTypeClick(event, meatType) {
  console.log('Meat type clicked:', meatType);

  const buttonText = event.target.innerText;
  addButtonMessageAsUserMessage(buttonText);

  const responseContainer = document.getElementById('messageContainer');
  const followUpResponse = document.createElement('div');
  followUpResponse.classList.add('response');

  const messages = otherOptionMessages.temperatures.meats[meatType].join('<br>');
  followUpResponse.innerHTML = `<img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon"><strong>Response:</strong> ${messages}`;

  responseContainer.appendChild(followUpResponse);
}

function addButtonMessageAsUserMessage(buttonText) {
  const messageId = generateId();
  const timestamp = new Date().toLocaleString();
  const newMessage = new Message(messageId, userName, buttonText, timestamp);
  
  processButtonMessage(newMessage);
}

function processButtonMessage(newMessage) {
  console.log('New message object from button:', newMessage);
  displayMessage(newMessage);

  const loaderElement = Loader.showLoader(document.getElementById('messageContainer'));
  setTimeout(() => {
    generateResponse(newMessage);
    Loader.hideLoader(loaderElement);
  }, 1000); // Simulate loading delay
}

async function processImage(inputElement) {
  const file = inputElement.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = async function(e) {
      const img = new Image();
      img.src = e.target.result;
      img.onload = async function() {
        const messageContainer = document.getElementById('messageContainer');
        const predictions = await classifyImage(img, messageContainer);
        console.log('Image predictions:', predictions);
        displayClassificationResults(predictions, messageContainer);
      };
    };
    reader.readAsDataURL(file);
  }
}

function displayClassificationResults(predictions, messageContainer) {
  const responseElement = document.createElement('div');
  responseElement.classList.add('response');
  responseElement.innerHTML = `<img src="https://assets.codepen.io/7389588/cheflogo.jpg" alt="Bot Icon" class="response-icon">
    <strong>Here are the top results:</strong><br>
    <div class="classification-results">
  `;

  predictions.slice(0, 3).forEach(prediction => {
    let confidence = (prediction.probability * 100).toFixed(2);
    responseElement.innerHTML += `<div class="classification-item">${confidence}% sure this is <strong>${prediction.className}</strong>.</div>`;
  });

  responseElement.innerHTML += '</div>';
  console.log('Displaying classification results:', responseElement);
  messageContainer.appendChild(responseElement);
}
