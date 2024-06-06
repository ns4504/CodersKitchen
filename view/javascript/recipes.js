const originalRecipe = {
    recipes: [
        {
            recipeName: "Chicken Parmesan",
            mealType: "Dinner",
            originalServings: 4,
            caloriesPerOriginalServing: 500,
            cuisine: "Italian",
            ingredients: [
                {
                    ingredient: "boneless, skinless chicken breasts",
                    quantity: 4,
                    unit: "piece(s)"
                },
                {
                    ingredient: "salt and freshly ground black pepper",
                    quantity: "to taste",
                    unit: ""
                },
                { ingredient: "flour", quantity: 2, unit: "cup(s)" },
                { ingredient: "eggs", quantity: 2, unit: "large" },
                { ingredient: "breadcrumbs", quantity: 2, unit: "cup(s)" },
                { ingredient: "vegetable oil", quantity: 1, unit: "cup(s)" },
                { ingredient: "marinara sauce", quantity: 2, unit: "cup(s)" },
                { ingredient: "mozzarella cheese", quantity: 1, unit: "cup(s)" },
                { ingredient: "Parmesan cheese", quantity: 0.5, unit: "cup(s)" },
                { ingredient: "fresh basil", quantity: 0.25, unit: "cup(s)" },
                { ingredient: "cooked spaghetti", quantity: "as needed", unit: "" }
            ],
            instructions: [
                "Preheat your oven to 400 degrees F (200 degrees C).",
                "Season chicken breasts with salt and pepper. Dredge each piece in flour and tap off excess, then dip in beaten eggs, and finally coat with breadcrumbs.",
                "Heat oil in a large skillet over medium heat. Once hot, add chicken and fry until golden brown on both sides (about 2-3 minutes per side). Remove from heat and drain on paper towels.",
                "Place fried chicken in a baking dish. Spoon some marinara sauce over each piece, then sprinkle with mozzarella and Parmesan cheeses.",
                "Bake in the preheated oven until the cheese is bubbly and browned, about 20 minutes.",
                "Sprinkle with fresh basil and serve over cooked spaghetti."
            ],
            image: "https://media.istockphoto.com/id/523263890/photo/chicken-parmesan-with-spaghetti.jpg?s=612x612&w=0&k=20&c=aa9Zzk-6v31k9pVEv07mPDmiN0heCMyIad_W29C9f30="
        },
        {
            recipeName: "Classic French Toast",
            mealType: "Breakfast",
            originalServings: 4,
            caloriesPerOriginalServing: 300,
            cuisine: "French-American",
            ingredients: [
                {
                    ingredient: "thick-cut bread (brioche or challah works best)",
                    quantity: 8,
                    unit: "slices"
                },
                { ingredient: "large eggs", quantity: 4, unit: "" },
                { ingredient: "milk", quantity: 1, unit: "cup(s)" },
                { ingredient: "vanilla extract", quantity: 2, unit: "teaspoon(s)" },
                { ingredient: "ground cinnamon", quantity: 1, unit: "teaspoon(s)" },
                { ingredient: "Butter for frying", quantity: "", unit: "" },
                {
                    ingredient: "Maple syrup and powdered sugar for serving",
                    quantity: "",
                    unit: ""
                }
            ],
            instructions: [
                "Prepare the Egg Mixture: In a shallow dish, whisk together the eggs, milk, vanilla extract, and cinnamon.",
                "Soak the Bread: Dip each slice of bread into the egg mixture, allowing the bread to soak up some of the mixture.",
                "Cook the French Toast: Heat a large skillet or griddle over medium heat and melt a slice of butter. Add the soaked bread slices and cook until golden brown on both sides, about 2-3 minutes per side.",
                "Serve: Serve hot with maple syrup and a dusting of powdered sugar."
            ],
            image:
                "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTUyNjQ4NzJ8&ixlib=rb-4.0.3&q=85"
        },
        {
            recipeName: "All-American Banana Split",
            mealType: "Dessert",
            originalServings: 1,
            caloriesPerOriginalServing: 850,
            cuisine: "American",
            ingredients: [
                { ingredient: "banana", quantity: 1, unit: "piece(s)" },
                { ingredient: "vanilla ice cream", quantity: 1, unit: "scoop" },
                { ingredient: "chocolate ice cream", quantity: 1, unit: "scoop" },
                { ingredient: "strawberry ice cream", quantity: 1, unit: "scoop" },
                { ingredient: "pineapple chunks", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "strawberry slices", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "chocolate syrup", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "whipped cream", quantity: "as needed", unit: "" },
                { ingredient: "chopped nuts", quantity: "as needed", unit: "" },
                { ingredient: "cherry", quantity: 1, unit: "piece(s)" }
            ],
            instructions: [
                "Peel the banana and split it lengthwise. Place it in a long dish.",
                "Place a scoop of vanilla ice cream between the banana halves at one end, chocolate in the middle, and strawberry at the other end.",
                "Sprinkle pineapple chunks over vanilla ice cream and strawberry slices over strawberry ice cream. Drizzle chocolate syrup over chocolate ice cream.",
                "Top each scoop of ice cream with whipped cream.",
                "Sprinkle chopped nuts over the whipped cream and top with a cherry in the center.",
                "Serve immediately and enjoy!"
            ],
            image: "https://media.istockphoto.com/id/1502397029/photo/banana-split-ice-cream-with-american-flag-top-view.jpg?s=612x612&w=0&k=20&c=pkIFRYRQOlVq0BLu_VrCQmnGRP1wyA0Seq8O5U5hvqQ="
        },
        {
            recipeName: "Golden Apple Pie",
            mealType: "Dessert",
            originalServings: 8,
            caloriesPerOriginalServing: 450,
            cuisine: "American",
            ingredients: [
                { ingredient: "pie crusts", quantity: 2, unit: "piece(s)" },
                {
                    ingredient: "apples, peeled, cored and sliced",
                    quantity: 6,
                    unit: "medium"
                },
                { ingredient: "sugar", quantity: 0.75, unit: "cup(s)" },
                { ingredient: "brown sugar", quantity: 0.25, unit: "cup(s)" },
                { ingredient: "all-purpose flour", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "ground cinnamon", quantity: 1, unit: "teaspoon" },
                { ingredient: "ground nutmeg", quantity: 0.5, unit: "teaspoon" },
                { ingredient: "lemon juice", quantity: 1, unit: "tablespoon" },
                { ingredient: "butter", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "egg white", quantity: 1, unit: "large" },
                {
                    ingredient: "additional sugar for topping",
                    quantity: "as needed",
                    unit: ""
                }
            ],
            instructions: [
                "Preheat oven to 425 degrees F (220 degrees C).",
                "Place one pie crust in a 9-inch pie pan. Set the second crust aside for the top.",
                "In a large bowl, mix sliced apples, sugars, flour, cinnamon, nutmeg, and lemon juice. Stir until well coated.",
                "Transfer the apple mixture into the pie crust. Dot with pieces of butter.",
                "Cover with the second pie crust. Seal the edges and make small slits in the top to release steam.",
                "Brush the top crust with beaten egg white and sprinkle with additional sugar.",
                "Bake in the preheated oven for 45-50 minutes, until the crust is golden brown and filling is bubbly.",
                "Cool on a wire rack before serving."
            ],
            image: "https://media.istockphoto.com/id/450752471/photo/homemade-organic-apple-pie-dessert.jpg?s=612x612&w=0&k=20&c=6mwKTunGfRKFWyB_VUOGqXzcUMtBSCvg6JAQ3At2aWE="
        },
        {
            recipeName: "Baked Penne with Roasted Vegetables",
            mealType: "Dinner",
            originalServings: 6,
            caloriesPerOriginalServing: 350,
            cuisine: "Italian",
            ingredients: [
                { ingredient: "penne pasta", quantity: 1, unit: "pound" },
                {
                    ingredient: "zucchini, sliced into 1-inch thick rounds",
                    quantity: 1,
                    unit: "cup(s)"
                },
                {
                    ingredient: "red bell pepper, cut into 1-inch wide strips",
                    quantity: 1,
                    unit: "piece(s)"
                },
                {
                    ingredient: "yellow bell pepper, cut into 1-inch wide strips",
                    quantity: 1,
                    unit: "piece(s)"
                },
                {
                    ingredient: "cremini mushrooms, quartered",
                    quantity: 1,
                    unit: "cup(s)"
                },
                {
                    ingredient: "yellow onion, thinly sliced",
                    quantity: 1,
                    unit: "piece(s)"
                },
                {
                    ingredient: "extra-virgin olive oil",
                    quantity: 0.25,
                    unit: "cup(s)"
                },
                { ingredient: "salt", quantity: "to taste", unit: "" },
                {
                    ingredient: "freshly ground black pepper",
                    quantity: "to taste",
                    unit: ""
                },
                { ingredient: "marinara sauce", quantity: 3, unit: "cups" },
                {
                    ingredient: "mozzarella cheese, shredded",
                    quantity: 1,
                    unit: "cup(s)"
                },
                { ingredient: "fontina cheese, shredded", quantity: 1, unit: "cup(s)" },
                {
                    ingredient: "Parmesan cheese, grated",
                    quantity: 0.25,
                    unit: "cup(s)"
                },
                {
                    ingredient: "smoked mozzarella, shredded",
                    quantity: 0.25,
                    unit: "cup(s)"
                },
                {
                    ingredient: "Italian parsley, chopped",
                    quantity: 0.25,
                    unit: "cup(s)"
                },
                { ingredient: "basil leaves, chopped", quantity: 0.25, unit: "cup(s)" }
            ],
            instructions: [
                "Preheat oven to 450 degrees F (230 degrees C).",
                "Toss zucchini, bell peppers, mushrooms, and onion with olive oil, salt, and pepper. Place on a baking sheet and roast for 15 minutes, or until tender.",
                "Boil the penne until al dente. Drain and set aside.",
                "In a large bowl, combine the roasted vegetables with the cooked penne, marinara sauce, and all the cheeses except for the smoked mozzarella. Mix until well combined.",
                "Transfer the mixture to a greased 9x13 inch baking dish. Top with smoked mozzarella.",
                "Bake for 25 minutes in the preheated oven, or until bubbly and golden on top.",
                "Garnish with chopped parsley and basil before serving."
            ],
            image: "https://media.istockphoto.com/id/1185235055/photo/penne-alla-vodka%C2%A0is-a-classic-italian-pasta-dish-made-with-penne-in-a-creamy-tomato-and-vodka.jpg?s=612x612&w=0&k=20&c=xeb0Mp7iMxAxJQHTuKsrtO91u3wojPUQDrkRgj9ErHw="
        },
        {
            recipeName: "Greek Salad",
            mealType: "Lunch",
            originalServings: 4,
            caloriesPerOriginalServing: 200,
            cuisine: "Greek",
            ingredients: [
                { ingredient: "cucumber", quantity: 1, unit: "" },
                { ingredient: "tomatoes", quantity: 3, unit: "" },
                { ingredient: "red onion", quantity: 1, unit: "" },
                { ingredient: "feta cheese", quantity: 200, unit: "gram(s)" },
                { ingredient: "black olives, pitted", quantity: 100, unit: "gram(s)" },
                { ingredient: "olive oil", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "red wine vinegar", quantity: 1, unit: "tablespoon(s)" },
                { ingredient: "Salt and pepper to taste", quantity: "", unit: "" },
                { ingredient: "Dried oregano", quantity: "", unit: "" }
            ],
            instructions: [
                "Combine the Ingredients: In a large bowl, combine cucumber, tomatoes, red onion, feta cheese, and olives.",
                "Dress the Salad: Drizzle olive oil and red wine vinegar over the salad. Add salt, pepper, and a generous sprinkle of dried oregano.",
                "Toss and Serve: Toss everything together gently to mix. Serve chilled or at room temperature."
            ],
            image:
                "https://media.istockphoto.com/id/108623209/photo/greek-salad.jpg?s=612x612&w=0&k=20&c=39Laams-kD09H2wyr8gbI4ry1SvFqV6JC3BPTAg5qEU="
        },
        {
            recipeName: "Chicken Curry",
            mealType: "Dinner",
            originalServings: 4,
            caloriesPerOriginalServing: 450,
            cuisine: "Indian",
            ingredients: [
                { ingredient: "chicken breast, cubed", quantity: 500, unit: "gram(s)" },
                { ingredient: "onion, finely chopped", quantity: 1, unit: "" },
                { ingredient: "cloves garlic, minced", quantity: 2, unit: "" },
                { ingredient: "ginger, minced", quantity: 1, unit: "tablespoon(s)" },
                { ingredient: "curry powder", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "coconut milk", quantity: 1, unit: "can (400 ml)" },
                { ingredient: "diced tomatoes", quantity: 1, unit: "can (400 grams)" },
                { ingredient: "turmeric", quantity: 1, unit: "teaspoon(s)" },
                { ingredient: "cumin", quantity: 1, unit: "teaspoon(s)" },
                { ingredient: "vegetable oil", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "Salt to taste", quantity: "", unit: "" },
                {
                    ingredient: "Fresh coriander, chopped for garnish",
                    quantity: "",
                    unit: ""
                }
            ],
            instructions: [
                "Sauté Aromatics: Heat oil in a large skillet over medium heat. Add onions, garlic, and ginger, sautéing until onions are translucent.",
                "Add Spices and Chicken: Stir in curry powder, turmeric, and cumin. Add chicken and cook until it's no longer pink on the outside.",
                "Simmer with Coconut Milk and Tomatoes: Pour in coconut milk and diced tomatoes. Bring to a simmer and cook uncovered for about 20 minutes, or until the chicken is cooked through and the sauce has thickened.",
                "Garnish and Serve: Season with salt to taste. Garnish with fresh coriander and serve with rice or naan bread."
            ],
            image:
                "https://media.istockphoto.com/id/177126541/photo/indian-chicken-jalfrezi-curry.jpg?s=612x612&w=0&k=20&c=lOkmRiBFovpKW5FA9hn0_yXg5HOTx78Can4E3JavpFE="
        },
        {
            recipeName: "Spaghetti Carbonara",
            mealType: "Main Course",
            originalServings: 4,
            caloriesPerOriginalServing: 500,
            cuisine: "Italian",
            ingredients: [
                { ingredient: "spaghetti", quantity: 400, unit: "gram(s)" },
                { ingredient: "large eggs", quantity: 2, unit: "piece(s)" },
                {
                    ingredient: "Parmesan cheese, grated",
                    quantity: 100,
                    unit: "gram(s)"
                },
                {
                    ingredient: "pancetta or guanciale, cubed",
                    quantity: 200,
                    unit: "gram(s)"
                },
                { ingredient: "garlic cloves", quantity: 2, unit: "piece(s)" },
                {
                    ingredient: "Salt and freshly ground black pepper",
                    quantity: "to taste",
                    unit: ""
                },
                {
                    ingredient: "Fresh parsley, chopped for garnish",
                    quantity: "optional",
                    unit: ""
                }
            ],
            instructions: [
                "Bring a large pot of salted water to a boil. Add the spaghetti and cook according to the package instructions until al dente. Reserve about 1 cup of pasta water before draining.",
                "While the pasta is cooking, heat a large skillet over medium heat. Add the pancetta or guanciale and cook until it is crispy and golden, about 3-4 minutes. Add the garlic cloves to the pan for the last minute to infuse the fat with garlic flavor. Remove and discard the garlic.",
                "In a mixing bowl, whisk together the eggs, Parmesan, and a generous amount of black pepper until well combined.",
                "Add the drained pasta to the skillet with the pancetta. Toss well to coat the spaghetti in the fat. Remove the pan from heat to prevent the eggs from scrambling.",
                "Pour the egg and cheese mixture into the pasta, stirring quickly until the eggs thicken but do not scramble. The heat from the pasta will gently cook the eggs to create a creamy sauce. If the sauce is too thick, add some reserved pasta water a little at a time to reach the desired consistency.",
                "Season with salt and pepper to taste. Serve immediately, garnished with extra Parmesan and chopped parsley if desired."
            ],
            image:
                "https://media.istockphoto.com/id/1181456803/photo/creamy-spaghetti-with-mushroom-creamy-pasta-with-mushroom-spaghetti-pasta-and-mushroom.jpg?s=612x612&w=0&k=20&c=-jviTbDHTo0cdcd4UnLstJgI8D7ukDa8w2acQ3o_LnU="
        },
        {
            recipeName: "Tortellini Caprese Salad",
            mealType: "Lunch",
            originalServings: 4,
            caloriesPerOriginalServing: 320,
            cuisine: "Italian",
            ingredients: [
                { ingredient: "cheese tortellini", quantity: 1, unit: "pound" },
                { ingredient: "cherry tomatoes, halved", quantity: 2, unit: "cup(s)" },
                { ingredient: "fresh mozzarella balls (bocconcini), halved", quantity: 1, unit: "cup(s)" },
                { ingredient: "fresh basil leaves, chopped", quantity: 0.25, unit: "cup(s)" },
                { ingredient: "extra-virgin olive oil", quantity: 3, unit: "tablespoon(s)" },
                { ingredient: "balsamic vinegar", quantity: 1, unit: "tablespoon" },
                { ingredient: "salt", quantity: "to taste", unit: "" },
                { ingredient: "freshly ground black pepper", quantity: "to taste", unit: "" }
            ],
            instructions: [
                "Cook the tortellini according to package instructions until al dente. Drain and rinse under cold water to cool.",
                "In a large bowl, combine the cooled tortellini, cherry tomatoes, mozzarella balls, and fresh basil.",
                "Drizzle with olive oil and balsamic vinegar. Add salt and pepper to taste.",
                "Toss gently to combine all the ingredients.",
                "Chill in the refrigerator for at least 30 minutes before serving to allow flavors to meld.",
                "Serve chilled, garnished with extra basil if desired."
            ],
            image: "https://media.istockphoto.com/id/1272765606/photo/delicious-antipasti-tortellini-pasta-salad.jpg?s=612x612&w=0&k=20&c=xWVmRT-QYc-or7hc_QlWSPAnZOU7reRSgg2MUzKHdhA="
        },
        {
            recipeName: "Caprese Salad Sub Sandwich",
            mealType: "Lunch",
            originalServings: 4,
            caloriesPerOriginalServing: 480,
            cuisine: "Italian",
            ingredients: [
                { ingredient: "sub rolls", quantity: 4, unit: "piece(s)" },
                { ingredient: "fresh mozzarella cheese, sliced", quantity: 1, unit: "pound" },
                { ingredient: "ripe tomatoes, sliced", quantity: 2, unit: "large" },
                { ingredient: "fresh basil leaves", quantity: 1, unit: "cup(s)" },
                { ingredient: "balsamic glaze", quantity: 4, unit: "tablespoon(s)" },
                { ingredient: "extra-virgin olive oil", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "salt", quantity: "to taste", unit: "" },
                { ingredient: "freshly ground black pepper", quantity: "to taste", unit: "" }
            ],
            instructions: [
                "Slice the sub rolls open but not all the way through, leaving one edge intact.",
                "Layer the slices of mozzarella and tomato inside each sub roll.",
                "Tuck several basil leaves in between the layers of cheese and tomato.",
                "Drizzle each sandwich with olive oil and balsamic glaze.",
                "Season with salt and freshly ground pepper to taste.",
                "Serve immediately or wrap tightly for a picnic or to-go meal."
            ],
            image: "https://media.istockphoto.com/id/1501072899/photo/close-up-image-of-bakery-shelf-display-batch-of-submarine-roll-sandwiches-row-of-caprese.jpg?s=612x612&w=0&k=20&c=FlaZks02WfhJVVivusKqqjoNoyABu7jamwJMcQLkQCo="
        },
        {
            recipeName: "Nai Wong Bao",
            mealType: "Snack",
            originalServings: 10,
            caloriesPerOriginalServing: 220,
            cuisine: "Chinese",
            ingredients: [
                { ingredient: "all-purpose flour", quantity: 3, unit: "cups" },
                { ingredient: "sugar", quantity: 0.25, unit: "cups" },
                { ingredient: "baking powder", quantity: 1, unit: "tablespoon" },
                { ingredient: "instant yeast", quantity: 1, unit: "tablespoon" },
                { ingredient: "milk", quantity: 1, unit: "cup" },
                { ingredient: "water", quantity: 0.5, unit: "cup" },
                { ingredient: "vegetable oil", quantity: 2, unit: "tablespoon" },
                { ingredient: "egg yolk", quantity: 1, unit: "large" },
                { ingredient: "vanilla extract", quantity: 1, unit: "teaspoon" },
                // Custard filling
                { ingredient: "egg yolks", quantity: 3, unit: "large" },
                { ingredient: "sugar", quantity: 0.5, unit: "cups" },
                { ingredient: "cornstarch", quantity: 3, unit: "tablespoon" },
                { ingredient: "milk", quantity: 1, unit: "cup" },
                { ingredient: "vanilla extract", quantity: 1, unit: "teaspoon" },
                { ingredient: "unsalted butter", quantity: 2, unit: "tablespoon" }
            ],
            instructions: [
                "Start by making the custard filling. Whisk egg yolks with sugar until smooth. Stir in cornstarch, then gradually whisk in milk until smooth.",
                "Cook the mixture in a saucepan over low heat, stirring constantly until it thickens. Remove from heat, stir in vanilla extract and butter until smooth. Allow to cool and thicken in the fridge.",
                "For the dough, mix flour, sugar, baking powder, and yeast in a large bowl. Heat the milk and water until warm, then stir in vegetable oil and vanilla. Add to the dry ingredients to form a dough. Knead until smooth and let it rise until doubled in size.",
                "Punch down the dough and divide into 10 pieces. Flatten each piece and place a spoonful of custard in the center. Gather the edges to seal and place seam-side down on a baking sheet.",
                "Cover and let rise for another 30 minutes. Brush with beaten egg yolk before baking.",
                "Bake in a preheated oven at 350 degrees F (175 degrees C) for 15-20 minutes, or until golden brown.",
                "Serve warm."
            ],
            image: "https://tse3.mm.bing.net/th?id=OIP.Qj6cUDioYlY10PG3uqC0CAHaLH&pid=Api&P=0&h=220"
        },
        {
            recipeName: "Tomato and Egg with Rice",
            mealType: "Dinner",
            originalServings: 4,
            caloriesPerOriginalServing: 350,
            cuisine: "Chinese",
            ingredients: [
                { ingredient: "eggs", quantity: 4, unit: "piece(s)" },
                { ingredient: "large tomatoes, chopped", quantity: 4, unit: "piece(s)" },
                { ingredient: "vegetable oil", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "sugar", quantity: 1, unit: "teaspoon" },
                { ingredient: "salt", quantity: 0.5, unit: "teaspoon" },
                { ingredient: "green onions, chopped", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "cooked white rice", quantity: 4, unit: "cup(s)" }
            ],
            instructions: [
                "Beat the eggs lightly and season with a pinch of salt.",
                "Heat oil in a skillet over medium heat. Pour in the eggs and scramble until just set. Remove eggs from skillet and set aside.",
                "In the same skillet, add chopped tomatoes. Cook over medium heat until the tomatoes are soft and release their juices. Add sugar and 0.5 teaspoon of salt to enhance the flavor.",
                "Return the scrambled eggs to the skillet with the tomatoes. Stir gently to mix.",
                "Serve the tomato and egg mixture hot over cooked white rice, garnished with chopped green onions."
            ],
            image: "https://media.istockphoto.com/id/500386802/photo/close-up-of-homemade-fried-rice-with-tomatoes-and-egg.jpg?s=612x612&w=0&k=20&c=nvgp2jAoaokYkHtK49JGZfnD3LnzCU2S9PvWvwkb-lc="
        },
        {
            recipeName: "Tanghulu",
            mealType: "Snack",
            originalServings: 5,
            caloriesPerOriginalServing: 180,
            cuisine: "Chinese",
            ingredients: [
                { ingredient: "strawberries", quantity: 30, unit: "piece(s)" },
                { ingredient: "granulated sugar", quantity: 2, unit: "cup(s)" },
                { ingredient: "water", quantity: 1, unit: "cup(s)" }
            ],
            instructions: [
                "Wash the strawberries and dry them thoroughly. Leave the stems on.",
                "Skewer the strawberries onto bamboo sticks, with about 5-6 strawberries per stick.",
                "In a small saucepan, combine sugar and water. Heat over medium-high heat until the sugar dissolves and the mixture starts boiling. Continue boiling until the syrup reaches 300°F (150°C), which is the hard crack stage.",
                "Remove the syrup from heat. Quickly dip each strawberry skewer into the hot syrup, coating the strawberries completely.",
                "Hold the skewer aloft for a few seconds to allow the sugar to harden, then place it on parchment paper to cool completely.",
                "Serve the tanghulu once the candy shell has hardened."
            ],
            image: "https://media.istockphoto.com/id/1459613965/photo/sugarcoated-haws-on-a-stick.jpg?s=612x612&w=0&k=20&c=JLtJs6bHZBlmnQfNVtJgypqiTpCxeZcdf4vqSBdngMM="
        },
        {
            recipeName: "Huevos Rancheros",
            mealType: "Breakfast",
            originalServings: 2,
            caloriesPerOriginalServing: 450,
            cuisine: "Mexican",
            ingredients: [
                { ingredient: "corn tortillas", quantity: 4, unit: "piece(s)" },
                { ingredient: "eggs", quantity: 4, unit: "piece(s)" },
                { ingredient: "vegetable oil", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "canned black beans, rinsed and drained", quantity: 1, unit: "cup(s)" },
                { ingredient: "salsa", quantity: 0.5, unit: "cup(s)" },
                { ingredient: "avocado, sliced", quantity: 1, unit: "piece(s)" },
                { ingredient: "fresh cilantro, chopped", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "queso fresco, crumbled", quantity: 0.25, unit: "cup(s)" },
                { ingredient: "lime wedges", quantity: 2, unit: "piece(s)" }
            ],
            instructions: [
                "Heat the vegetable oil in a frying pan over medium heat. Fry the tortillas one at a time until crisp. Set aside on paper towels to drain.",
                "In the same pan, fry the eggs to desired doneness.",
                "Warm the black beans in a small pot or microwave and season with a bit of salt.",
                "To assemble, place two tortillas on each plate. Spread a layer of black beans on each tortilla, then top each with a fried egg.",
                "Spoon salsa over the eggs and garnish with avocado slices, cilantro, queso fresco, and lime wedges.",
                "Serve immediately."
            ],
            image: "https://media.istockphoto.com/id/115728416/photo/huevos-rancheros.jpg?s=612x612&w=0&k=20&c=TB9vkxnquuS8iq6PZCXhnGjs76ptc_SSpp3TYXGAc8Y="
        },
        {
            recipeName: "Chicken and Tomato Pozole",
            mealType: "Dinner",
            originalServings: 6,
            caloriesPerOriginalServing: 300,
            cuisine: "Mexican",
            ingredients: [
                { ingredient: "boneless chicken breast", quantity: 1.5, unit: "pound(s)" },
                { ingredient: "canned hominy, drained", quantity: 2, unit: "cup(s)" },
                { ingredient: "chicken broth", quantity: 6, unit: "cup(s)" },
                { ingredient: "canned diced tomatoes", quantity: 1, unit: "can" },
                { ingredient: "garlic, minced", quantity: 2, unit: "clove(s)" },
                { ingredient: "onion, chopped", quantity: 1, unit: "piece(s)" },
                { ingredient: "dried oregano", quantity: 1, unit: "teaspoon" },
                { ingredient: "cumin", quantity: 0.5, unit: "teaspoon" },
                { ingredient: "chili powder", quantity: 1, unit: "teaspoon" },
                { ingredient: "salt", quantity: "to taste", unit: "" },
                { ingredient: "fresh cilantro, chopped", quantity: 0.25, unit: "cup(s)" },
                { ingredient: "lime wedges", quantity: 4, unit: "piece(s)" },
                { ingredient: "radishes, thinly sliced", quantity: 0.5, unit: "cup(s)" },
                { ingredient: "avocado, diced", quantity: 1, unit: "piece(s)" }
            ],
            instructions: [
                "In a large pot, combine chicken broth, chicken breast, garlic, and onion. Bring to a boil, then reduce heat and simmer until the chicken is cooked through, about 20 minutes.",
                "Remove the chicken from the broth, let cool slightly, and shred it. Return the shredded chicken to the pot.",
                "Add hominy, diced tomatoes, oregano, cumin, and chili powder to the pot. Season with salt and bring the mixture to a simmer. Cook for an additional 20 minutes to blend the flavors.",
                "Serve the pozole in bowls, topped with chopped cilantro, lime wedges, sliced radishes, and diced avocado."
            ],
            image: "https://media.istockphoto.com/id/1265238562/photo/mexican-pozole-soup.jpg?s=612x612&w=0&k=20&c=7yQD24B3NSxVvwe7Ew365wmCEJChId8MeihoOZMkGtY="
        },
        {
            recipeName: "Menemen",
            mealType: "Breakfast",
            originalServings: 4,
            caloriesPerOriginalServing: 250,
            cuisine: "Turkish",
            ingredients: [
                { ingredient: "eggs", quantity: 6, unit: "piece(s)" },
                { ingredient: "ripe tomatoes, finely chopped", quantity: 4, unit: "piece(s)" },
                { ingredient: "green bell peppers, chopped", quantity: 2, unit: "piece(s)" },
                { ingredient: "onion, finely chopped", quantity: 1, unit: "piece(s)" },
                { ingredient: "olive oil", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "salt", quantity: "to taste", unit: "" },
                { ingredient: "black pepper", quantity: "to taste", unit: "" },
                { ingredient: "paprika", quantity: 1, unit: "teaspoon" },
                { ingredient: "fresh parsley, chopped", quantity: 2, unit: "tablespoon(s)" }
            ],
            instructions: [
                "Heat the olive oil in a large skillet over medium heat. Add the onions and green peppers, sautéing until softened, about 5 minutes.",
                "Stir in the chopped tomatoes and cook until the mixture is thickened, about 10 minutes. Season with salt, pepper, and paprika.",
                "Crack the eggs directly into the skillet. Let them sit for a moment before gently stirring to combine with the tomato and pepper mixture. Continue to cook until the eggs are softly set.",
                "Sprinkle with fresh parsley and serve hot, straight from the skillet."
            ],
            image: "https://media.istockphoto.com/id/1316063803/photo/traditional-turkish-dish-mememen-in-a-cast-iron-frying-pan-on-a-wooden-table.jpg?s=612x612&w=0&k=20&c=pwCUqKithvOIurtHN0dYiNngfh2oyUypn5bvckmdqiI="
        },
        {
            recipeName: "Full Irish Breakfast",
            mealType: "Breakfast",
            originalServings: 2,
            caloriesPerOriginalServing: 900,
            cuisine: "Irish",
            ingredients: [
                { ingredient: "Irish sausages", quantity: 4, unit: "piece(s)" },
                { ingredient: "back bacon rashers", quantity: 4, unit: "piece(s)" },
                { ingredient: "black pudding slices", quantity: 2, unit: "piece(s)" },
                { ingredient: "white pudding slices", quantity: 2, unit: "piece(s)" },
                { ingredient: "eggs", quantity: 4, unit: "piece(s)" },
                { ingredient: "tomatoes, halved", quantity: 2, unit: "piece(s)" },
                { ingredient: "mushrooms", quantity: 1, unit: "cup(s)" },
                { ingredient: "soda bread or Irish brown bread", quantity: 4, unit: "slice(s)" },
                { ingredient: "butter", quantity: "as needed", unit: "" },
                { ingredient: "vegetable oil", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "baked beans", quantity: 1, unit: "cup(s)" }
            ],
            instructions: [
                "Heat the oil in a large frying pan over medium heat. Cook the sausages and bacon until they are browned and cooked through, turning occasionally.",
                "Add the black and white pudding slices to the pan, and cook until crisped on both sides.",
                "In the same pan, fry the eggs to your liking. Simultaneously, grill the tomato halves and sauté the mushrooms until tender.",
                "Warm the baked beans in a small pot or in the microwave.",
                "Toast the bread and butter generously.",
                "Arrange the sausages, bacon, black and white pudding, eggs, tomatoes, mushrooms, and baked beans on a plate. Serve with buttered toast on the side."
            ],
            image: "https://media.istockphoto.com/id/959874292/photo/full-english-or-irish-breakfast-on-wooden-table-nutritious-and-healthy-morning-meal.jpg?s=612x612&w=0&k=20&c=hBJLLDCC2OyhMaxhAy8cP2f1yoWCiKlxh1fb1WK3QHk="
        },
        {
            recipeName: "Mediterranean Tuna Wrap",
            mealType: "Lunch",
            originalServings: 4,
            caloriesPerOriginalServing: 300,
            cuisine: "Mediterranean",
            ingredients: [
                { ingredient: "canned tuna in olive oil, drained", quantity: 2, unit: "can(s)" },
                { ingredient: "whole wheat tortillas", quantity: 4, unit: "piece(s)" },
                { ingredient: "mixed salad greens", quantity: 2, unit: "cup(s)" },
                { ingredient: "cherry tomatoes, halved", quantity: 1, unit: "cup(s)" },
                { ingredient: "red onion, thinly sliced", quantity: 0.5, unit: "piece(s)" },
                { ingredient: "cucumber, sliced", quantity: 1, unit: "piece(s)" },
                { ingredient: "Kalamata olives, pitted and halved", quantity: 0.25, unit: "cup(s)" },
                { ingredient: "feta cheese, crumbled", quantity: 0.5, unit: "cup(s)" },
                { ingredient: "lemon juice", quantity: 2, unit: "tablespoon(s)" },
                { ingredient: "extra virgin olive oil", quantity: 1, unit: "tablespoon" },
                { ingredient: "salt and pepper", quantity: "to taste", unit: "" }
            ],
            instructions: [
                "In a mixing bowl, combine the drained tuna, cherry tomatoes, red onion, cucumber, olives, and feta cheese. Drizzle with lemon juice and olive oil. Season with salt and pepper to taste. Mix gently.",
                "Lay out the tortillas and distribute the mixed salad greens evenly among them.",
                "Spoon the tuna mixture onto the center of each tortilla over the greens.",
                "Roll up the tortillas tightly, tucking in the ends, to form a wrap.",
                "Serve immediately, or wrap in foil to take on the go."
            ],
            image: "https://media.istockphoto.com/id/1163893310/photo/tortilla-with-added-ink-cuttlefish-wraps-with-chicken-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=VwCRXtPVrVxQtIpGoCIefupoqNIexUWAlsu4zrcvtxM="
        },
    ]
};