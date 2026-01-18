/* ============================================
   BEANKEEPER APP.JS
   Step 2: Navigation & Page Routing
   
   HOW TO USE:
   - Click navigation buttons to switch pages
   - Each page is hidden/shown using JavaScript
   - Only one page visible at a time
   ============================================ */

// ====================================
// INITIALIZATION
// ====================================

// Log that our app is starting
console.log('☕ Beankeeper is brewing...');

// Wait for the page to fully load before running our code
document.addEventListener('DOMContentLoaded', initializeApp);

/**
 * INITIALIZE APP
 * This is the first function that runs when the page loads
 * Think of it as our "start button"
 */
function initializeApp() {
    console.log('🌱 Initializing Beankeeper...');
    
    // Set up the navigation system
    setupNavigation();
    
    // Show the home page by default
    navigateToPage('home');
    
    console.log('✨ Beankeeper ready!');
}

// ====================================
// NAVIGATION SYSTEM
// ====================================

/**
 * SETUP NAVIGATION
 * Adds click listeners to all navigation buttons
 * When you click a nav button, it triggers navigateToPage()
 */
function setupNavigation() {
    // Find all nav buttons (they have class "nav-item")
    const navButtons = document.querySelectorAll('.nav-item');
    
    // Loop through each button and add a click listener
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the page name from the button's data-page attribute
            // Example: <button data-page="tasks"> → pageName = "tasks"
            const pageName = this.dataset.page;
            
            // Navigate to that page
            navigateToPage(pageName);
        });
    });
    
    console.log(`📍 Navigation setup complete - ${navButtons.length} buttons ready`);
}

/**
 * NAVIGATE TO PAGE
 * This is the "router" - it handles showing/hiding pages
 * 
 * @param {string} pageName - The name of the page to show (e.g., "home", "tasks")
 */
function navigateToPage(pageName) {
    console.log(`🧭 Navigating to: ${pageName}`);
    
    // STEP 1: Hide all pages
    // Find every element with class "page"
    const allPages = document.querySelectorAll('.page');
    allPages.forEach(page => {
        // Add the "hidden" attribute to hide it
        page.setAttribute('hidden', '');
    });
    
    // STEP 2: Show the requested page
    // Find the page with matching data-page attribute
    const targetPage = document.querySelector(`.page[data-page="${pageName}"]`);
    if (targetPage) {
        // Remove the "hidden" attribute to show it
        targetPage.removeAttribute('hidden');
    } else {
        // If page doesn't exist, log an error
        console.error(`❌ Page not found: ${pageName}`);
        return; // Exit the function early
    }
    
    // STEP 3: Update navigation button states
    // Remove "active" class from all nav buttons
    const allNavButtons = document.querySelectorAll('.nav-item');
    allNavButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add "active" class to the clicked button
    const activeNavButton = document.querySelector(`.nav-item[data-page="${pageName}"]`);
    if (activeNavButton) {
        activeNavButton.classList.add('active');
    }
    
    // STEP 4: Scroll to top of page (smooth experience)
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ====================================
// UTILITY FUNCTIONS
// (We'll add more here as we build)
// ====================================

/**
 * LOG FUNCTION (for debugging)
 * A helper to make our console logs prettier
 * 
 * @param {string} message - What to log
 * @param {string} type - Type of log: "info", "success", "error"
 */
function log(message, type = 'info') {
    const emoji = {
        info: 'ℹ️',
        success: '✅',
        error: '❌',
        warning: '⚠️'
    };
    
    console.log(`${emoji[type] || 'ℹ️'} ${message}`);
}