// app.js
import { Router } from './router.js';

// Import Views
import { SplashView } from './pages/Splash.js';
import { HomeView } from './pages/Home.js';
import { SearchView } from './pages/Search.js';
import { RecipeDetailView } from './pages/RecipeDetail.js';
import { SavedView } from './pages/Saved.js';
import { BonusesView } from './pages/Bonuses.js';
import { ProfileView } from './pages/Profile.js';

// Define Routes
const routes = {
    'splash': SplashView,
    'home': HomeView,
    'search': SearchView,
    'recipe': RecipeDetailView,
    'saved': SavedView,
    'bonuses': BonusesView,
    'profile': ProfileView
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    // If the user has never seen the splash screen in this session, show it.
    // Otherwise go to home. We can just use the router default.
    const defaultRoute = 'splash';
    const appRouter = new Router(routes, defaultRoute);
});
