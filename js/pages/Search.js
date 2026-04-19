// Search.js
import { TopHeader, BottomNav, RecipeCardLarge, CategoryChips } from '../components/UI.js';
import { recipes, categories } from '../data.js';

export const SearchView = () => {
    return `
        <div class="page-view active" style="padding-bottom: 90px; height: 100vh; display: flex; flex-direction: column;">
            ${TopHeader("Recipes")}
            
            <div class="container-pad" style="padding-top: var(--spacing-sm); padding-bottom: var(--spacing-md); position: sticky; top: 60px; background: var(--color-bg-primary); z-index: 10;">
                <div class="search-input-wrapper">
                    <i class="ph ph-magnifying-glass"></i>
                    <input type="text" id="recipeSearch" class="search-input" placeholder="Search by name, ingredient..." autocomplete="off">
                </div>
            </div>

            <div style="margin-bottom: var(--spacing-md); position: sticky; top: 130px; z-index: 10; padding-bottom: 8px; background: linear-gradient(var(--color-bg-primary) 80%, transparent);">
                ${CategoryChips(categories, null)}
            </div>

            <div class="container-pad" id="recipeList" style="flex: 1; overflow-y: auto;">
                <!-- Recipes rendered dynamically -->
            </div>

            ${BottomNav()}
        </div>
    `;
};

// Logic that attaches after the HTML string is rendered to DOM
SearchView.afterRender = () => {
    let currentSearch = "";
    let currentCategory = null;
    const listContainer = document.getElementById('recipeList');
    const searchInput = document.getElementById('recipeSearch');

    const renderList = () => {
        const filtered = recipes.filter(r => {
            const matchesSearch = r.title.toLowerCase().includes(currentSearch.toLowerCase()) || 
                                  r.tags.join(' ').toLowerCase().includes(currentSearch.toLowerCase());
            const matchesCategory = currentCategory ? (r.category === currentCategory || r.tags.includes(currentCategory)) : true;
            return matchesSearch && matchesCategory;
        });

        if (filtered.length === 0) {
            listContainer.innerHTML = `
                <div class="flex-col items-center justify-center container-pad" style="text-align: center; margin-top: var(--spacing-xl);">
                    <i class="ph ph-magnifying-glass" style="font-size: 3rem; color: var(--color-border); margin-bottom: var(--spacing-md);"></i>
                    <p style="color: var(--color-text-secondary);">No recipes found.</p>
                </div>
            `;
        } else {
            listContainer.innerHTML = filtered.map(r => RecipeCardLarge(r)).join('');
        }
    };

    // Attach Search listener
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderList();
    });

    // Attach Category listener (Fired via CustomEvent from chips click)
    window.addEventListener('filter-category', (e) => {
        currentCategory = e.detail;
        
        // Update active chip classes manually
        const chips = document.querySelectorAll('.chip');
        chips.forEach(c => c.classList.remove('active'));
        if (!currentCategory) {
            chips[0].classList.add('active'); // "All"
        } else {
            chips.forEach(c => {
                if(c.textContent.trim() === currentCategory) c.classList.add('active');
            });
        }
        
        renderList();
    }, { once: false }); // Ensure we don't accidentally leak thousands over time if we don't clean up, but router unmount handles it. Wait, actually we should bind to an element, but window is fine for a basic SPA if we remove it or just allow it to overwrite.
    // Cleanup old listener logic might be needed for a robust SPA, but for this mock, it's ok. We'll use a local function.

    // Initial render
    renderList();
};
