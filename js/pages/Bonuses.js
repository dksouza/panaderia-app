// Bonuses.js
import { TopHeader, BottomNav } from '../components/UI.js';
import { bonuses } from '../data.js';

export const BonusesView = () => {
    return `
        <div class="page-view active" style="padding-bottom: 90px;">
            ${TopHeader("Your Bonuses")}

            <div class="container-pad" style="margin-top: var(--spacing-sm);">
                <p style="color: var(--color-text-secondary); margin-bottom: var(--spacing-lg);">Exclusive unlocked content for CleanSweets members.</p>
                
                <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
                    ${bonuses.map(b => `
                        <div style="background: var(--color-white); border-radius: var(--radius-md); padding: var(--spacing-md); box-shadow: var(--shadow-sm); border-left: 4px solid var(--color-accent-gold);">
                            <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 4px;">${b.title}</h3>
                            <p style="font-size: 0.85rem; color: var(--color-text-secondary); margin-bottom: var(--spacing-md);">${b.description}</p>
                            
                            <details style="background: var(--color-bg-secondary); padding: 12px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); cursor: pointer;">
                                <summary style="font-weight: 500; font-size: 0.9rem; color: var(--color-text-primary); outline: none;">View Content</summary>
                                <div style="margin-top: 12px; font-size: 0.9rem; line-height: 1.6; color: var(--color-text-secondary); white-space: pre-wrap;">${b.content}</div>
                            </details>
                        </div>
                    `).join('')}
                </div>
                
                <!-- The CleanSweets Method -->
                <div style="margin-top: var(--spacing-xxl); padding: var(--spacing-lg); background: linear-gradient(135deg, var(--color-bg-primary), var(--color-bg-secondary)); border-radius: var(--radius-md); border: 1px solid var(--color-border);">
                    <h2 style="font-size: 1.5rem; margin-bottom: var(--spacing-md); display: flex; align-items: center; gap: 8px;"><i class="ph ph-plant"></i> The Method</h2>
                    <p style="font-size: 0.95rem; line-height: 1.6; color: var(--color-text-secondary); margin-bottom: var(--spacing-md);">Our philosophy focuses on better ingredient choices, optimal ratios, and mindful satisfaction—never restriction. Real sweets, re-imagined for stable energy.</p>
                    <ul style="font-size: 0.95rem; line-height: 1.6; color: var(--color-text-secondary); padding-left: 20px;">
                        <li>Almond & coconut flour foundations</li>
                        <li>High-quality fats for satiety</li>
                        <li>Zero-glycemic sweeteners</li>
                        <li>No clinical trade-offs</li>
                    </ul>
                </div>
            </div>

            ${BottomNav()}
        </div>
    `;
};
