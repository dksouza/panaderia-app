// RecipeDetail.js
import { TopHeader } from '../components/UI.js';
import { recipes } from '../data.js';
import { state, showToast } from '../state.js';

export const RecipeDetailView = (id) => {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return `<div class="container-pad" style="padding-top: 100px;">Recipe not found</div>`;

    const isFav = state.isFavorite(recipe.id);

    return `
        <div class="page-view active" style="padding-bottom: 90px; background-color: var(--color-white)">
            ${TopHeader("", true)}
            
            <div style="position: relative;">
                <img src="${recipe.img}" alt="${recipe.title}" style="width: 100%; height: 320px; object-fit: cover;">
                <div style="position: absolute; bottom: -20px; right: 20px;">
                    <button id="btnFav" class="btn" style="width: 50px; height: 50px; border-radius: 25px; background: var(--color-white); box-shadow: var(--shadow-md);">
                        <i class="${isFav ? 'ph-fill' : 'ph'} ph-heart" style="font-size: 1.5rem; color: ${isFav ? 'var(--color-accent-cocoa)' : 'var(--color-text-secondary)'};"></i>
                    </button>
                </div>
            </div>

            <div class="container-pad" style="margin-top: var(--spacing-xl);">
                <div style="display: flex; gap: 8px; margin-bottom: 8px; flex-wrap: wrap;">
                    ${recipe.tags.map(t => `<span style="font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: var(--color-accent-gold);">${t}</span>`).join('<span style="color:var(--color-border)">|</span>')}
                </div>
                
                <h1 style="font-size: 2rem; margin-bottom: var(--spacing-sm);">${recipe.title}</h1>
                <p style="color: var(--color-text-secondary); font-size: 1rem; margin-bottom: var(--spacing-md); line-height: 1.6;">${recipe.description}</p>
                
                <!-- Meta Info Box -->
                <div style="display: flex; justify-content: space-between; background: var(--color-bg-secondary); border-radius: var(--radius-md); padding: var(--spacing-md); margin-bottom: var(--spacing-lg);">
                    <div style="text-align: center;">
                        <p style="font-size: 0.75rem; color: var(--color-text-secondary); margin-bottom: 2px;">Prep</p>
                        <p style="font-weight: 600;">${recipe.time?.prep || 0}m</p>
                    </div>
                    <div style="width: 1px; background: var(--color-border);"></div>
                    <div style="text-align: center;">
                        <p style="font-size: 0.75rem; color: var(--color-text-secondary); margin-bottom: 2px;">Cook</p>
                        <p style="font-weight: 600;">${recipe.time?.cook || 0}m</p>
                    </div>
                    <div style="width: 1px; background: var(--color-border);"></div>
                    <div style="text-align: center;">
                        <p style="font-size: 0.75rem; color: var(--color-text-secondary); margin-bottom: 2px;">Yield</p>
                        <p style="font-weight: 600;">${recipe.servings || '-'} servings</p>
                    </div>
                </div>

                <!-- Action Bar -->
                <div style="display: flex; gap: var(--spacing-sm); margin-bottom: var(--spacing-xl);">
                    <button class="btn btn-secondary" onclick="window.print()" style="flex: 1; justify-content: center; gap: 8px;">
                        <i class="ph ph-printer" style="font-size: 1.2rem;"></i> Print Recipe
                    </button>
                </div>

                <hr style="border: 0; height: 1px; background: var(--color-border); margin: var(--spacing-xl) 0;">

                <!-- Ingredients -->
                <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: var(--spacing-md);">Ingredients</h2>
                <ul style="list-style: none;">
                    ${recipe.ingredients.map(ing => `
                        <li style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed var(--color-border);">
                            <span>${ing.name}</span>
                            <span style="font-weight: 600;">${ing.amount}</span>
                        </li>
                    `).join('')}
                </ul>

                <hr style="border: 0; height: 1px; background: var(--color-border); margin: var(--spacing-xl) 0;">

                <!-- Instructions -->
                <h2 style="font-size: 1.25rem; font-weight: 600; margin-bottom: var(--spacing-md);">Method</h2>
                <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
                    ${recipe.instructions.map((inst, index) => `
                        <div style="display: flex; gap: var(--spacing-md);">
                            <div style="flex-shrink: 0; width: 28px; height: 28px; border-radius: 14px; background: var(--color-accent-gold-light); color: var(--color-accent-gold); display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.8rem;">
                                ${index + 1}
                            </div>
                            <p style="line-height: 1.6; padding-top: 2px;">${inst}</p>
                        </div>
                    `).join('')}
                </div>

                <!-- Premium Detail Cards -->
                <div style="margin-top: var(--spacing-xxl);">
                    ${recipe.bloodSugarNotes ? `
                        <div style="background: rgba(138, 154, 134, 0.1); border-left: 4px solid var(--color-accent-sage); padding: var(--spacing-md); border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: var(--spacing-md);">
                            <h4 style="font-size: 0.9rem; font-weight: 600; color: var(--color-accent-sage); margin-bottom: 4px; display: flex; align-items: center; gap: 4px;"><i class="ph-fill ph-drop"></i> Blood Sugar Notes</h4>
                            <p style="font-size: 0.95rem; color: var(--color-text-secondary); line-height: 1.5;">${recipe.bloodSugarNotes}</p>
                        </div>
                    ` : ''}

                    ${recipe.chefTips ? `
                        <div style="background: var(--color-bg-secondary); padding: var(--spacing-md); border-radius: var(--radius-md); margin-bottom: var(--spacing-md);">
                            <h4 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 4px; display: flex; align-items: center; gap: 4px;"><i class="ph ph-lightbulb"></i> Chef's Tip</h4>
                            <p style="font-size: 0.95rem; color: var(--color-text-secondary); line-height: 1.5;">${recipe.chefTips}</p>
                        </div>
                    ` : ''}

                    ${recipe.storage ? `
                        <div style="background: var(--color-bg-secondary); padding: var(--spacing-md); border-radius: var(--radius-md); margin-bottom: var(--spacing-md);">
                            <h4 style="font-size: 0.9rem; font-weight: 600; margin-bottom: 4px; display: flex; align-items: center; gap: 4px;"><i class="ph ph-package"></i> Storage</h4>
                            <p style="font-size: 0.95rem; color: var(--color-text-secondary); line-height: 1.5;">${recipe.storage}</p>
                        </div>
                    ` : ''}
                </div>

            </div>
        </div>
    `;
};

RecipeDetailView.afterRender = (id) => {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    // Toggle Favorite
    const btnFav = document.getElementById('btnFav');
    if (btnFav) {
        btnFav.addEventListener('click', () => {
            const isNowFav = state.toggleFavorite(recipe.id);
            btnFav.innerHTML = `<i class="${isNowFav ? 'ph-fill' : 'ph'} ph-heart" style="font-size: 1.5rem; color: ${isNowFav ? 'var(--color-accent-cocoa)' : 'var(--color-text-secondary)'};"></i>`;
            showToast(isNowFav ? "Added to Favorites" : "Removed from Favorites");
        });
    }

};
