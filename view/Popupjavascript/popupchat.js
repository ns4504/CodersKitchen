import { loadAndInitializeModel } from './Popupindex.js';

class ChatPopup {
  constructor(containerId) {
    this.containerId = containerId;
    this.modelLoaded = false;
    this.init();
  }

  init() {
    console.log('Initializing ChatPopup');
    this.chatContainer = document.getElementById(this.containerId);

    if (this.chatContainer) {
      this.chatButton = document.getElementById('chatButton');
      this.chatForm = document.getElementById('myForm');
      this.messageContainer = document.getElementById('messageContainer');
      this.displayChatButton();
      this.addEventListenersToChatButton();
      this.addEventListenersToFormButtons();
    } else {
      console.error('Chat container not found.');
    }
  }

  displayChatButton() {
    console.log('Displaying chat button');
    window.onload = () => {
      setTimeout(() => {
        this.chatButton.style.display = 'block';
        this.chatButton.classList.add('bounceIn');
      }, 2000);
    };
  }

  addEventListenersToChatButton() {
    console.log('Adding event listener to chat button');
    this.chatButton.addEventListener('click', this.openForm.bind(this));
  }

  addEventListenersToFormButtons() {
    console.log('Adding event listeners to form buttons');
    this.closeButton = this.chatForm.querySelector('.close-button');
    this.minimizeButton = this.chatForm.querySelector('.minimize-button');
    this.fullpageButton = this.chatForm.querySelector('.fullpage-button');

    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.closeForm.bind(this));
    }

    if (this.minimizeButton) {
      this.minimizeButton.addEventListener('click', this.toggleMinimize.bind(this));
    }

    if (this.fullpageButton) {
      this.fullpageButton.addEventListener('click', this.toggleFullPage.bind(this));
    }
  }

  async openForm() {
    console.log('Opening chat form');
    this.chatForm.style.display = 'flex';
    if (!this.modelLoaded) {
      console.log('Loading model...');
      await loadAndInitializeModel();
      this.modelLoaded = true;
      console.log('Model loaded after opening chat form');
    }
  }

  closeForm() {
    console.log('Closing chat form');
    this.chatForm.style.display = 'none';
  }

  toggleMinimize() {
    console.log('Toggling minimize');
    const form = this.chatForm.querySelector('.form-container');
    const chatArea = this.chatForm.querySelector('.chat-container');
    if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'flex';
      chatArea.style.display = 'block';
      this.minimizeButton.textContent = '-';
      this.chatForm.style.height = 'auto';
    } else {
      form.style.display = 'none';
      chatArea.style.display = 'none';
      this.minimizeButton.textContent = '+';
      this.chatForm.style.height = '40px';
    }
  }

  toggleFullPage() {
    console.log('Toggling full page');
    this.chatForm.classList.toggle('full-page');
  }
}

// Ensure the ChatPopup is instantiated after the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded event fired');
  new ChatPopup('chatContainer');
});
