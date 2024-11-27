// Get the necessary elements
const acceptButton = document.getElementById('accept-agreement');
const declineButton = document.getElementById('decline-agreement');
const popup = document.getElementById('agreement-popup');

// Create an overlay to block interactions
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100vw';
overlay.style.height = '100vh';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Transparent but blocks clicks
overlay.style.zIndex = '99998'; // Below the popup
overlay.style.pointerEvents = 'all'; // Blocks all pointer events
document.body.appendChild(overlay);

// Function to handle the "ACCEPT" button
function acceptAgreement() {
    popup.style.transition = 'opacity 0.5s ease';
    popup.style.opacity = 0; // Fade out the popup

    // Wait for the fade-out effect to complete before hiding elements
    setTimeout(() => {
        popup.style.display = 'none'; // Hide the popup
        overlay.style.display = 'none'; // Remove the overlay
    }, 500); // Match the fade-out duration
}

// Function to handle the "DECLINE" button
function declineAgreement() {
    window.close(); // Close the current browser tab
}

// Function to display the popup
function displayPopup() {
    popup.style.display = 'flex'; // Show the popup
    overlay.style.pointerEvents = 'all'; // Enable overlay to block interaction
}

// Check if the user has visited before
const isFirstVisit = localStorage.getItem('hasVisited') === null;

if (isFirstVisit) {
    // First visit: Show the popup and mark the visit
    displayPopup();
    localStorage.setItem('hasVisited', 'true');
} else {
    // Not the first visit: 20% chance to show the popup
    const randomChance = Math.random();
    if (randomChance < 0.2) {
        displayPopup();
    } else {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }
}

// Add event listeners for the "ACCEPT" and "DECLINE" buttons
acceptButton.addEventListener('click', acceptAgreement);
declineButton.addEventListener('click', declineAgreement);
