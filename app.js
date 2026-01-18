/* ============================================
   BEANKEEPER APP.JS
   Step 1: Basic Interactivity
   
   This file contains all our JavaScript code.
   It's linked to index.html via <script src="app.js">
   ============================================ */

// Step 1: Just a console message for now
console.log('☕ Beankeeper is brewing...');

// Let's add a tiny bit of interactivity to test things out
// Get all the navigation buttons
const navItems = document.querySelectorAll('.nav-item');

// Add click listeners to each button
navItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add 'active' class to the clicked button
        this.classList.add('active');
        
        // Log which page was clicked (just for testing)
        console.log('Navigated to:', this.textContent.trim());
    });
});
