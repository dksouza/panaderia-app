// Profile.js
import { TopHeader, BottomNav } from '../components/UI.js';
import { state } from '../state.js';

export const ProfileView = () => {
    return `
        <div class="page-view active" style="padding-bottom: 90px;">
            ${TopHeader("Profile & Settings")}

            <div class="container-pad" style="margin-top: var(--spacing-md);">
                <!-- User Mock Box -->
                <div style="background: var(--color-white); border-radius: var(--radius-lg); padding: var(--spacing-lg); box-shadow: var(--shadow-sm); display: flex; align-items: center; gap: var(--spacing-md); margin-bottom: var(--spacing-xl);">
                    <div style="width: 60px; height: 60px; border-radius: 30px; background: var(--color-accent-gold-light); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-family: var(--font-heading); font-weight: 700; color: var(--color-accent-gold);">
                        M
                    </div>
                    <div>
                        <h2 style="font-size: 1.25rem; margin-bottom: 2px;">Premium Member</h2>
                        <p style="font-size: 0.85rem; color: var(--color-text-secondary);">Lifetime Access</p>
                    </div>
                </div>

                <!-- Menu Links -->
                <div style="background: var(--color-white); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-sm); margin-bottom: var(--spacing-xl);">

                    
                    <a href="#saved" style="display: flex; align-items: center; justify-content: space-between; padding: var(--spacing-md); border-bottom: 1px solid var(--color-border);">
                        <div style="display: flex; align-items: center; gap: 12px; font-weight: 500;">
                            <i class="ph ph-heart" style="font-size: 1.3rem; color: var(--color-text-secondary);"></i> Saved Recipes
                        </div>
                        <span style="font-size: 0.85rem; color: var(--color-text-secondary);">${state.getFavorites().length} saved</span>
                    </a>
                </div>

                <!-- Disclaimers / Legal -->
                <div style="padding: 0 var(--spacing-sm);">
                    <h3 style="font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; color: var(--color-text-secondary); margin-bottom: var(--spacing-sm);">Important Information</h3>
                    <p style="font-size: 0.8rem; line-height: 1.5; color: var(--color-text-secondary); margin-bottom: var(--spacing-md);">
                        <strong style="color: var(--color-accent-cocoa)">Medical Disclaimer:</strong> CleanSweets provides recipes for educational and informational purposes only. This is not medical advice. Always consult your licensed healthcare professional before making any dietary or medication changes, especially if you manage diabetes or insulin resistance. Results are not guaranteed.
                    </p>
                    
                    <div style="display: flex; gap: var(--spacing-md); font-size: 0.8rem; color: var(--color-text-secondary);">
                        <span style="text-decoration: underline; cursor: pointer;">Privacy</span>
                        <span style="text-decoration: underline; cursor: pointer;">Terms</span>
                        <span style="text-decoration: underline; cursor: pointer;">Support</span>
                    </div>
                </div>

            </div>

            ${BottomNav()}
        </div>
    `;
};
