// Home.js
import { TopHeader, BottomNav, RecipeCardLarge, RecipeCardHorizontal } from '../components/UI.js';
import { recipes } from '../data.js';

export const HomeView = () => {
    const featured = recipes.filter(r => r.featured);
    const newRecipes = recipes.slice(0, 4); // Just mock

    return `
        <div class="page-view active animate-fade-in" style="padding-bottom: 90px;">
            <div class="container-pad" style="padding-top: var(--spacing-xl); padding-bottom: var(--spacing-md);">
                <p style="color: var(--color-text-secondary); font-size: 0.9rem; font-weight: 500; margin-bottom: 4px;">Welcome back, Member</p>
                <h1 style="font-size: 1.75rem; margin-bottom: var(--spacing-md);">Ready for something sweet?</h1>
                
                <div class="search-input-wrapper" onclick="window.location.hash='search'">
                    <i class="ph ph-magnifying-glass"></i>
                    <div class="search-input" style="color: var(--color-text-secondary); cursor: pointer; display: flex; align-items: center;">
                        Search for brownies, cakes, breads...
                    </div>
                </div>
            </div>

            <!-- Featured Dashboard Hero -->
            <div class="container-pad section-margin">
                <div class="section-header">
                    <h2 class="section-title">Today's Pick</h2>
                </div>
                ${RecipeCardLarge(featured[0] || recipes[0])}
            </div>

            <!-- Horizontal Scroll section -->
            <div class="section-margin">
                <div class="container-pad section-header">
                    <h2 class="section-title">Most Loved</h2>
                    <a href="#search" class="view-all">View all</a>
                </div>
                <div class="carousel-container">
                    ${featured.map(r => RecipeCardHorizontal(r)).join('')}
                </div>
            </div>

            <!-- New In App -->
            <div class="section-margin">
                <div class="container-pad section-header">
                    <h2 class="section-title">New in the App</h2>
                </div>
                <div class="container-pad">
                    ${newRecipes.map(r => RecipeCardLarge(r)).join('')}
                </div>
            </div>

            <!-- Trust line -->
            <div class="container-pad" style="margin-top: var(--spacing-xxl); margin-bottom: var(--spacing-xl); text-align: center;">
                <p style="font-size: 0.8rem; color: var(--color-text-secondary); display: flex; align-items: center; justify-content: center; gap: 8px;">
                    <i class="ph-fill ph-check-circle" style="color: var(--color-accent-sage)"></i>
                    400+ recipes, premium bonuses, and future updates included.
                </p>
            </div>

            ${BottomNav()}
        </div>
    `;
};
