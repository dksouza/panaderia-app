// UI.js
// Common UI Components

export const TopHeader = (title = "CleanSweets", showBack = false) => `
    <header class="top-header">
        ${showBack ? 
            `<button onclick="window.history.back()" class="btn-icon"><i class="ph ph-caret-left"></i></button>` : 
            `<div style="width: 24px"></div>` // Spacer to maintain center alignment
        }
        <div class="header-brand">${title}</div>
        <button class="btn-icon" onclick="window.location.hash='search'"><i class="ph ph-magnifying-glass"></i></button>
    </header>
`;

export const BottomNav = () => `
    <nav class="bottom-nav">
        <a href="#home" class="nav-item">
            <i class="ph ph-house"></i>
            <span>Home</span>
        </a>
        <a href="#search" class="nav-item">
            <i class="ph ph-book-open"></i>
            <span>Recipes</span>
        </a>
        <a href="#bonuses" class="nav-item">
            <i class="ph ph-gift"></i>
            <span>Bonuses</span>
        </a>
        <a href="#saved" class="nav-item">
            <i class="ph ph-heart"></i>
            <span>Saved</span>
        </a>
        <a href="#profile" class="nav-item">
            <i class="ph ph-user"></i>
            <span>Profile</span>
        </a>
    </nav>
`;

export const RecipeCardLarge = (recipe) => `
    <div class="recipe-card-large" onclick="window.location.hash='recipe/${recipe.id}'">
        <img src="${recipe.img}" alt="${recipe.title}" class="recipe-img-l" loading="lazy">
        <div class="recipe-info-l">
            <h3 class="recipe-title-l">${recipe.title}</h3>
            <div class="recipe-meta">
                <span class="meta-item"><i class="ph ph-clock"></i> ${recipe.time?.total || 20}m</span>
                <span class="meta-item"><i class="ph ph-chart-bar"></i> ${recipe.difficulty}</span>
                <span class="meta-item" style="color: var(--color-accent-sage)"><i class="ph ph-drop"></i> Low Spike</span>
            </div>
        </div>
    </div>
`;

export const RecipeCardHorizontal = (recipe) => `
    <div class="recipe-card-h" onclick="window.location.hash='recipe/${recipe.id}'">
        <img src="${recipe.img}" alt="${recipe.title}" class="recipe-img-h" loading="lazy">
        <div class="recipe-info-h">
            <h4 class="recipe-title-h">${recipe.title}</h4>
            <div class="recipe-meta">
                <span class="meta-item"><i class="ph ph-clock"></i> ${recipe.time?.total || 20}m</span>
            </div>
        </div>
    </div>
`;

export const CategoryChips = (categories, activeCategory = null) => `
    <div class="category-chips">
        <button class="chip ${!activeCategory ? 'active' : ''}" onclick="window.dispatchEvent(new CustomEvent('filter-category', {detail: null}))">All</button>
        ${categories.map(cat => `
            <button class="chip ${activeCategory === cat ? 'active' : ''}" onclick="window.dispatchEvent(new CustomEvent('filter-category', {detail: '${cat}'}))">
                ${cat}
            </button>
        `).join('')}
    </div>
`;

export const EmptyState = (icon, title, description, actionText, actionHash) => `
    <div class="flex-col items-center justify-center container-pad" style="text-align: center; margin-top: var(--spacing-xxl); color: var(--color-text-secondary);">
        <i class="ph ${icon}" style="font-size: 4rem; margin-bottom: var(--spacing-md); color: var(--color-border);"></i>
        <h3 style="font-size: 1.25rem; font-weight: 600; color: var(--color-text-primary); margin-bottom: var(--spacing-xs);">${title}</h3>
        <p style="font-size: 0.9rem; margin-bottom: var(--spacing-lg); max-width: 250px;">${description}</p>
        ${actionText ? `<a href="${actionHash}" class="btn btn-primary">${actionText}</a>` : ''}
    </div>
`;
