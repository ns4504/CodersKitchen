// responses.js

const responseMessages = {
  recipes: [
    "I understand you're asking about recipes. Could you please provide more details?",
    "It seems like you have a question about recipes. What specifically would you like to know?",
  ],
  userAccount: [
    "You're inquiring about your user account. Can you specify what you need help with?",
    "It looks like you have a question regarding your account. How can I assist you?",
  ],
  faq: [
    "I see you have a question related to FAQs. Please let me know how I can help.",
    "You're asking about frequently asked questions. Can you provide more details?",
  ],
  default: [
    "Thank you for your message. Could you please provide more details?",
    "I appreciate your message. How can I assist you further?",
  ]
};

const keywords = {
  recipes: ['recipe', 'cooking', 'dish'],
  userAccount: ['account', 'password', 'login', 'register', 'signup'],
  faq: ['faq', 'support', 'help', 'question'],
};

export { responseMessages, keywords };
