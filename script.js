// A simple array of menu items
const menuItems = [
    { name: "Espresso", description: "A shot of pure, concentrated coffee.", price: "Rs. 150" },
    { name: "Latte", description: "Espresso with steamed milk and a light layer of foam.", price: "Rs. 220" },
    { name: "Cappuccino", description: "Equal parts espresso, steamed milk, and milk foam.", price: "Rs. 220" },
    { name: "Americano", description: "Espresso shots topped with hot water.", price: "Rs. 180" },
    { name: "Croissant", description: "A flaky, buttery pastry.", price: "Rs. 120" },
    { name: "Chocolate Chip Cookie", description: "A warm, gooey classic.", price: "Rs. 80" },
    { name: "Blueberry Muffin", description: "Moist and full of blueberries.", price: "Rs. 100" },
    { name: "Matcha Latte", description: "Premium matcha with steamed milk.", price: "Rs. 250" },
];

// Get the menu grid container
const menuGrid = document.querySelector('.menu-grid');

// Function to generate and append menu items
function renderMenu() {
    menuItems.forEach(item => {
        // Create the div for the menu item
        const menuItemDiv = document.createElement('div');
        menuItemDiv.classList.add('menu-item');

        // Create the HTML for the item
        menuItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <span>${item.price}</span>
        `;

        // Append the new div to the menu grid
        menuGrid.appendChild(menuItemDiv);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', renderMenu);