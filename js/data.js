// data.js

export const categories = [
    "Cookies", "Cakes", "Desserts", "Breads", "Quick Recipes", "Low-Carb Comfort Classics"
];

// Generic background image for all recipes
export const genericBgImage = "https://images.unsplash.com/photo-1556910638-68641d46222e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"; // A nice generic dark culinary/bakery texture background

export const recipes = [
    // === EXISTING COOKIES ===
    {
        id: "chocolate-chip-cookies",
        title: "Chocolate Chip Cookies",
        category: "Cookies",
        tags: ["Cookies", "Low-Carb Comfort Classics"],
        description: "Classic soft and chewy chocolate chip cookies.",
        ingredients: [
            { id: "i1", name: "Almond flour", amount: "1 cup" },
            { id: "i2", name: "Butter (melted)", amount: "1/4 cup" },
            { id: "i3", name: "Erythritol", amount: "1/3 cup" },
            { id: "i4", name: "Egg", amount: "1" },
            { id: "i5", name: "Sugar-free chocolate chips", amount: "1/2 cup" }
        ],
        instructions: [
            "Mix all ingredients in a bowl.",
            "Shape the dough into cookies.",
            "Bake at 180°C (350°F) for 10–12 minutes."
        ],
        time: { prep: 5, cook: 12, total: 17 },
        servings: 12,
        difficulty: "Easy",
        img: genericBgImage,
        featured: true
    },
    {
        id: "peanut-butter-cookies",
        title: "Peanut Butter Cookies",
        category: "Cookies",
        tags: ["Cookies", "Quick Recipes"],
        description: "Rich, nutty, and completely flourless.",
        ingredients: [
            { id: "i6", name: "Peanut butter", amount: "1 cup" },
            { id: "i7", name: "Egg", amount: "1" },
            { id: "i8", name: "Sweetener", amount: "1/3 cup" }
        ],
        instructions: [
            "Mix all ingredients together.",
            "Roll into balls and flatten with a fork.",
            "Bake for 10 minutes at 350°F."
        ],
        time: { prep: 5, cook: 10, total: 15 },
        servings: 10,
        difficulty: "Easy",
        img: genericBgImage,
        featured: true
    },
    {
        id: "double-chocolate-cookies",
        title: "Double Chocolate Cookies",
        category: "Cookies",
        tags: ["Cookies", "Desserts"],
        description: "For the ultimate chocolate craving.",
        ingredients: [
            { id: "i9", name: "Almond flour", amount: "1 cup" },
            { id: "i10", name: "Cocoa powder", amount: "2 tbsp" },
            { id: "i11", name: "Sweetener", amount: "1/3 cup" },
            { id: "i12", name: "Egg", amount: "1" },
            { id: "i13", name: "Chocolate chips", amount: "1/3 cup" }
        ],
        instructions: [
            "Mix all ingredients together until a dough forms.",
            "Shape into cookies.",
            "Bake for 12 minutes at 350°F."
        ],
        time: { prep: 5, cook: 12, total: 17 },
        servings: 10,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "coconut-cookies",
        title: "Coconut Cookies",
        category: "Cookies",
        tags: ["Cookies"],
        description: "Simple, light, and perfectly toasted coconut flavor.",
        ingredients: [
            { id: "i14", name: "Shredded coconut", amount: "1 cup" },
            { id: "i15", name: "Eggs", amount: "2" },
            { id: "i16", name: "Sweetener", amount: "1/4 cup" }
        ],
        instructions: [
            "Mix all ingredients together.",
            "Shape the dough into small cookies.",
            "Bake for 12–15 minutes until golden."
        ],
        time: { prep: 5, cook: 15, total: 20 },
        servings: 8,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "oat-free-soft-cookies",
        title: "Oat-Free Soft Cookies",
        category: "Cookies",
        tags: ["Cookies", "Quick Recipes"],
        description: "Soft and comforting texture without the grains.",
        ingredients: [
            { id: "i17", name: "Almond flour", amount: "1 cup" },
            { id: "i18", name: "Butter", amount: "1 tbsp" },
            { id: "i19", name: "Egg", amount: "1" },
            { id: "i20", name: "Sweetener", amount: "1/3 cup" }
        ],
        instructions: [
            "Mix all ingredients to form a smooth dough.",
            "Portion and shape into cookies.",
            "Bake for 10–12 minutes."
        ],
        time: { prep: 5, cook: 12, total: 17 },
        servings: 10,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "lemon-cookies",
        title: "Lemon Cookies",
        category: "Cookies",
        tags: ["Cookies", "Desserts"],
        description: "Bright and citrusy afternoon treat.",
        ingredients: [
            { id: "i21", name: "Almond flour", amount: "1 cup" },
            { id: "i22", name: "Lemon zest", amount: "from 1 lemon" },
            { id: "i23", name: "Egg", amount: "1" },
            { id: "i24", name: "Sweetener", amount: "1/4 cup" }
        ],
        instructions: [
            "Mix all ingredients.",
            "Shape into cookies.",
            "Bake for 10–12 minutes."
        ],
        time: { prep: 5, cook: 12, total: 17 },
        servings: 10,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "cinnamon-cookies",
        title: "Cinnamon Cookies",
        category: "Cookies",
        tags: ["Cookies"],
        description: "Warmly spiced and perfectly sweet.",
        ingredients: [
            { id: "i25", name: "Almond flour", amount: "1 cup" },
            { id: "i26", name: "Cinnamon", amount: "1 tsp" },
            { id: "i27", name: "Egg", amount: "1" },
            { id: "i28", name: "Sweetener", amount: "1/3 cup" }
        ],
        instructions: [
            "Mix all ingredients to form a dough.",
            "Shape into cookies.",
            "Bake for 12 minutes."
        ],
        time: { prep: 5, cook: 12, total: 17 },
        servings: 10,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "vanilla-butter-cookies",
        title: "Vanilla Butter Cookies",
        category: "Cookies",
        tags: ["Cookies"],
        description: "Simple, delicate, and melt-in-your-mouth delicious.",
        ingredients: [
            { id: "i29", name: "Almond flour", amount: "1 cup" },
            { id: "i30", name: "Butter", amount: "1/4 cup" },
            { id: "i31", name: "Egg", amount: "1" },
            { id: "i32", name: "Sweetener", amount: "1/3 cup" }
        ],
        instructions: [
            "Mix all ingredients together.",
            "Shape into cookies.",
            "Bake for 10 minutes."
        ],
        time: { prep: 5, cook: 10, total: 15 },
        servings: 10,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "almond-crunch-cookies",
        title: "Almond Crunch Cookies",
        category: "Cookies",
        tags: ["Cookies"],
        description: "Packed with crunchy almond pieces.",
        ingredients: [
            { id: "i33", name: "Almond flour", amount: "1 cup" },
            { id: "i34", name: "Chopped almonds", amount: "1/4 cup" },
            { id: "i35", name: "Egg", amount: "1" },
            { id: "i36", name: "Sweetener", amount: "1/3 cup" }
        ],
        instructions: [
            "Mix all ingredients.",
            "Shape into cookies.",
            "Bake for 12 minutes."
        ],
        time: { prep: 5, cook: 12, total: 17 },
        servings: 10,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "chocolate-crinkle-cookies",
        title: "Chocolate Crinkle Cookies",
        category: "Cookies",
        tags: ["Cookies"],
        description: "Beautiful cracked exterior and fudgy center.",
        ingredients: [
            { id: "i37", name: "Almond flour", amount: "1 cup" },
            { id: "i38", name: "Cocoa powder", amount: "2 tbsp" },
            { id: "i39", name: "Egg", amount: "1" },
            { id: "i40", name: "Sweetener", amount: "1/3 cup" }
        ],
        instructions: [
            "Mix the dough ingredients.",
            "Shape into balls.",
            "Bake for 12 minutes."
        ],
        time: { prep: 10, cook: 12, total: 22 },
        servings: 10,
        difficulty: "Easy",
        img: genericBgImage
    },

    // === EXISTING CAKES ===
    {
        id: "chocolate-cake",
        title: "Chocolate Cake",
        category: "Cakes",
        tags: ["Cakes", "Desserts"],
        description: "A rich and moist chocolate cake experience.",
        ingredients: [
            { id: "i41", name: "Almond flour", amount: "1 cup" },
            { id: "i42", name: "Cocoa powder", amount: "2 tbsp" },
            { id: "i43", name: "Eggs", amount: "2" },
            { id: "i44", name: "Sweetener", amount: "1/3 cup" }
        ],
        instructions: [
            "Mix all ingredients until a smooth batter forms.",
            "Pour into a prepared cake pan.",
            "Bake for 25 minutes at 350°F."
        ],
        time: { prep: 10, cook: 25, total: 35 },
        servings: 8,
        difficulty: "Medium",
        featured: true,
        img: genericBgImage
    },
    {
        id: "vanilla-cake",
        title: "Vanilla Cake",
        category: "Cakes",
        tags: ["Cakes", "Desserts"],
        description: "A tender vanilla crumb perfect for any occasion.",
        ingredients: [
            { id: "i45", name: "Almond flour", amount: "1 cup" },
            { id: "i46", name: "Eggs", amount: "2" },
            { id: "i47", name: "Sweetener", amount: "1/3 cup" },
            { id: "i48", name: "Vanilla extract", amount: "1 tsp" }
        ],
        instructions: [
            "Mix all ingredients together.",
            "Pour into a small cake pan.",
            "Bake for 25 minutes."
        ],
        time: { prep: 10, cook: 25, total: 35 },
        servings: 8,
        difficulty: "Medium",
        img: genericBgImage
    },

    // === EXISTING DESSERTS ===
    {
        id: "fudgy-chocolate-brownies",
        title: "Fudgy Chocolate Brownies",
        category: "Desserts",
        tags: ["Desserts"],
        description: "Intensely chocolatey and perfectly fudgy.",
        ingredients: [
            { id: "i49", name: "Almond flour", amount: "1 cup" },
            { id: "i50", name: "Cocoa powder", amount: "1/3 cup" },
            { id: "i51", name: "Butter (melted)", amount: "1/2 cup" },
            { id: "i52", name: "Erythritol", amount: "1/2 cup" },
            { id: "i53", name: "Eggs", amount: "2" },
            { id: "i54", name: "Sugar-free chocolate chips", amount: "1/2 cup" }
        ],
        instructions: [
            "Preheat oven to 180°C (350°F).",
            "Mix melted butter and sweetener until smooth.",
            "Add eggs and mix well.",
            "Stir in almond flour and cocoa powder.",
            "Fold in chocolate chips.",
            "Pour into lined pan.",
            "Bake for 20–25 minutes until center is slightly soft.",
            "Let cool before cutting."
        ],
        time: { prep: 10, cook: 25, total: 35 },
        servings: 12,
        difficulty: "Easy",
        img: genericBgImage,
        featured: true
    },
    {
        id: "creamy-cheesecake",
        title: "Creamy Cheesecake",
        category: "Desserts",
        tags: ["Desserts", "Cakes"],
        description: "Rich, creamy, and satisfying without the sugar crash.",
        ingredients: [
            { id: "i55", name: "Cream cheese", amount: "250g" },
            { id: "i56", name: "Eggs", amount: "2" },
            { id: "i57", name: "Sweetener", amount: "1/2 cup" },
            { id: "i58", name: "Vanilla extract", amount: "1 tsp" },
            { id: "i59", name: "Heavy cream", amount: "1/2 cup" }
        ],
        instructions: [
            "Preheat oven to 170°C (340°F).",
            "Beat cream cheese until smooth.",
            "Add sweetener and mix.",
            "Add eggs one at a time.",
            "Mix in vanilla and cream.",
            "Pour into pan.",
            "Bake 35–40 minutes.",
            "Chill for 4 hours before serving."
        ],
        time: { prep: 15, cook: 40, total: 295 },
        servings: 8,
        difficulty: "Medium",
        img: genericBgImage
    },
    {
        id: "soft-chocolate-chip-cookies",
        title: "Soft Chocolate Chip Cookies",
        category: "Desserts",
        tags: ["Desserts", "Cookies"],
        description: "A soft dessert variation of the classic cookie.",
        ingredients: [
            { id: "i60", name: "Almond flour", amount: "1 cup" },
            { id: "i61", name: "Butter", amount: "1/4 cup" },
            { id: "i62", name: "Sweetener", amount: "1/3 cup" },
            { id: "i63", name: "Egg", amount: "1" },
            { id: "i64", name: "Sugar-free chocolate chips", amount: "1/2 cup" }
        ],
        instructions: [
            "Preheat oven to 180°C (350°F).",
            "Mix butter and sweetener.",
            "Add egg and combine.",
            "Add flour and mix.",
            "Fold in chocolate chips.",
            "Shape cookies.",
            "Bake 10–12 minutes until edges are golden."
        ],
        time: { prep: 10, cook: 12, total: 22 },
        servings: 10,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "chocolate-mousse",
        title: "Chocolate Mousse",
        category: "Desserts",
        tags: ["Desserts"],
        description: "Light, airy, and deeply chocolatey.",
        ingredients: [
            { id: "i65", name: "Heavy cream", amount: "1 cup" },
            { id: "i66", name: "Cocoa powder", amount: "2 tbsp" },
            { id: "i67", name: "Sweetener", amount: "1/4 cup" },
            { id: "i68", name: "Vanilla", amount: "1 tsp" }
        ],
        instructions: [
            "Whip cream until soft peaks form.",
            "Add cocoa and sweetener.",
            "Mix gently until smooth.",
            "Add vanilla.",
            "Chill for 1 hour before serving."
        ],
        time: { prep: 10, cook: 0, total: 70 },
        servings: 4,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "strawberry-cream-dessert",
        title: "Strawberry Cream Dessert",
        category: "Desserts",
        tags: ["Desserts"],
        description: "Fresh, fruity, and creamy perfection.",
        ingredients: [
            { id: "i69", name: "Fresh strawberries", amount: "1 cup" },
            { id: "i70", name: "Heavy cream", amount: "1 cup" },
            { id: "i71", name: "Sweetener", amount: "1/4 cup" }
        ],
        instructions: [
            "Blend strawberries.",
            "Whip cream with sweetener.",
            "Fold strawberry puree into cream.",
            "Chill 1 hour.",
            "Serve cold."
        ],
        time: { prep: 10, cook: 0, total: 70 },
        servings: 4,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "lemon-bars",
        title: "Lemon Bars",
        category: "Desserts",
        tags: ["Desserts"],
        description: "A zesty and satisfying dessert classic.",
        ingredients: [
            { id: "i72", name: "Almond flour", amount: "1 cup" },
            { id: "i73", name: "Butter", amount: "1/4 cup" },
            { id: "i74", name: "Sweetener", amount: "1/3 cup" },
            { id: "i75", name: "Eggs", amount: "2" },
            { id: "i76", name: "Lemon juice", amount: "1/4 cup" }
        ],
        instructions: [
            "Preheat oven to 180°C (350°F).",
            "Mix almond flour and butter for crust.",
            "Press into pan and bake 10 minutes.",
            "Mix eggs, sweetener, lemon juice.",
            "Pour over crust.",
            "Bake 15–20 minutes.",
            "Cool and cut into bars."
        ],
        time: { prep: 15, cook: 30, total: 45 },
        servings: 9,
        difficulty: "Medium",
        img: genericBgImage
    },
    {
        id: "chocolate-fudge",
        title: "Chocolate Fudge",
        category: "Desserts",
        tags: ["Desserts"],
        description: "Decadent fudge bites without the sugar load.",
        ingredients: [
            { id: "i77", name: "Butter", amount: "1/2 cup" },
            { id: "i78", name: "Cocoa powder", amount: "1/3 cup" },
            { id: "i79", name: "Sweetener", amount: "1/3 cup" },
            { id: "i80", name: "Vanilla", amount: "1/2 tsp" }
        ],
        instructions: [
            "Melt butter.",
            "Mix in cocoa and sweetener.",
            "Add vanilla.",
            "Pour into mold.",
            "Refrigerate 2 hours.",
            "Cut into squares."
        ],
        time: { prep: 5, cook: 0, total: 125 },
        servings: 16,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "peanut-butter-cups",
        title: "Peanut Butter Cups",
        category: "Desserts",
        tags: ["Desserts"],
        description: "The classic candy re-invented for mindful eating.",
        ingredients: [
            { id: "i81", name: "Peanut butter", amount: "1/2 cup" },
            { id: "i82", name: "Melted sugar-free chocolate", amount: "1/2 cup" }
        ],
        instructions: [
            "Add chocolate layer to molds.",
            "Add peanut butter.",
            "Cover with chocolate.",
            "Freeze 30 minutes.",
            "Remove and serve."
        ],
        time: { prep: 10, cook: 0, total: 40 },
        servings: 6,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "banana-pudding",
        title: "Banana Pudding",
        category: "Desserts",
        tags: ["Desserts"],
        description: "Creamy comfort food, naturally sweetened.",
        ingredients: [
            { id: "i83", name: "Ripe banana", amount: "1" },
            { id: "i84", name: "Heavy cream", amount: "1 cup" },
            { id: "i85", name: "Sweetener", amount: "1/4 cup" }
        ],
        instructions: [
            "Mash banana.",
            "Whip cream with sweetener.",
            "Fold banana into cream.",
            "Chill 1 hour.",
            "Serve cold."
        ],
        time: { prep: 10, cook: 0, total: 70 },
        servings: 4,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "vanilla-mug-cake",
        title: "Vanilla Mug Cake",
        category: "Desserts",
        tags: ["Desserts", "Quick Recipes"],
        description: "A 1-Minute Dessert for immediate cravings.",
        ingredients: [
            { id: "i86", name: "Almond flour", amount: "3 tbsp" },
            { id: "i87", name: "Egg", amount: "1" },
            { id: "i88", name: "Sweetener", amount: "2 tbsp" },
            { id: "i89", name: "Butter", amount: "1 tbsp" },
            { id: "i90", name: "Vanilla", amount: "1 tsp" }
        ],
        instructions: [
            "Mix all ingredients in a mug.",
            "Microwave for 60–90 seconds.",
            "Let cool slightly.",
            "Serve warm."
        ],
        time: { prep: 2, cook: 2, total: 4 },
        servings: 1,
        difficulty: "Easy",
        img: genericBgImage
    },

    // === NEW BREADS ===
    {
        id: "soft-sandwich-bread",
        title: "Soft Sandwich Bread",
        category: "Breads",
        tags: ["Breads", "Family Favorites"],
        description: "Soft and sliceable daily bread.",
        ingredients: [
            { id: "b1", name: "Almond flour", amount: "2 cups" },
            { id: "b2", name: "Eggs", amount: "3" },
            { id: "b3", name: "Melted butter", amount: "1/4 cup" },
            { id: "b4", name: "Baking powder", amount: "1 tsp" },
            { id: "b5", name: "Salt", amount: "1/2 tsp" }
        ],
        instructions: [
            "Preheat oven to 180°C (350°F).",
            "In a bowl, mix eggs and melted butter.",
            "Add almond flour, baking powder, and salt.",
            "Mix until smooth.",
            "Pour into a loaf pan.",
            "Bake for 30–35 minutes until golden.",
            "Let cool before slicing."
        ],
        time: { prep: 10, cook: 35, total: 45 },
        servings: 10,
        difficulty: "Medium",
        img: genericBgImage,
        featured: true
    },
    {
        id: "dinner-rolls",
        title: "Dinner Rolls",
        category: "Breads",
        tags: ["Breads"],
        description: "Warm, fluffy accompaniment to any meal.",
        ingredients: [
            { id: "b6", name: "Almond flour", amount: "2 cups" },
            { id: "b7", name: "Eggs", amount: "2" },
            { id: "b8", name: "Butter", amount: "1/4 cup" },
            { id: "b9", name: "Baking powder", amount: "1 tsp" },
            { id: "b10", name: "Salt", amount: "pinch" }
        ],
        instructions: [
            "Preheat oven to 180°C.",
            "Mix all ingredients.",
            "Shape into small balls.",
            "Place on baking tray.",
            "Bake 20–25 minutes until golden."
        ],
        time: { prep: 10, cook: 25, total: 35 },
        servings: 6,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "burger-buns",
        title: "Burger Buns",
        category: "Breads",
        tags: ["Breads", "Family Favorites"],
        description: "Sturdy and soft for the perfect burger.",
        ingredients: [
            { id: "b11", name: "Almond flour", amount: "2 cups" },
            { id: "b12", name: "Eggs", amount: "3" },
            { id: "b13", name: "Butter", amount: "1/4 cup" },
            { id: "b14", name: "Psyllium husk", amount: "1 tbsp" },
            { id: "b15", name: "Baking powder", amount: "1 tsp" }
        ],
        instructions: [
            "Preheat oven to 180°C.",
            "Mix all ingredients into dough.",
            "Shape into bun forms.",
            "Bake 25 minutes.",
            "Let cool before slicing."
        ],
        time: { prep: 10, cook: 25, total: 35 },
        servings: 4,
        difficulty: "Medium",
        img: genericBgImage
    },
    {
        id: "pizza-dough",
        title: "Pizza Dough (Real Crust Style)",
        category: "Breads",
        tags: ["Breads", "Low-Carb Comfort Classics"],
        description: "Crispy edges, sturdy base.",
        ingredients: [
            { id: "b16", name: "Almond flour", amount: "1 1/2 cups" },
            { id: "b17", name: "Mozzarella (shredded)", amount: "1/2 cup" },
            { id: "b18", name: "Egg", amount: "1" },
            { id: "b19", name: "Baking powder", amount: "1 tsp" }
        ],
        instructions: [
            "Melt mozzarella.",
            "Mix with egg and almond flour.",
            "Form dough.",
            "Flatten into pizza shape.",
            "Pre-bake 10 minutes.",
            "Add toppings and bake 10 more minutes."
        ],
        time: { prep: 10, cook: 20, total: 30 },
        servings: 4,
        difficulty: "Medium",
        img: genericBgImage
    },
    {
        id: "soft-tortillas",
        title: "Soft Tortillas",
        category: "Breads",
        tags: ["Breads"],
        description: "Foldable and soft for wraps and tacos.",
        ingredients: [
            { id: "b20", name: "Almond flour", amount: "1 cup" },
            { id: "b21", name: "Egg", amount: "1" },
            { id: "b22", name: "Olive oil", amount: "1 tbsp" },
            { id: "b23", name: "Salt", amount: "pinch" }
        ],
        instructions: [
            "Mix all ingredients.",
            "Divide into small balls.",
            "Roll thin.",
            "Cook on pan 1–2 min each side."
        ],
        time: { prep: 10, cook: 10, total: 20 },
        servings: 4,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "simple-croissants",
        title: "Simple Croissants (Quick Version)",
        category: "Breads",
        tags: ["Breads"],
        description: "Quick, flaky crescent rolls.",
        ingredients: [
            { id: "b24", name: "Almond flour", amount: "2 cups" },
            { id: "b25", name: "Eggs", amount: "2" },
            { id: "b26", name: "Butter", amount: "1/4 cup" },
            { id: "b27", name: "Baking powder", amount: "1 tsp" }
        ],
        instructions: [
            "Preheat oven to 180°C.",
            "Mix ingredients into dough.",
            "Shape into croissant form.",
            "Bake 20–25 minutes until golden."
        ],
        time: { prep: 15, cook: 25, total: 40 },
        servings: 6,
        difficulty: "Medium",
        img: genericBgImage
    },
    {
        id: "bagels",
        title: "Bagels",
        category: "Breads",
        tags: ["Breads"],
        description: "Chewy, dense, and perfect sliced.",
        ingredients: [
            { id: "b28", name: "Almond flour", amount: "2 cups" },
            { id: "b29", name: "Eggs", amount: "2" },
            { id: "b30", name: "Mozzarella", amount: "1/2 cup" },
            { id: "b31", name: "Baking powder", amount: "1 tsp" }
        ],
        instructions: [
            "Melt mozzarella.",
            "Mix with eggs and flour.",
            "Shape into bagels.",
            "Bake 25 minutes until firm."
        ],
        time: { prep: 15, cook: 25, total: 40 },
        servings: 6,
        difficulty: "Medium",
        img: genericBgImage
    },
    {
        id: "fluffy-pancakes",
        title: "Fluffy Pancakes",
        category: "Breads",
        tags: ["Breads", "Quick Recipes"],
        description: "A breakfast staple.",
        ingredients: [
            { id: "b32", name: "Almond flour", amount: "1 cup" },
            { id: "b33", name: "Eggs", amount: "2" },
            { id: "b34", name: "Milk (or almond milk)", amount: "1/4 cup" },
            { id: "b35", name: "Baking powder", amount: "1 tsp" }
        ],
        instructions: [
            "Mix all ingredients.",
            "Heat pan with butter.",
            "Pour batter.",
            "Cook until bubbles form.",
            "Flip and cook other side."
        ],
        time: { prep: 5, cook: 10, total: 15 },
        servings: 4,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "crispy-waffles",
        title: "Crispy Waffles",
        category: "Breads",
        tags: ["Breads"],
        description: "Crunchy exterior, fluffy interior.",
        ingredients: [
            { id: "b36", name: "Almond flour", amount: "1 cup" },
            { id: "b37", name: "Eggs", amount: "2" },
            { id: "b38", name: "Milk", amount: "1/4 cup" },
            { id: "b39", name: "Butter", amount: "1 tbsp" },
            { id: "b40", name: "Baking powder", amount: "1 tsp" }
        ],
        instructions: [
            "Mix ingredients.",
            "Heat waffle maker.",
            "Pour batter.",
            "Cook until crispy."
        ],
        time: { prep: 5, cook: 10, total: 15 },
        servings: 3,
        difficulty: "Easy",
        img: genericBgImage
    },
    {
        id: "flatbread",
        title: "Flatbread",
        category: "Breads",
        tags: ["Breads", "Quick Recipes"],
        description: "Ideal for quick sandwiches or dipping.",
        ingredients: [
            { id: "b41", name: "Almond flour", amount: "1 cup" },
            { id: "b42", name: "Egg", amount: "1" },
            { id: "b43", name: "Olive oil", amount: "1 tbsp" },
            { id: "b44", name: "Salt", amount: "pinch" }
        ],
        instructions: [
            "Mix all ingredients.",
            "Roll thin dough.",
            "Cook on hot pan.",
            "Flip after 1–2 minutes.",
            "Serve warm."
        ],
        time: { prep: 5, cook: 5, total: 10 },
        servings: 2,
        difficulty: "Easy",
        img: genericBgImage
    }
];

export const bonuses = [
    {
        id: "golden-tea",
        title: "Golden Tea Recipe Guide",
        description: "A soothing, anti-inflammatory beverage to enjoy after meals.",
        content: "This golden tea blends turmeric, ginger, and cinnamon to aid digestion and help manage post-prandial glucose curves. Boil 1 cup of almond milk, whisk in 1 tsp turmeric, 1/4 tsp ginger, a pinch of black pepper, and sweetener to taste. Sip slowly."
    },
    {
        id: "blacklist",
        title: "Medication & Supplement Blacklist",
        description: "Educational reference for ingredients that may interact with certain metabolic medications.",
        content: "Warning: Always consult your physician. Grapefruit extract, excessive cinnamon supplements, and certain herbal diuretics can heavily impact the efficacy of metformin and other glucose-lowering agents..."
    },
    {
        id: "metabolic-recipes",
        title: "Metabolic Mastery Collection",
        description: "5 bonus recipes specifically designed around high-satiety, craving-crushing ingredients.",
        content: "1. Avocado Cacao Mousse\\n2. Chia Seed Berry Pudding\\n3. Macadamia Nut Fat Bombs\\n..."
    }
];
