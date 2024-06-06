// PopupFormattedMessage.js
import { Message } from './PopupMessage.js';

export class FormattedMessage extends Message {
  constructor(id, name, message, timestamp, chatId) {
    super(id, name, message, timestamp);
    this._chatId = chatId;
  }

  get chatId() {
    return this._chatId;
  }

  set chatId(value) {
    this._chatId = value;
  }

  formatMessage() {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `
      <strong>${this.name} (Chat ID: ${this.chatId}) - ${this.timestamp}:</strong>
      <div>${this.message}</div>
    `;
    return messageElement;
  }
}
