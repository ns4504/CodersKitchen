-- Drop the database and all its tables if it exists
DROP DATABASE IF EXISTS RecipeDatabase;

-- Create the database
CREATE DATABASE RecipeDatabase;
USE RecipeDatabase;

-- Create Users table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uniqueId VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    image VARCHAR(255), 
    isAdmin BOOLEAN NOT NULL DEFAULT FALSE

);

-- Create MealTypes table
CREATE TABLE MealTypes (
    mealtypeId INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(255) NOT NULL UNIQUE
);

-- Create Cuisine table
CREATE TABLE Cuisine (
    cuisineId INT AUTO_INCREMENT PRIMARY KEY,
    cuisineName VARCHAR(255) NOT NULL UNIQUE
);

-- Create Recipes table
CREATE TABLE Recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    mealTypeId INT NOT NULL,
    cuisineId INT NOT NULL,
    description TEXT,
    servings INT,
    image VARCHAR(255),
    FOREIGN KEY (mealTypeId) REFERENCES MealTypes(mealtypeId),
    FOREIGN KEY (cuisineId) REFERENCES Cuisine(cuisineId)
);

-- Create Ingredients table
CREATE TABLE Ingredients (
    IngredientID INT AUTO_INCREMENT PRIMARY KEY,
    RecipeID INT,
    Ingredient VARCHAR(255),
    Quantity DECIMAL(10,2),
    Unit VARCHAR(100),
    FOREIGN KEY (RecipeID) REFERENCES Recipes(id)
);

-- Create Instructions table
CREATE TABLE Instructions (
    InstructionID INT AUTO_INCREMENT PRIMARY KEY,
    RecipeID INT,
    StepNumber INT,
    Instruction TEXT,
    FOREIGN KEY (RecipeID) REFERENCES Recipes(id)
);

-- Create UserRecipes table
CREATE TABLE UserRecipes (
    userId INT NOT NULL,
    recipeId INT NOT NULL,
    savedDate DATETIME NOT NULL,
    shared BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (userId, recipeId),
    FOREIGN KEY (userId) REFERENCES Users(id),
    FOREIGN KEY (recipeId) REFERENCES Recipes(id)
);

-- Create Messages table
CREATE TABLE Messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    messageText TEXT NOT NULL,
    sentTime DATETIME NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id)
);

INSERT INTO Cuisine (cuisineName) VALUES
('American'),
('Italian'),
('Mexican'),
('Chinese'),
('Turkish'),
('Irish'),
('Mediterranean');

INSERT INTO MealTypes (type) VALUES
('Breakfast'),
('Lunch'),
('Dinner'),
('Snack'),
('Dessert');


-- Insert sample data into MealTypes, Cuisine, and Recipes tables
--  Recipes
INSERT INTO Recipes (name, mealTypeId, cuisineId, description, servings, image)
VALUES
  ('Chicken Parmesan', 3, 2, 'A delicious Italian classic with crispy chicken, marinara, and melted cheese.', 4, 'https://media.istockphoto.com/id/523263890/photo/chicken-parmesan-with-spaghetti.jpg?s=612x612&w=0&k=20&c=aa9Zzk-6v31k9pVEv07mPDmiN0heCMyIad_W29C9f30='),
  ('Classic French Toast', 1, 3, 'Sweet and savory French toast, perfect for a delightful breakfast.', 4, 'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUyNjQ4NzJ8&ixlib=rb-4.0.3&q=85'),
  ('All-American Banana Split', 4, 1, 'Classic American dessert with ice cream, bananas, and toppings.', 1, 'https://media.istockphoto.com/id/1502397029/photo/banana-split-ice-cream-with-american-flag-top-view.jpg?s=612x612&w=0&k=20&c=pkIFRYRQOlVq0BLu_VrCQmnGRP1wyA0Seq8O5U5hvqQ='),
  ('Golden Apple Pie', 4, 1, 'A sweet dessert of apple pie with golden crust.', 8, 'https://media.istockphoto.com/id/450752471/photo/homemade-organic-apple-pie-dessert.jpg?s=612x612&w=0&k=20&c=6mwKTunGfRKFWyB_VUOGqXzcUMtBSCvg6JAQ3At2aWE='),
  ('Baked Penne with Roasted Vegetables', 3, 2, 'Hearty Italian penne baked with a medley of roasted vegetables.', 6, 'https://media.istockphoto.com/id/1185235055/photo/penne-alla-vodka%C2%A0is-a-classic-italian-pasta-dish-made-with-penne-in-a-creamy-tomato-and-vodka.jpg?s=612x612&w=0&k=20&c=xeb0Mp7iMxAxJQHTuKsrtO91u3wojPUQDrkRgj9ErHw='),
  ('Greek Salad', 2, 5, 'Fresh and healthy Greek salad with tomatoes, cucumbers, and feta.', 4, 'https://media.istockphoto.com/id/108623209/photo/greek-salad.jpg?s=612x612&w=0&k=20&c=39Laams-kD09H2wyr8gbI4ry1SvFqV6JC3BPTAg5qEU='),
  ('Chicken Curry', 3, 4, 'Spicy and rich Indian chicken curry with a creamy tomato base.', 4, 'https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=612x612&w=0&k=20&c=lOkmRiBFovpKW5FA9hn0_yXg5HOTx78Can4E3JavpFE='),
  ('Spaghetti Carbonara', 3, 2, 'Creamy and classic Italian spaghetti with pancetta and cheese.', 4, 'https://media.istockphoto.com/id/1181456803/photo/creamy-spaghetti-with-mushroom-creamy-pasta-with-mushroom-spaghetti-pasta-and-mushroom.jpg?s=612x612&w=0&k=20&c=-jviTbDHTo0cdcd4UnLstJgI8D7ukDa8w2acQ3o_LnU='),
  ('Tortellini Caprese Salad', 2, 2, 'Delightful Italian salad combining tortellini with fresh Caprese elements.', 4, 'https://media.istockphoto.com/id/1272765606/photo/delicious-antipasti-tortellini-pasta-salad.jpg?s=612x612&w=0&k=20&c=xWVmRT-QYc-or7hc_QlWSPAnZOU7reRSgg2MUzKHdhA='),
  ('Caprese Salad Sub Sandwich', 2, 2, 'Italian Caprese flavors packed in a hearty sub sandwich.', 4, 'https://media.istockphoto.com/id/1501072899/photo/close-up-image-of-bakery-shelf-display-batch-of-submarine-roll-sandwiches-row-of-caprese.jpg?s=612x612&w=0&k=20&c=FlaZks02WfhJVVivusKqqjoNoyABu7jamwJMcQLkQCo='),
  ('Nai Wong Bao', 4, 4, 'Sweet Chinese buns filled with rich custard.', 10, 'https://tse3.mm.bing.net/th?id=OIP.Qj6cUDioYlY10PG3uqC0CAHaLH&pid=Api&P=0&h=220'),
  ('Tomato and Egg with Rice', 3, 4, 'Simple and comforting Chinese dish of tomatoes and eggs served over rice.', 4, 'https://media.istockphoto.com/id/500386802/photo/close-up-of-homemade-fried-rice-with-tomatoes-and-egg.jpg?s=612x612&w=0&k=20&c=nvgp2jAoaokYkHtK49JGZfnD3LnzCU2S9PvWvwkb-lc='),
  ('Tanghulu', 4, 4, 'Traditional Chinese snack of candied fruit on a stick.', 5, 'https://media.istockphoto.com/id/1459613965/photo/sugarcoated-haws-on-a-stick.jpg?s=612x612&w=0&k=20&c=JLtJs6bHZBlmnQfNVtJgypqiTpCxeZcdf4vqSBdngMM='),
  ('Huevos Rancheros', 1, 6, 'Mexican breakfast dish featuring eggs and tortillas.', 2, 'https://media.istockphoto.com/id/115728416/photo/huevos-rancheros.jpg?s=612x612&w=0&k=20&c=TB9vkxnquuS8iq6PZCXhnGjs76ptc_SSpp3TYXGAc8Y='),
  ('Chicken and Tomato Pozole', 3, 6, 'Hearty Mexican soup with chicken, hominy, and tomatoes.', 6, 'https://media.istockphoto.com/id/1265238562/photo/mexican-pozole-soup.jpg?s=612x612&w=0&k=20&c=7yQD24B3NSxVvwe7Ew365wmCEJChId8MeihoOZMkGtY='),
  ('Menemen', 1, 7, 'Turkish scrambled eggs cooked with tomatoes and peppers.', 4, 'https://media.istockphoto.com/id/1316063803/photo/traditional-turkish-dish-mememen-in-a-cast-iron-frying-pan-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=pwCUqKithvOIurtHN0dYiNngfh2oyUypn5bvckmdqiI='),
  ('Full Irish Breakfast', 1, 7, 'Traditional Irish breakfast with sausages, bacon, eggs, and more.', 2, 'https://media.istockphoto.com/id/959874292/photo/full-english-or-irish-breakfast-on-wooden-table-nutritious-and-healthy-morning-meal.jpg?s=612x612&w=0&k=20&c=hBJLLDCC2OyhMaxhAy8cP2f1yoWCiKlxh1fb1WK3QHk='),
  ('Mediterranean Tuna Wrap', 2, 5, 'Healthy Mediterranean wrap filled with tuna and fresh vegetables.', 4, 'https://media.istockphoto.com/id/1163893310/photo/tortilla-with-added-ink-cuttlefish-wraps-with-chicken-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=VwCRXtPVrVxQtIpGoCIefupoqNIexUWAlsu4zrcvtxM=');


--  RecipeID = 1 for Chicken Parmesan
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (1, 'boneless, skinless chicken breasts', 4, 'piece(s)'),
  (1, 'salt and freshly ground black pepper', 1, 'to taste'),
  (1, 'flour', 2, 'cup(s)'),
  (1, 'eggs', 2, 'large'),
  (1, 'breadcrumbs', 2, 'cup(s)'),
  (1, 'vegetable oil', 1, 'cup(s)'),
  (1, 'marinara sauce', 2, 'cup(s)'),
  (1, 'mozzarella cheese', 1, 'cup(s)'),
  (1, 'Parmesan cheese', 0.5, 'cup(s)'),
  (1, 'fresh basil', 0.25, 'cup(s)'),
  (1, 'cooked spaghetti', 1, 'as needed'),
  (2, 'thick-cut bread (brioche or challah works best)', 8, 'slices'),
  (2, 'large eggs', 4, ''),
  (2, 'milk', 1, 'cup(s)'),
  (2, 'vanilla extract', 2, 'teaspoon(s)'),
  (2, 'ground cinnamon', 1, 'teaspoon(s)'),
  (2, 'Butter for frying', '', ''),
  (2, 'Maple syrup and powdered sugar for serving', '', ''),
  (3, 'banana', 1, 'piece(s)'),
  (3, 'vanilla ice cream', 1, 'scoop'),
  (3, 'chocolate ice cream', 1, 'scoop'),
  (3, 'strawberry ice cream', 1, 'scoop'),
  (3, 'pineapple chunks', 2, 'tablespoon(s)'),
  (3, 'strawberry slices', 2, 'tablespoon(s)'),
  (3, 'chocolate syrup', 2, 'tablespoon(s)'),
  (3, 'whipped cream', '', 'as needed'),
  (3, 'chopped nuts', '', 'as needed'),
  (3, 'cherry', 1, 'piece(s)'),
  (4, 'pie crusts', 2, 'piece(s)'),
  (4, 'apples, peeled, cored and sliced', 6, 'medium'),
  (4, 'sugar', 0.75, 'cup(s)'),
  (4, 'brown sugar', 0.25, 'cup(s)'),
  (4, 'all-purpose flour', 2, 'tablespoon(s)'),
  (4, 'ground cinnamon', 1, 'teaspoon'),
  (4, 'ground nutmeg', 0.5, 'teaspoon'),
  (4, 'lemon juice', 1, 'tablespoon'),
  (4, 'butter', 2, 'tablespoon(s)'),
  (4, 'egg white', 1, 'large'),
  (4, 'additional sugar for topping', '', 'as needed');

-- Instructions for Chicken Parmesan,  RecipeID = 1
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (1, 1, 'Preheat your oven to 400 degrees F (200 degrees C).'),
  (1, 2, 'Season chicken breasts with salt and pepper. Dredge each piece in flour and tap off excess, then dip in beaten eggs, and finally coat with breadcrumbs.'),
  (1, 3, 'Heat oil in a large skillet over medium heat. Once hot, add chicken and fry until golden brown on both sides (about 2-3 minutes per side). Remove from heat and drain on paper towels.'),
  (1, 4, 'Place fried chicken in a baking dish. Spoon some marinara sauce over each piece, then sprinkle with mozzarella and Parmesan cheeses.'),
  (1, 5, 'Bake in the preheated oven until the cheese is bubbly and browned, about 20 minutes.'),
  (1, 6, 'Sprinkle with fresh basil and serve over cooked spaghetti.'),
  (2, 1, 'Prepare the Egg Mixture: In a shallow dish, whisk together the eggs, milk, vanilla extract, and cinnamon.'),
  (2, 2, 'Soak the Bread: Dip each slice of bread into the egg mixture, allowing the bread to soak up some of the mixture.'),
  (2, 3, 'Cook the French Toast: Heat a large skillet or griddle over medium heat and melt a slice of butter. Add the soaked bread slices and cook until golden brown on both sides, about 2-3 minutes per side.'),
  (3, 1, 'Peel the banana and split it lengthwise. Place it in a long dish.'),
  (3, 2, 'Place a scoop of vanilla ice cream between the banana halves at one end, chocolate in the middle, and strawberry at the other end.'),
  (3, 3, 'Sprinkle pineapple chunks over vanilla ice cream and strawberry slices over strawberry ice cream. Drizzle chocolate syrup over chocolate ice cream.'),
  (3, 4, 'Top each scoop of ice cream with whipped cream.'),
  (3, 5, 'Sprinkle chopped nuts over the whipped cream and top with a cherry in the center.'),
  (3, 6, 'Serve immediately and enjoy!'),
  (4, 1, 'Preheat oven to 425 degrees F (220 degrees C).'),
  (4, 2, 'Place one pie crust in a 9-inch pie pan. Set the second crust aside for the top.'),
  (4, 3, 'In a large bowl, mix sliced apples, sugars, flour, cinnamon, nutmeg, and lemon juice. Stir until well coated.'),
  (4, 4, 'Transfer the apple mixture into the pie crust. Dot with pieces of butter.'),
  (4, 5, 'Cover with the second pie crust. Seal the edges and make small slits in the top to release steam.'),
  (4, 6, 'Brush the top crust with beaten egg white and sprinkle with additional sugar.'),
  (4, 7, 'Bake in the preheated oven for 45-50 minutes, until the crust is golden brown and filling is bubbly.'),
  (4, 8, 'Cool on a wire rack before serving.');

--  Ingredients for Classic French Toast (RecipeID = 2)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (2, 'thick-cut bread (brioche or challah works best)', 8, 'slices'),
  (2, 'large eggs', 4, ''),
  (2, 'milk', 1, 'cup(s)'),
  (2, 'vanilla extract', 2, 'teaspoon(s)'),
  (2, 'ground cinnamon', 1, 'teaspoon(s)'),
  (2, 'Butter for frying', '', ''),
  (2, 'Maple syrup and powdered sugar for serving', '', '');

-- Instructions for Classic French Toast,  RecipeID = 2
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (2, 1, 'Prepare the Egg Mixture: In a shallow dish, whisk together the eggs, milk, vanilla extract, and cinnamon.'),
  (2, 2, 'Soak the Bread: Dip each slice of bread into the egg mixture, allowing the bread to soak up some of the mixture.'),
  (2, 3, 'Cook the French Toast: Heat a large skillet or griddle over medium heat and melt a slice of butter. Add the soaked bread slices and cook until golden brown on both sides, about 2-3 minutes per side.'),
  (2, 4, 'Serve: Serve hot with maple syrup and a dusting of powdered sugar.');


--  Ingredients for All-American Banana Split (RecipeID = 3)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (3, 'banana', 1, 'piece(s)'),
  (3, 'vanilla ice cream', 1, 'scoop'),
  (3, 'chocolate ice cream', 1, 'scoop'),
  (3, 'strawberry ice cream', 1, 'scoop'),
  (3, 'pineapple chunks', 2, 'tablespoon(s)'),
  (3, 'strawberry slices', 2, 'tablespoon(s)'),
  (3, 'chocolate syrup', 2, 'tablespoon(s)'),
  (3, 'whipped cream', '', 'as needed'),
  (3, 'chopped nuts', '', 'as needed'),
  (3, 'cherry', 1, 'piece(s)');


-- Instructions for All-American Banana Split,  RecipeID = 3
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (3, 1, 'Peel the banana and split it lengthwise. Place it in a long dish.'),
  (3, 2, 'Place a scoop of vanilla ice cream between the banana halves at one end, chocolate in the middle, and strawberry at the other end.'),
  (3, 3, 'Sprinkle pineapple chunks over vanilla ice cream and strawberry slices over strawberry ice cream. Drizzle chocolate syrup over chocolate ice cream.'),
  (3, 4, 'Top each scoop of ice cream with whipped cream.'),
  (3, 5, 'Sprinkle chopped nuts over the whipped cream and top with a cherry in the center.'),
  (3, 6, 'Serve immediately and enjoy!');


--  Ingredients for Golden Apple Pie (RecipeID = 4)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (4, 'pie crusts', 2, 'piece(s)'),
  (4, 'apples, peeled, cored and sliced', 6, 'medium'),
  (4, 'sugar', 0.75, 'cup(s)'),
  (4, 'brown sugar', 0.25, 'cup(s)'),
  (4, 'all-purpose flour', 2, 'tablespoon(s)'),
  (4, 'ground cinnamon', 1, 'teaspoon'),
  (4, 'ground nutmeg', 0.5, 'teaspoon'),
  (4, 'lemon juice', 1, 'tablespoon'),
  (4, 'butter', 2, 'tablespoon(s)'),
  (4, 'egg white', 1, 'large'),
  (4, 'additional sugar for topping', '', 'as needed');

-- Instructions for Golden Apple Pie,  RecipeID = 4
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (4, 1, 'Preheat oven to 425 degrees F (220 degrees C).'),
  (4, 2, 'Place one pie crust in a 9-inch pie pan. Set the second crust aside for the top.'),
  (4, 3, 'In a large bowl, mix sliced apples, sugars, flour, cinnamon, nutmeg, and lemon juice. Stir until well coated.'),
  (4, 4, 'Transfer the apple mixture into the pie crust. Dot with pieces of butter.'),
  (4, 5, 'Cover with the second pie crust. Seal the edges and make small slits in the top to release steam.'),
  (4, 6, 'Brush the top crust with beaten egg white and sprinkle with additional sugar.'),
  (4, 7, 'Bake in the preheated oven for 45-50 minutes, until the crust is golden brown and filling is bubbly.'),
  (4, 8, 'Cool on a wire rack before serving.');

--  Ingredients for Baked Penne with Roasted Vegetables (RecipeID = 5)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (5, 'penne pasta', 1, 'pound'),
  (5, 'zucchini, sliced into 1-inch thick rounds', 1, 'cup(s)'),
  (5, 'red bell pepper, cut into 1-inch wide strips', 1, 'piece(s)'),
  (5, 'yellow bell pepper, cut into 1-inch wide strips', 1, 'piece(s)'),
  (5, 'cremini mushrooms, quartered', 1, 'cup(s)'),
  (5, 'yellow onion, thinly sliced', 1, 'piece(s)'),
  (5, 'extra-virgin olive oil', 0.25, 'cup(s)'),
  (5, 'salt', 'to taste', ''),
  (5, 'freshly ground black pepper', 'to taste', ''),
  (5, 'marinara sauce', 3, 'cups'),
  (5, 'mozzarella cheese, shredded', 1, 'cup(s)'),
  (5, 'fontina cheese, shredded', 1, 'cup(s)'),
  (5, 'Parmesan cheese, grated', 0.25, 'cup(s)'),
  (5, 'smoked mozzarella, shredded', 0.25, 'cup(s)'),
  (5, 'Italian parsley, chopped', 0.25, 'cup(s)'),
  (5, 'basil leaves, chopped', 0.25, 'cup(s)');

-- Instructions for Baked Penne with Roasted Vegetables,  RecipeID = 5
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (5, 1, 'Preheat oven to 450 degrees F (230 degrees C).'),
  (5, 2, 'Toss zucchini, bell peppers, mushrooms, and onion with olive oil, salt, and pepper. Place on a baking sheet and roast for 15 minutes, or until tender.'),
  (5, 3, 'Boil the penne until al dente. Drain and set aside.'),
  (5, 4, 'In a large bowl, combine the roasted vegetables with the cooked penne, marinara sauce, and all the cheeses except for the smoked mozzarella. Mix until well combined.'),
  (5, 5, 'Transfer the mixture to a greased 9x13 inch baking dish. Top with smoked mozzarella.'),
  (5, 6, 'Bake for 25 minutes in the preheated oven, or until bubbly and golden on top.'),
  (5, 7, 'Garnish with chopped parsley and basil before serving.');

--  Ingredients for Greek Salad (RecipeID = 6)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (6, 'cucumber', 1, ''),
  (6, 'tomatoes', 3, ''),
  (6, 'red onion', 1, ''),
  (6, 'feta cheese', 200, 'gram(s)'),
  (6, 'black olives, pitted', 100, 'gram(s)'),
  (6, 'olive oil', 2, 'tablespoon(s)'),
  (6, 'red wine vinegar', 1, 'tablespoon(s)'),
  (6, 'Salt and pepper to taste', '', ''),
  (6, 'Dried oregano', '', '');

-- Instructions for Greek Salad,  RecipeID = 6
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (6, 1, 'Combine the Ingredients: In a large bowl, combine cucumber, tomatoes, red onion, feta cheese, and olives.'),
  (6, 2, 'Dress the Salad: Drizzle olive oil and red wine vinegar over the salad. Add salt, pepper, and a generous sprinkle of dried oregano.'),
  (6, 3, 'Toss and Serve: Toss everything together gently to mix. Serve chilled or at room temperature.');

--  Ingredients for Chicken Curry (RecipeID = 7)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (7, 'chicken breast, cubed', 500, 'gram(s)'),
  (7, 'onion, finely chopped', 1, ''),
  (7, 'cloves garlic, minced', 2, ''),
  (7, 'ginger, minced', 1, 'tablespoon(s)'),
  (7, 'curry powder', 2, 'tablespoon(s)'),
  (7, 'coconut milk', 1, 'can (400 ml)'),
  (7, 'diced tomatoes', 1, 'can (400 grams)'),
  (7, 'turmeric', 1, 'teaspoon(s)'),
  (7, 'cumin', 1, 'teaspoon(s)'),
  (7, 'vegetable oil', 2, 'tablespoon(s)'),
  (7, 'Salt to taste', '', ''),
  (7, 'Fresh coriander, chopped for garnish', '', '');

-- Instructions for Chicken Curry,  RecipeID = 7
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (7, 1, 'Sauté Aromatics: Heat oil in a large skillet over medium heat. Add onions, garlic, and ginger, sautéing until onions are translucent.'),
  (7, 2, 'Add Spices and Chicken: Stir in curry powder, turmeric, and cumin. Add chicken and cook until its no longer pink on the outside.'),
  (7, 3, 'Simmer with Coconut Milk and Tomatoes: Pour in coconut milk and diced tomatoes. Bring to a simmer and cook uncovered for about 20 minutes, or until the chicken is cooked through and the sauce has thickened.'),
  (7, 4, 'Garnish and Serve: Season with salt to taste. Garnish with fresh coriander and serve with rice or naan bread.');


--  Ingredients for Spaghetti Carbonara RecipeID = 8
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (8, 'spaghetti', 400, 'gram(s)'),
  (8, 'large eggs', 2, 'piece(s)'),
  (8, 'Parmesan cheese, grated', 100, 'gram(s)'),
  (8, 'pancetta or guanciale, cubed', 200, 'gram(s)'),
  (8, 'garlic cloves', 2, 'piece(s)'),
  (8, 'Salt and freshly ground black pepper', 'to taste', ''),
  (8, 'Fresh parsley, chopped for garnish', 'optional', '');

--  Ingredients for Tortellini Caprese Salad (RecipeID = 9)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (9, 'cheese tortellini', 1, 'pound'),
  (9, 'cherry tomatoes, halved', 2, 'cup(s)'),
  (9, 'fresh mozzarella balls (bocconcini), halved', 1, 'cup(s)'),
  (9, 'fresh basil leaves, chopped', 0.25, 'cup(s)'),
  (9, 'extra-virgin olive oil', 3, 'tablespoon(s)'),
  (9, 'balsamic vinegar', 1, 'tablespoon'),
  (9, 'salt', 'to taste', ''),
  (9, 'freshly ground black pepper', 'to taste', '');


-- Instructions for Tortellini Caprese Salad,  RecipeID = 9
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (9, 1, 'Cook the tortellini according to package instructions until al dente. Drain and rinse under cold water to cool.'),
  (9, 2, 'In a large bowl, combine the cooled tortellini, cherry tomatoes, mozzarella balls, and fresh basil.'),
  (9, 3, 'Drizzle with olive oil and balsamic vinegar. Add salt and pepper to taste.'),
  (9, 4, 'Toss gently to combine all the ingredients.'),
  (9, 5, 'Chill in the refrigerator for at least 30 minutes before serving to allow flavors to meld.'),
  (9, 6, 'Serve chilled, garnished with extra basil if desired.');

--  Ingredients for Caprese Salad Sub Sandwich (RecipeID = 10)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (10, 'sub rolls', 4, 'piece(s)'),
  (10, 'fresh mozzarella cheese, sliced', 1, 'pound'),
  (10, 'ripe tomatoes, sliced', 2, 'large'),
  (10, 'fresh basil leaves', 1, 'cup(s)'),
  (10, 'balsamic glaze', 4, 'tablespoon(s)'),
  (10, 'extra-virgin olive oil', 2, 'tablespoon(s)'),
  (10, 'salt', 'to taste', ''),
  (10, 'freshly ground black pepper', 'to taste', '');


-- Instructions for Caprese Salad Sub Sandwich,  RecipeID = 10
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (10, 1, 'Slice the sub rolls open but not all the way through, leaving one edge intact.'),
  (10, 2, 'Layer the slices of mozzarella and tomato inside each sub roll.'),
  (10, 3, 'Tuck several basil leaves in between the layers of cheese and tomato.'),
  (10, 4, 'Drizzle each sandwich with olive oil and balsamic glaze.'),
  (10, 5, 'Season with salt and freshly ground pepper to taste.'),
  (10, 6, 'Serve immediately or wrap tightly for a picnic or to-go meal.');

--  Ingredients for Nai Wong Bao (RecipeID = 11)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (11, 'all-purpose flour', 3, 'cups'),
  (11, 'sugar', 0.25, 'cups'),
  (11, 'baking powder', 1, 'tablespoon'),
  (11, 'instant yeast', 1, 'tablespoon'),
  (11, 'milk', 1, 'cup'),
  (11, 'water', 0.5, 'cup'),
  (11, 'vegetable oil', 2, 'tablespoon'),
  (11, 'egg yolk', 1, 'large'),
  (11, 'vanilla extract', 1, 'teaspoon'),
  -- Custard filling ingredients
  (11, 'egg yolks', 3, 'large'),
  (11, 'sugar', 0.5, 'cups'),
  (11, 'cornstarch', 3, 'tablespoon'),
  (11, 'milk', 1, 'cup'),
  (11, 'vanilla extract', 1, 'teaspoon'),
  (11, 'unsalted butter', 2, 'tablespoon');

-- Instructions for Nai Wong Bao,  RecipeID = 11
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (11, 1, 'Start by making the custard filling. Whisk egg yolks with sugar until smooth. Stir in cornstarch, then gradually whisk in milk until smooth.'),
  (11, 2, 'Cook the mixture in a saucepan over low heat, stirring constantly until it thickens. Remove from heat, stir in vanilla extract and butter until smooth. Allow to cool and thicken in the fridge.'),
  (11, 3, 'For the dough, mix flour, sugar, baking powder, and yeast in a large bowl. Heat the milk and water until warm, then stir in vegetable oil and vanilla. Add to the dry ingredients to form a dough. Knead until smooth and let it rise until doubled in size.'),
  (11, 4, 'Punch down the dough and divide into 10 pieces. Flatten each piece and place a spoonful of custard in the center. Gather the edges to seal and place seam-side down on a baking sheet.'),
  (11, 5, 'Cover and let rise for another 30 minutes. Brush with beaten egg yolk before baking.'),
  (11, 6, 'Bake in a preheated oven at 350 degrees F (175 degrees C) for 15-20 minutes, or until golden brown.'),
  (11, 7, 'Serve warm.');

--  Ingredients for Tomato and Egg with Rice (RecipeID = 12)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (12, 'eggs', 4, 'piece(s)'),
  (12, 'large tomatoes, chopped', 4, 'piece(s)'),
  (12, 'vegetable oil', 2, 'tablespoon(s)'),
  (12, 'sugar', 1, 'teaspoon'),
  (12, 'salt', 0.5, 'teaspoon'),
  (12, 'green onions, chopped', 2, 'tablespoon(s)'),
  (12, 'cooked white rice', 4, 'cup(s)');


-- Instructions for Tomato and Egg with Rice,  RecipeID = 12
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (12, 1, 'Beat the eggs lightly and season with a pinch of salt.'),
  (12, 2, 'Heat oil in a skillet over medium heat. Pour in the eggs and scramble until just set. Remove eggs from skillet and set aside.'),
  (12, 3, 'In the same skillet, add chopped tomatoes. Cook over medium heat until the tomatoes are soft and release their juices. Add sugar and 0.5 teaspoon of salt to enhance the flavor.'),
  (12, 4, 'Return the scrambled eggs to the skillet with the tomatoes. Stir gently to mix.'),
  (12, 5, 'Serve the tomato and egg mixture hot over cooked white rice, garnished with chopped green onions.');

--  Ingredients for Tanghulu (RecipeID = 13)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (13, 'strawberries', 30, 'piece(s)'),
  (13, 'granulated sugar', 2, 'cup(s)'),
  (13, 'water', 1, 'cup(s)');

-- Instructions for Tanghulu,  RecipeID = 13
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (13, 1, 'Wash the strawberries and dry them thoroughly. Leave the stems on.'),
  (13, 2, 'Skewer the strawberries onto bamboo sticks, with about 5-6 strawberries per stick.'),
  (13, 3, 'In a small saucepan, combine sugar and water. Heat over medium-high heat until the sugar dissolves and the mixture starts boiling. Continue boiling until the syrup reaches 300°F (150°C), which is the hard crack stage.'),
  (13, 4, 'Remove the syrup from heat. Quickly dip each strawberry skewer into the hot syrup, coating the strawberries completely.'),
  (13, 5, 'Hold the skewer aloft for a few seconds to allow the sugar to harden, then place it on parchment paper to cool completely.'),
  (13, 6, 'Serve the tanghulu once the candy shell has hardened.');

--  Ingredients for Huevos Rancheros (RecipeID = 14)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (14, 'corn tortillas', 4, 'piece(s)'),
  (14, 'eggs', 4, 'piece(s)'),
  (14, 'vegetable oil', 2, 'tablespoon(s)'),
  (14, 'canned black beans, rinsed and drained', 1, 'cup(s)'),
  (14, 'salsa', 0.5, 'cup(s)'),
  (14, 'avocado, sliced', 1, 'piece(s)'),
  (14, 'fresh cilantro, chopped', 2, 'tablespoon(s)'),
  (14, 'queso fresco, crumbled', 0.25, 'cup(s)'),
  (14, 'lime wedges', 2, 'piece(s)');

-- Instructions for Huevos Rancheros,  RecipeID = 14
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (14, 1, 'Heat the vegetable oil in a frying pan over medium heat. Fry the tortillas one at a time until crisp. Set aside on paper towels to drain.'),
  (14, 2, 'In the same pan, fry the eggs to desired doneness.'),
  (14, 3, 'Warm the black beans in a small pot or microwave and season with a bit of salt.'),
  (14, 4, 'To assemble, place two tortillas on each plate. Spread a layer of black beans on each tortilla, then top each with a fried egg.'),
  (14, 5, 'Spoon salsa over the eggs and garnish with avocado slices, cilantro, queso fresco, and lime wedges.'),
  (14, 6, 'Serve immediately.');

--  Ingredients for Chicken and Tomato Pozole (RecipeID = 15)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (15, 'boneless chicken breast', 1.5, 'pound(s)'),
  (15, 'canned hominy, drained', 2, 'cup(s)'),
  (15, 'chicken broth', 6, 'cup(s)'),
  (15, 'canned diced tomatoes', 1, 'can'),
  (15, 'garlic, minced', 2, 'clove(s)'),
  (15, 'onion, chopped', 1, 'piece(s)'),
  (15, 'dried oregano', 1, 'teaspoon'),
  (15, 'cumin', 0.5, 'teaspoon'),
  (15, 'chili powder', 1, 'teaspoon'),
  (15, 'salt', 'to taste', ''),
  (15, 'fresh cilantro, chopped', 0.25, 'cup(s)'),
  (15, 'lime wedges', 4, 'piece(s)'),
  (15, 'radishes, thinly sliced', 0.5, 'cup(s)'),
  (15, 'avocado, diced', 1, 'piece(s)');

-- Instructions for Chicken and Tomato Pozole,  RecipeID = 15
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (15, 1, 'In a large pot, combine chicken broth, chicken breast, garlic, and onion. Bring to a boil, then reduce heat and simmer until the chicken is cooked through, about 20 minutes.'),
  (15, 2, 'Remove the chicken from the broth, let cool slightly, and shred it. Return the shredded chicken to the pot.'),
  (15, 3, 'Add hominy, diced tomatoes, oregano, cumin, and chili powder to the pot. Season with salt and bring the mixture to a simmer. Cook for an additional 20 minutes to blend the flavors.'),
  (15, 4, 'Serve the pozole in bowls, topped with chopped cilantro, lime wedges, sliced radishes, and diced avocado.');

--  Ingredients for Menemen (RecipeID = 16)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (16, 'eggs', 6, 'piece(s)'),
  (16, 'ripe tomatoes, finely chopped', 4, 'piece(s)'),
  (16, 'green bell peppers, chopped', 2, 'piece(s)'),
  (16, 'onion, finely chopped', 1, 'piece(s)'),
  (16, 'olive oil', 2, 'tablespoon(s)'),
  (16, 'salt', 'to taste', ''),
  (16, 'black pepper', 'to taste', ''),
  (16, 'paprika', 1, 'teaspoon'),
  (16, 'fresh parsley, chopped', 2, 'tablespoon(s)');

-- Instructions for Menemen,  RecipeID = 16
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (16, 1, 'Heat the olive oil in a large skillet over medium heat. Add the onions and green peppers, sautéing until softened, about 5 minutes.'),
  (16, 2, 'Stir in the chopped tomatoes and cook until the mixture is thickened, about 10 minutes. Season with salt, pepper, and paprika.'),
  (16, 3, 'Crack the eggs directly into the skillet. Let them sit for a moment before gently stirring to combine with the tomato and pepper mixture. Continue to cook until the eggs are softly set.'),
  (16, 4, 'Sprinkle with fresh parsley and serve hot, straight from the skillet.');


--  Ingredients for Full Irish Breakfast (RecipeID = 17)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (17, 'Irish sausages', 4, 'piece(s)'),
  (17, 'back bacon rashers', 4, 'piece(s)'),
  (17, 'black pudding slices', 2, 'piece(s)'),
  (17, 'white pudding slices', 2, 'piece(s)'),
  (17, 'eggs', 4, 'piece(s)'),
  (17, 'tomatoes, halved', 2, 'piece(s)'),
  (17, 'mushrooms', 1, 'cup(s)'),
  (17, 'soda bread or Irish brown bread', 4, 'slice(s)'),
  (17, 'butter', 'as needed', ''),
  (17, 'vegetable oil', 2, 'tablespoon(s)'),
  (17, 'baked beans', 1, 'cup(s)');

-- Instructions for Full Irish Breakfast,  RecipeID = 17
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (17, 1, 'Heat the oil in a large frying pan over medium heat. Cook the sausages and bacon until they are browned and cooked through, turning occasionally.'),
  (17, 2, 'Add the black and white pudding slices to the pan, and cook until crisped on both sides.'),
  (17, 3, 'In the same pan, fry the eggs to your liking. Simultaneously, grill the tomato halves and sauté the mushrooms until tender.'),
  (17, 4, 'Warm the baked beans in a small pot or in the microwave.'),
  (17, 5, 'Toast the bread and butter generously.'),
  (17, 6, 'Arrange the sausages, bacon, black and white pudding, eggs, tomatoes, mushrooms, and baked beans on a plate. Serve with buttered toast on the side.');

--  Ingredients for Mediterranean Tuna Wrap (RecipeID = 18)
INSERT INTO Ingredients (RecipeID, Ingredient, Quantity, Unit)
VALUES
  (18, 'canned tuna in olive oil, drained', 2, 'can(s)'),
  (18, 'whole wheat tortillas', 4, 'piece(s)'),
  (18, 'mixed salad greens', 2, 'cup(s)'),
  (18, 'cherry tomatoes, halved', 1, 'cup(s)'),
  (18, 'red onion, thinly sliced', 0.5, 'piece(s)'),
  (18, 'cucumber, sliced', 1, 'piece(s)'),
  (18, 'Kalamata olives, pitted and halved', 0.25, 'cup(s)'),
  (18, 'feta cheese, crumbled', 0.5, 'cup(s)'),
  (18, 'lemon juice', 2, 'tablespoon(s)'),
  (18, 'extra virgin olive oil', 1, 'tablespoon'),
  (18, 'salt and pepper', 'to taste', '');

-- Instructions for Mediterranean Tuna Wrap,  RecipeID = 18
INSERT INTO Instructions (RecipeID, StepNumber, Instruction)
VALUES
  (18, 1, 'In a mixing bowl, combine the drained tuna, cherry tomatoes, red onion, cucumber, olives, and feta cheese. Drizzle with lemon juice and olive oil. Season with salt and pepper to taste. Mix gently.'),
  (18, 2, 'Lay out the tortillas and distribute the mixed salad greens evenly among them.'),
  (18, 3, 'Spoon the tuna mixture onto the center of each tortilla over the greens.'),
  (18, 4, 'Roll up the tortillas tightly, tucking in the ends, to form a wrap.'),
  (18, 5, 'Serve immediately, or wrap in foil to take on the go.');

-- Create user account
CREATE USER IF NOT EXISTS 'sdc480_user'@'%' IDENTIFIED VIA mysql_native_password USING PASSWORD('sdc480_pw');
-- Grant privileges
GRANT ALL PRIVILEGES ON RecipeDatabase.* TO 'sdc480_user'@'%';
