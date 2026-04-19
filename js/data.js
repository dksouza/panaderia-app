// data.js

export const categories = [
    "Cookies", "Cakes", "Desserts", "Quick Recipes", "Low-Carb Comfort Classics"
];

export const recipes = [
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
        bloodSugarNotes: "Almond flour helps keep glucose levels stable.",
        chefTips: "Let them cool completely on the baking sheet to firm up.",
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        img: "https://images.unsplash.com/photo-1590080826444-a6b1897c5ae4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        img: "https://images.unsplash.com/photo-1621236378699-8597faf6a176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        img: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
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
        img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
        img: "https://images.unsplash.com/photo-1464349153735-7db50ed83eb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
