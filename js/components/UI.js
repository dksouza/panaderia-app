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
        <div style="position: relative; width: 100%; height: 220px; background: url('${recipe.img}') center/cover;">
            <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(74, 59, 50, 0.9) 0%, rgba(44, 43, 41, 0.7) 100%); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: white; padding: 20px;">
                <span style="text-transform: uppercase; font-size: 0.75rem; letter-spacing: 1px; color: var(--color-accent-gold); margin-bottom: 8px;">${recipe.category}</span>
                <h3 style="font-size: 1.5rem; font-family: var(--font-heading); font-weight: 600; line-height: 1.2;">${recipe.title}</h3>
            </div>
        </div>
        <div class="recipe-info-l">
            <div class="recipe-meta" style="justify-content: space-between;">
                <span class="meta-item"><i class="ph ph-clock"></i> ${recipe.time?.total || 20}m</span>
                <span class="meta-item"><i class="ph ph-chart-bar"></i> ${recipe.difficulty}</span>
                <span class="meta-item" style="color: var(--color-accent-sage)"><i class="ph ph-drop"></i> Low Spike</span>
            </div>
        </div>
    </div>
`;

export const RecipeCardHorizontal = (recipe) => `
    <div class="recipe-card-h" onclick="window.location.hash='recipe/${recipe.id}'">
        <div style="position: relative; width: 100%; height: 120px; background: url('${recipe.img}') center/cover;">
            <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(74, 59, 50, 0.9) 0%, rgba(44, 43, 41, 0.7) 100%); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; color: white; padding: 10px;">
                <span style="text-transform: uppercase; font-size: 0.6rem; letter-spacing: 0.5px; color: var(--color-accent-gold); margin-bottom: 4px;">${recipe.category}</span>
                <h4 style="font-size: 1rem; font-weight: 600; line-height: 1.2;">${recipe.title}</h4>
            </div>
        </div>
        <div class="recipe-info-h">
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
