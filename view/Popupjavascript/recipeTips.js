// Detailed and organized recipe tips with contextual headers and examples
const recipeTipsMessages = {
  default: [
    "Here are some general recipe tips:",
    "These tips might help you with your cooking:"
  ],
  baking: {
    general: {
      header: "General Baking Tips:",
      tips: [
        "Make sure to preheat your oven for at least 15 minutes before baking.",
        "Use room temperature ingredients for better results in baking.",
        "Don't open the oven door frequently while baking."
      ],
      examples: [
        "For consistent baking, always follow the recipe's instructions regarding ingredient temperatures and oven settings."
      ]
    },
    cakes: {
      header: "Cake Baking Tips:",
      tips: [
        "Ensure your ingredients are properly measured for accurate results.",
        "Test cakes for doneness by inserting a toothpick into the center."
      ],
      examples: [
        "If the toothpick comes out clean, your cake is done. If it has batter on it, bake for a few more minutes."
      ]
    },
    bread: {
      header: "Bread Baking Tips:",
      tips: [
        "Knead the dough until it's smooth and elastic.",
        "Let the dough rise in a warm, draft-free place."
      ],
      examples: [
        "A well-kneaded dough should pass the 'windowpane test' – stretch it thin without tearing."
      ]
    }
  },
  seasoning: {
    general: {
      header: "General Seasoning Tips:",
      tips: [
        "Season your food gradually and taste as you go to avoid over-seasoning.",
        "Use fresh herbs for a more vibrant flavor.",
        "Let the flavors meld by seasoning your dishes in advance."
      ],
      examples: [
        "Fresh herbs like basil and cilantro can enhance the flavor profile of your dishes significantly."
      ]
    },
    marinating: {
      header: "Marinating Tips:",
      tips: [
        "Marinate meats for at least 30 minutes to enhance flavor.",
        "Use acidic ingredients like vinegar or citrus juice to tenderize meat."
      ],
      examples: [
        "For a quick marinade, use lemon juice, olive oil, garlic, and herbs. Let the meat sit for at least 30 minutes."
      ]
    }
  },
  cooking: {
    general: {
      header: "General Cooking Tips:",
      tips: [
        "Don't overcrowd the pan to ensure even cooking.",
        "Let your meat rest after cooking to retain its juices.",
        "Use a thermometer to check the internal temperature of your meat."
      ],
      examples: [
        "Resting meat allows the juices to redistribute, making it more tender and flavorful."
      ]
    },
    grilling: {
      header: "Grilling Tips:",
      tips: [
        "Clean the grill before cooking to prevent sticking.",
        "Preheat the grill for even cooking.",
        "Let the meat rest before slicing to retain juices."
      ],
      examples: [
        "For perfect grill marks, avoid moving the meat too soon after placing it on the grill."
      ]
    },
    frying: {
      header: "Frying Tips:",
      tips: [
        "Heat the oil to the right temperature before frying.",
        "Don't overcrowd the pan to ensure even frying.",
        "Use a slotted spoon to remove fried items and drain on paper towels."
      ],
      examples: [
        "Maintaining the correct oil temperature ensures a crispy texture without making the food greasy."
      ]
    }
  },
  cuisines: {
    italian: {
      header: "Italian Cooking Tips:",
      tips: [
        "Use fresh, high-quality ingredients for the best results.",
        "Cook pasta until it is al dente for the perfect texture.",
        "Save some pasta water to adjust the consistency of your sauce."
      ],
      examples: [
        "Adding a splash of pasta water to your sauce helps it cling to the pasta better."
      ]
    },
    mexican: {
      header: "Mexican Cooking Tips:",
      tips: [
        "Toast your spices to bring out their full flavor.",
        "Use fresh lime juice to brighten up your dishes.",
        "Char your tortillas slightly for a smoky flavor."
      ],
      examples: [
        "Fresh lime juice can make a big difference in salsas and guacamole, adding a refreshing tang."
      ]
    }
  }
};

// Keywords to detect the context and type of recipe tips needed
const recipeTipsKeywords = {
  baking: {
    general: ['bake', 'oven', 'baking'],
    cakes: ['cake', 'cupcake'],
    bread: ['bread', 'loaf']
  },
  seasoning: {
    general: ['season', 'spice', 'flavor', 'herb'],
    marinating: ['marinate', 'marinade']
  },
  cooking: {
    general: ['cook', 'cooking', 'boil', 'steam'],
    grilling: ['grill', 'barbecue', 'bbq', 'smoke', 'charcoal'],
    frying: ['fry', 'deep-fry', 'pan-fry', 'crispy']
  },
  cuisines: {
    italian: ['italian', 'pasta', 'pizza', 'risotto'],
    mexican: ['mexican', 'taco', 'burrito', 'salsa', 'quesadilla']
  }
};

// Function to get the appropriate tips based on keywords
const getRecipeTips = (message) => {
  // Convert message to lowercase for case-insensitive comparison
  const lowerCaseMessage = message.toLowerCase();

  // Check each category and subcategory for keywords
  for (const [category, subcategories] of Object.entries(recipeTipsKeywords)) {
    if (typeof subcategories === 'object') {
      for (const [subcategory, keywords] of Object.entries(subcategories)) {
        if (keywords.some(keyword => lowerCaseMessage.includes(keyword))) {
          return recipeTipsMessages[category][subcategory];
        }
      }
    } else if (subcategories.some(keyword => lowerCaseMessage.includes(keyword))) {
      return recipeTipsMessages[category];
    }
  }

  // Return default tips if no keywords match
  return recipeTipsMessages.default;
};

export { recipeTipsMessages, recipeTipsKeywords, getRecipeTips };
