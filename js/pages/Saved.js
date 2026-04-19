// Saved.js
import { TopHeader, BottomNav, RecipeCardLarge, EmptyState } from '../components/UI.js';
import { recipes } from '../data.js';
import { state } from '../state.js';

export const SavedView = () => {
    return `
        <div class="page-view active" style="padding-bottom: 90px; height: 100vh; display: flex; flex-direction: column;">
            ${TopHeader("Saved Favorites")}

            <div class="container-pad" id="savedList" style="flex: 1; padding-top: var(--spacing-lg); overflow-y: auto;">
                <!-- Content injected here -->
            </div>

            ${BottomNav()}
        </div>
    `;
};

SavedView.afterRender = () => {
    const listContainer = document.getElementById('savedList');
    const favIds = state.getFavorites();
    
    if (favIds.length === 0) {
        listContainer.innerHTML = EmptyState(
            "ph-heart-break", 
            "No saved recipes yet", 
            "Tap the heart icon on any recipe to save it for later.",
            "Browse Recipes",
            "#search"
        );
    } else {
        const favRecipes = favIds.map(id => recipes.find(r => r.id === id)).filter(Boolean);
        listContainer.innerHTML = favRecipes.map(r => RecipeCardLarge(r)).join('');
    }
};
