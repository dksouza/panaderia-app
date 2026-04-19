// router.js

export class Router {
    constructor(routes, defaultRoute) {
        this.routes = routes;
        this.defaultRoute = defaultRoute;
        this.currentViewId = null;
        this.appContainer = document.getElementById('app');

        window.addEventListener('hashchange', () => this.handleHashChange());
        
        // Initial setup
        this.init();
    }

    init() {
        if (!window.location.hash) {
            window.location.hash = this.defaultRoute;
        } else {
            this.handleHashChange();
        }
    }

    handleHashChange() {
        const hash = window.location.hash.slice(1);
        const [path, param] = this.parseHash(hash);
        
        if (this.routes[path]) {
            this.render(this.routes[path], param);
            window.scrollTo(0, 0); // Scroll to top on route change
        } else {
            window.location.hash = this.defaultRoute;
        }
    }

    parseHash(hash) {
        const parts = hash.split('/');
        return [parts[0], parts.slice(1).join('/')];
    }

    async render(viewFunction, param) {
        // Simple unmount/mount 
        this.appContainer.innerHTML = '';
        
        // Render UI string and add to container
        const html = viewFunction(param);
        this.appContainer.innerHTML = html;
        
        // View-specific post-render logic (event listeners, dynamic data binding)
        if (viewFunction.afterRender) {
            // Small delay to ensure DOM is fully ready before binding events
            setTimeout(() => {
                viewFunction.afterRender(param);
            }, 0);
        }
        
        // Update active state in bottom nav if it exists
        this.updateNav();
    }

    updateNav() {
        const hash = window.location.hash.slice(1).split('/')[0];
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            if (item.getAttribute('href') === `#${hash}`) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    static navigate(hash) {
        window.location.hash = hash;
    }
}
