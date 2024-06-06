const otherOptionMessages = {
  ingredientSubstitutions: {
    default: [
      "For ingredient substitutions, here are some general tips:",
      "You can often substitute similar ingredients in a recipe."
    ],
    commonSubstitutes: [
      "You can substitute butter with margarine or oil in most recipes.",
      "If you're out of eggs, you can use applesauce or a mashed banana as a substitute."
    ],
    allergyFriendly: [
      "For a dairy-free option, use almond milk or coconut milk instead of regular milk.",
      "Use gluten-free flour blends instead of regular flour for gluten-free baking."
    ],
    healthierOptions: [
      "Use Greek yogurt instead of sour cream for a healthier alternative.",
      "Replace white flour with whole wheat flour for added nutrients."
    ]
  },
  dietaryRestrictions: {
    default: [
      "For dietary restrictions, here are some general tips:",
      "Always check the ingredient list to ensure it meets your dietary needs."
    ],
    vegetarian: [
      "You can replace meat with tofu, tempeh, or legumes in many recipes.",
      "Use vegetable broth instead of chicken broth in soups and stews."
    ],
    vegan: [
      "Use plant-based milk, such as almond or soy milk, instead of dairy milk.",
      "Replace honey with maple syrup or agave nectar for a vegan sweetener."
    ],
    lowCarb: [
      "Use cauliflower rice instead of regular rice for a low-carb option.",
      "Replace pasta with zucchini noodles or spaghetti squash for a low-carb meal."
    ],
    keto: [
      "Use almond flour or coconut flour instead of regular flour for keto-friendly baking.",
      "Replace sugar with erythritol or stevia for a keto-friendly sweetener."
    ],
    glutenFree: [
      "Use gluten-free oats instead of regular oats for baking.",
      "Replace soy sauce with tamari or coconut aminos for a gluten-free option."
    ]
  },
  cookingTechniques: {
    default: [
      "For cooking techniques, here are some general tips:",
      "Make sure to read through the entire recipe before starting to cook."
    ],
    baking: [
      "Make sure to preheat your oven for at least 15 minutes before baking.",
      "Use room temperature ingredients for better results in baking."
    ],
    grilling: [
      "Preheat your grill to ensure even cooking.",
      "Clean your grill grates before cooking to prevent sticking."
    ],
    frying: [
      "Use a thermometer to maintain the correct oil temperature while frying.",
      "Don't overcrowd the pan to ensure even frying."
    ],
    steaming: [
      "Use a steamer basket to keep food above the boiling water.",
      "Season your food before steaming for better flavor."
    ],
    slowCooking: [
      "Use tougher cuts of meat for slow cooking, as they become tender over time.",
      "Layer vegetables at the bottom and meat on top for even cooking."
    ]
  },
  internationalCuisines: {
    default: [
      "For international cuisines, here are some general tips:",
      "Explore a variety of spices and herbs to bring out authentic flavors."
    ],
    italian: [
      "Use fresh basil and oregano for authentic Italian flavors.",
      "Cook pasta until al dente for the best texture."
    ],
    chinese: [
      "Use soy sauce, ginger, and garlic as staple ingredients in Chinese cooking.",
      "Stir-fry vegetables quickly over high heat to retain their crunch."
    ],
    mexican: [
      "Use cumin, chili powder, and lime for authentic Mexican flavors.",
      "Warm tortillas before serving for better texture."
    ],
    indian: [
      "Use a blend of spices like turmeric, cumin, and coriander for Indian cooking.",
      "Cook onions, ginger, and garlic thoroughly to form the base of many Indian dishes."
    ],
    japanese: [
      "Use soy sauce, mirin, and sake for authentic Japanese flavors.",
      "Prepare sushi rice with rice vinegar, sugar, and salt for the perfect balance."
    ]
  },
  temperatures: {
    default: [
      "For cooking temperatures, here are some general guidelines:",
      "Using the correct temperature ensures your food is safe and delicious."
    ],
    meats: {
      default: [
        "For meats, here are the recommended cooking temperatures:"
      ],
      beef: [
        "Rare: 120-125°F (49-52°C)",
        "Medium Rare: 130-135°F (54-57°C)",
        "Medium: 140-145°F (60-63°C)",
        "Medium Well: 150-155°F (66-68°C)",
        "Well Done: 160°F (71°C) and above"
      ],
      poultry: [
        "Chicken and Turkey (whole or pieces): 165°F (74°C)",
        "Ground poultry: 165°F (74°C)"
      ],
      pork: [
        "Pork chops, roasts, and tenderloin: 145°F (63°C) with a 3-minute rest",
        "Ground pork: 160°F (71°C)"
      ],
      lamb: [
        "Lamb chops, roasts, and leg: 145°F (63°C) with a 3-minute rest",
        "Ground lamb: 160°F (71°C)"
      ]
    },
    seafood: [
      "Fish: 145°F (63°C) or until the flesh is opaque and separates easily with a fork",
      "Shrimp, lobster, crab, and scallops: Cook until the flesh is pearly or white, and opaque",
      "Clams, oysters, and mussels: Cook until their shells open during cooking"
    ]
  }
};

const otherOptionKeywords = {
  ingredientSubstitutions: ['substitute', 'replacement', 'alternative'],
  dietaryRestrictions: ['diet', 'allergy', 'vegetarian', 'vegan', 'low carb', 'keto', 'gluten-free'],
  cookingTechniques: ['bake', 'grill', 'fry', 'technique', 'method', 'steam', 'slow cook'],
  internationalCuisines: ['italian', 'chinese', 'mexican', 'indian', 'japanese', 'cuisine'],
  temperatures: ['meat', 'seafood', 'temperature', 'cooking temperature', 'doneness']
};

export { otherOptionMessages, otherOptionKeywords };
