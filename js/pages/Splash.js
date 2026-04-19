// Splash.js
export const SplashView = () => {
    return `
        <div class="page-view active splash-bg">
            <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
                <i class="ph ph-leaf" style="font-size: 3rem; color: var(--color-accent-cocoa); margin-bottom: var(--spacing-sm);"></i>
                <h1 style="font-family: var(--font-heading); font-size: 2.5rem; font-weight: 700; color: var(--color-accent-cocoa); letter-spacing: -1px;">CleanSweets</h1>
                <p style="font-size: 1rem; color: var(--color-accent-cocoa); opacity: 0.8; margin-top: 4px; font-weight: 500;">Mindful Desserts for Better Balance</p>
            </div>
            
            <div style="background: var(--color-white); border-radius: var(--radius-lg); padding: var(--spacing-xl) var(--spacing-lg); text-align: center; box-shadow: var(--shadow-lg);">
                <h2 style="font-size: 1.5rem; margin-bottom: var(--spacing-sm); line-height: 1.2;">Eat the sweets you love again.</h2>
                <p style="color: var(--color-text-secondary); font-size: 0.95rem; margin-bottom: var(--spacing-xl); line-height: 1.5;">With recipes designed for optimal blood sugar balance, better ingredients, and real comfort.</p>
                
                <div style="display: flex; flex-direction: column; gap: var(--spacing-md);">
                    <a href="#home" class="btn btn-primary" style="padding: 16px; font-size: 1.05rem;">Enter App</a>
                    <p style="font-size: 0.75rem; color: var(--color-text-secondary);">Premium Member Access Verified</p>
                </div>
            </div>
        </div>
    `;
};
