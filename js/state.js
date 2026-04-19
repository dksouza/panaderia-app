// state.js
// Basic localStorage wrapper for state persistence

const STATE_KEY = 'cleansweets_state';

const defaultState = {
    favorites: [],
    shoppingList: [],
    weeklyPlan: {
        monday: null, tuesday: null, wednesday: null, 
        thursday: null, friday: null, saturday: null, sunday: null
    },
    hasSeenSplash: false
};

class StateManager {
    constructor() {
        this.state = this.loadState();
        this.listeners = [];
    }

    loadState() {
        const stored = localStorage.getItem(STATE_KEY);
        return stored ? { ...defaultState, ...JSON.parse(stored) } : { ...defaultState };
    }

    saveState() {
        localStorage.setItem(STATE_KEY, JSON.stringify(this.state));
        this.notifyListeners();
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    notifyListeners() {
        this.listeners.forEach(fn => fn(this.state));
    }

    // Favorites
    toggleFavorite(recipeId) {
        if (this.state.favorites.includes(recipeId)) {
            this.state.favorites = this.state.favorites.filter(id => id !== recipeId);
        } else {
            this.state.favorites.push(recipeId);
        }
        this.saveState();
        return this.state.favorites.includes(recipeId);
    }

    isFavorite(recipeId) {
        return this.state.favorites.includes(recipeId);
    }

    getFavorites() {
        return this.state.favorites;
    }

    // Shopping List
    toggleIngredient(ingredientId, name, amount) {
        const existing = this.state.shoppingList.find(i => i.id === ingredientId);
        if (existing) {
            this.state.shoppingList = this.state.shoppingList.filter(i => i.id !== ingredientId);
        } else {
            this.state.shoppingList.push({ id: ingredientId, name, amount, checked: false });
        }
        this.saveState();
    }

    toggleCheckIngredient(ingredientId) {
        const item = this.state.shoppingList.find(i => i.id === ingredientId);
        if (item) {
            item.checked = !item.checked;
            this.saveState();
        }
    }

    clearShoppingList() {
        this.state.shoppingList = [];
        this.saveState();
    }

    getShoppingList() {
        return this.state.shoppingList;
    }
}

export const state = new StateManager();

// Simple Toast Notification Logic
export function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        if(container.contains(toast)) {
            container.removeChild(toast);
        }
    }, 3000);
}
