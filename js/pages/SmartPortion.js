// SmartPortion.js
import { TopHeader } from '../components/UI.js';

export const SmartPortionView = () => {
    return `
        <div class="page-view active" style="padding-bottom: 90px; background-color: var(--color-bg-primary); min-height: 100vh;">
            ${TopHeader("Smart Portion Control", true)}

            <div class="container-pad" style="margin-top: var(--spacing-sm);">
                <div style="text-align: center; margin-bottom: var(--spacing-xl);">
                    <i class="ph-fill ph-scales" style="font-size: 3rem; color: var(--color-accent-gold); margin-bottom: 8px;"></i>
                    <p style="color: var(--color-text-secondary); font-size: 0.95rem;">Find a more balanced dessert rhythm for your routine.</p>
                </div>

                <!-- Input Card -->
                <div id="sp-input-card" style="background: var(--color-white); border-radius: var(--radius-lg); padding: var(--spacing-lg); box-shadow: var(--shadow-sm); margin-bottom: var(--spacing-xl);">
                    
                    <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-sm); font-size: 0.95rem;">How many times do you eat dessert each week?</label>
                    <div style="display: flex; flex-direction: column; align-items: center; margin-bottom: var(--spacing-xl);">
                        <span id="sp-freq-display" style="font-size: 2rem; font-family: var(--font-heading); font-weight: 700; color: var(--color-accent-cocoa); margin-bottom: 8px;">0</span>
                        <input type="range" id="sp-freq-range" min="0" max="14" value="0" style="width: 100%; accent-color: var(--color-accent-cocoa);">
                    </div>

                    <label style="display: block; font-weight: 600; margin-bottom: var(--spacing-sm); font-size: 0.95rem;">What is your usual portion size?</label>
                    <div style="display: flex; gap: var(--spacing-sm); margin-bottom: var(--spacing-lg);">
                        <div class="sp-portion-btn" data-val="Small" style="flex: 1; text-align: center; padding: 12px; border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">Small</div>
                        <div class="sp-portion-btn" data-val="Medium" style="flex: 1; text-align: center; padding: 12px; border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">Medium</div>
                        <div class="sp-portion-btn" data-val="Large" style="flex: 1; text-align: center; padding: 12px; border: 1px solid var(--color-border); border-radius: var(--radius-md); cursor: pointer; transition: all 0.2s;">Large</div>
                    </div>

                    <p style="font-size: 0.8rem; color: var(--color-text-secondary); text-align: center; margin-bottom: var(--spacing-lg);">This tool offers simple lifestyle guidance based on your current dessert habits.</p>

                    <button id="sp-cta" class="btn btn-primary" style="width: 100%; padding: 16px; font-size: 1.05rem;" disabled>See My Recommendation</button>
                </div>

                <!-- Results Card -->
                <div id="sp-result-card" style="display: none; background: linear-gradient(to bottom, var(--color-white), var(--color-bg-secondary)); border-radius: var(--radius-lg); padding: var(--spacing-xl) var(--spacing-lg); box-shadow: var(--shadow-md); border-top: 4px solid var(--color-accent-gold); animation: fadeIn 0.4s ease-out;">
                    
                    <div style="text-align: center; margin-bottom: var(--spacing-lg);">
                        <span style="display: inline-block; background: var(--color-accent-gold-light); color: var(--color-accent-gold); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">Balanced Routine Insight</span>
                        <p id="sp-res-summary" style="font-size: 0.9rem; color: var(--color-text-secondary); font-style: italic;"></p>
                    </div>

                    <div style="background: var(--color-white); border-radius: var(--radius-md); padding: var(--spacing-md); margin-bottom: var(--spacing-md); border: 1px solid var(--color-border);">
                        <p style="font-size: 0.8rem; color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Ideal Portion Size</p>
                        <p id="sp-res-ideal-portion" style="font-size: 1.25rem; font-weight: 600; color: var(--color-accent-cocoa);"></p>
                    </div>

                    <div style="background: var(--color-white); border-radius: var(--radius-md); padding: var(--spacing-md); margin-bottom: var(--spacing-lg); border: 1px solid var(--color-border);">
                        <p style="font-size: 0.8rem; color: var(--color-text-secondary); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 4px;">Recommended Frequency</p>
                        <p id="sp-res-ideal-freq" style="font-size: 1.25rem; font-weight: 600; color: var(--color-accent-cocoa);"></p>
                    </div>

                    <p id="sp-res-note" style="font-size: 0.95rem; line-height: 1.5; color: var(--color-text-primary); text-align: center; margin-bottom: var(--spacing-lg); padding: 0 var(--spacing-sm);"></p>

                    <button id="sp-reset" class="btn btn-secondary" style="width: 100%; border-color: transparent;">Start Over</button>
                    
                    <p style="font-size: 0.7rem; color: var(--color-text-secondary); text-align: center; margin-top: var(--spacing-lg); opacity: 0.8;">This tool is for general educational purposes and is not medical advice.</p>
                </div>

            </div>
        </div>
    `;
};

SmartPortionView.afterRender = () => {
    const range = document.getElementById('sp-freq-range');
    const display = document.getElementById('sp-freq-display');
    const portionBtns = document.querySelectorAll('.sp-portion-btn');
    const cta = document.getElementById('sp-cta');
    const inputCard = document.getElementById('sp-input-card');
    const resultCard = document.getElementById('sp-result-card');
    
    let currentFreq = 0;
    let currentPortion = null;

    // Logic Matrix
    const calculateResult = (freq, portion) => {
        let idealSize = "";
        let idealFreq = "";
        let note = "";

        if (freq <= 2) {
            if (portion === "Small") idealSize = "Small or Medium";
            else idealSize = "Medium";
            idealFreq = "2–3 times per week";
            note = "You already have a lighter dessert rhythm. A balanced portion can help you keep enjoyment and consistency.";
        } else if (freq <= 5) {
            if (portion === "Medium") idealSize = "Small or Medium";
            else idealSize = "Small";
            idealFreq = "2–4 times per week";
            note = "You may do well with a slightly more intentional dessert routine to keep things feeling balanced and sustainable.";
        } else if (freq <= 8) {
            idealSize = "Small";
            idealFreq = "2–3 times per week";
            note = "A smaller portion and a more planned dessert rhythm may help make your routine feel lighter and easier to maintain.";
        } else {
            // 9+
            idealSize = "Small";
            idealFreq = "1–2 times per week";
            note = "A simpler dessert rhythm with smaller portions may help you enjoy sweets more mindfully throughout the week.";
        }

        return { idealSize, idealFreq, note, summary: `You currently enjoy dessert ${freq} time${freq===1?'':'s'} per week with a ${portion.toLowerCase()} portion.` };
    };

    const updateBtns = () => {
        portionBtns.forEach(b => {
            if (b.dataset.val === currentPortion) {
                b.style.background = 'var(--color-bg-secondary)'; // Muted look
                b.style.borderColor = 'var(--color-accent-cocoa)';
                b.style.fontWeight = '600';
            } else {
                b.style.background = 'transparent';
                b.style.borderColor = 'var(--color-border)';
                b.style.fontWeight = '400';
            }
        });
        cta.disabled = currentPortion === null;
    };

    const runCalculation = () => {
        const res = calculateResult(currentFreq, currentPortion);
        
        document.getElementById('sp-res-summary').textContent = res.summary;
        document.getElementById('sp-res-ideal-portion').textContent = res.idealSize;
        document.getElementById('sp-res-ideal-freq').textContent = res.idealFreq;
        document.getElementById('sp-res-note').textContent = res.note;

        inputCard.style.display = 'none';
        resultCard.style.display = 'block';

        // Save to Session Storage
        sessionStorage.setItem('smartPortionControl_frequency', currentFreq.toString());
        sessionStorage.setItem('smartPortionControl_portion', currentPortion);
        sessionStorage.setItem('smartPortionControl_result', JSON.stringify(res));
    };

    // Events
    range.addEventListener('input', (e) => {
        currentFreq = parseInt(e.target.value, 10);
        display.textContent = currentFreq;
    });

    portionBtns.forEach(b => {
        b.addEventListener('click', () => {
            currentPortion = b.dataset.val;
            updateBtns();
        });
    });

    cta.addEventListener('click', runCalculation);

    document.getElementById('sp-reset').addEventListener('click', () => {
        sessionStorage.removeItem('smartPortionControl_frequency');
        sessionStorage.removeItem('smartPortionControl_portion');
        sessionStorage.removeItem('smartPortionControl_result');
        currentFreq = 0;
        currentPortion = null;
        range.value = 0;
        display.textContent = "0";
        updateBtns();
        resultCard.style.display = 'none';
        inputCard.style.display = 'block';
    });

    // Check Session Storage on Mount
    const savedFreq = sessionStorage.getItem('smartPortionControl_frequency');
    const savedPortion = sessionStorage.getItem('smartPortionControl_portion');
    
    if (savedFreq && savedPortion) {
        currentFreq = parseInt(savedFreq, 10);
        currentPortion = savedPortion;
        range.value = currentFreq;
        display.textContent = currentFreq;
        updateBtns();
        runCalculation();
    } else {
        updateBtns(); // initialize blank
    }
};
