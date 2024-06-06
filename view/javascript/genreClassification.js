const genreClassification = {
userAccount: {
    name: "User Account",
    description: "Manage your personal information, preferences, and saved recipes. Access your recipe collections, update personal details, and maintain your subscription settings.",
    topics: {
      "Sign up": "Create a new account to access all features.",
      "View subscription": "Your subscription is free. The account with our website will be linked to your email",
      "Terms and Conditions": `
<div class="terms-and-conditions">
  <ol>
    <li><strong>Account Registration:</strong> By creating an account on our website, you agree to provide accurate and complete information. Your account will be linked to the email address provided during registration.</li>
    <li><strong>Subscription:</strong> Our subscription service is free of charge. By subscribing, you gain access to additional features and content on our platform.</li>
    <li><strong>Usage:</strong> You agree to use our website and services responsibly and in accordance with all applicable laws and regulations.</li>
    <li><strong>Content:</strong> All content provided on our website is for informational purposes only. We do not guarantee the accuracy, completeness, or usefulness of any content.</li>
    <li><strong>Privacy:</strong> We respect your privacy and will only use your personal information in accordance with our Privacy Policy.</li>
    <li><strong>Termination:</strong> We reserve the right to terminate or suspend your account at any time, without prior notice, if you violate these terms and conditions or engage in any prohibited activities.</li>
    <li><strong>Changes:</strong> We may update or modify these terms and conditions from time to time. Any changes will be effective immediately upon posting on our website.</li>
  </ol>
  <p>By using our website and services, you agree to be bound by these terms and conditions. If youconsnot agree with any part of these terms, please do not use our website.</p>
</div>`,
      "Privacy Policy": `
<div class="privacy-policy">
  <p>We respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines the types of personal information we collect, how we use it, and the steps we take to safeguard your information.</p>
  <h3>Information We Collect</h3>
  <p>We may collect personal information such as your name, email address, and demographic information when you create an account or interact with our website.</p>
  <h3>How We Use Your Information</h3>
  <p>We use your personal information to provide and improve our services, communicate with you, and personalize your experience on our website.</p>
  <h3>Information Sharing</h3>
  <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent. However, we may share your information with trusted third-party service providers who assist us in operating our website and providing services to you.</p>
  <h3>Security</h3>
  <p>We implement a variety of security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
  <h3>Changes to This Privacy Policy</h3>
  <p>We may update or modify this Privacy Policy from time to time. Any changes will be effective immediately upon posting on our website.</p>
  <p>By using our website, you consent to the terms of this Privacy Policy.</p>
</div>`
    },
    targetWords: ["account", "profile", "preferences", "signup", "login", "subscription"] // Converted to lowercase
},
FAQ: {
    name: "FAQ",
    description: "Find answers to common questions related to account management, recipe submissions, privacy concerns, and other inquiries. Get immediate help with your most pressing questions.",
    topics: {
      "Account management": `
<div class="faq-topic">
  <h3>Account Management</h3>
  <p>Encountering issues with your login? Try these troubleshooting steps:</p>
  <ol>
    <li>Double-check your username and password for any typos.</li>
    <li>Ensure that Caps Lock is turned off.</li>
    <li>Clear your browser's cache and cookies.</li>
  </ol>
  <p>If the problem persists, contact support for further assistance.</p>
</div>`,
      "Support": "Get help with any issues you encounter on our platform. By clicking the contact button at the top of the page then send a message to our team"
    },
    targetWords: ["answers", "questions", "faq", "help", "support", "information"] // Converted to lowercase
  }
,
  recipes: {
    name: "Recipes",
    description: "Explore a variety of recipes from around the world. Discover new dishes and find instructions for preparing your favorite meals.",
    topics: {
      "Browse recipes": "Discover a wide range of recipes from various cuisines.",
      "How to share a recipe": "Simply click the share button at the top of the page. Find the recipe and click the share button.",
      "Recipe Help": "Try our recipe caluculator."
    },
    targetWords: ["recipes", "cooking", "baking", "ingredients", "cuisine", "nutritional"] // Converted to lowercase
  }
};

function handleOptionSelection() {
  const selectedOption = document.getElementById("options").value;
  if (selectedOption) {
    const option = genreClassification[selectedOption];
    displayContent(option);
  } else {
    updateContent("Please select an option from the dropdown.");
  }
}

function handleSearch() {
  const targetWord = document.getElementById("targetWord").value.toLowerCase();
  const matches = [];
  if (targetWord) {
    for (const key in genreClassification) {
      const option = genreClassification[key];
      if (option.targetWords.some(word => word === targetWord)) {
        matches.push(option);
      }
    }
    if (matches.length > 0) {
      matches.forEach(match => displayContent(match, true));
    } else {
      updateContent("No matches found for the entered target word.");
    }
  } else {
    updateContent("Please enter a target word.");
  }
}
