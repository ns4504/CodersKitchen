import { responseMessages, keywords } from './responses.js';
import { Response } from './PopupResponse.js';

export class GenerateResponse {
  constructor(name, messageId, messageText) {
    this.name = name;
    this.messageId = messageId;
    this.messageText = messageText;
  }

  sanitizeMessage(messageText) {
    return messageText
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')  // Remove special characters
      .trim();
  }

  analyzeMessage() {
    const sanitizedMessage = this.sanitizeMessage(this.messageText);
    for (const [category, words] of Object.entries(keywords)) {
      for (const word of words) {
        if (sanitizedMessage.includes(word)) {
          return category;
        }
      }
    }
    return 'default';
  }

  generate() {
    const category = this.analyzeMessage();
    let reply;
    if (responseMessages[category] && responseMessages[category].length > 0) {
      reply = responseMessages[category][Math.floor(Math.random() * responseMessages[category].length)];
    } else {
      reply = responseMessages.default[Math.floor(Math.random() * responseMessages.default.length)];
    }

    const timestamp = new Date().toLocaleString();
    const response = new Response(this.messageId, reply, timestamp, this.messageId, category);
    return { response, category };
  }
}
