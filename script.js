// Get the necessary elements
const acceptButton = document.getElementById('accept-agreement');
const declineButton = document.getElementById('decline-agreement');
const popup = document.getElementById('agreement-popup');

// Function to handle the fade-out effect when "ACCEPT" is clicked
function acceptAgreement() {
    popup.style.transition = 'opacity 0.5s ease';
    popup.style.opacity = 0; // Fade out the popup

    // Wait for the fade-out effect to complete before setting display to none
    setTimeout(() => {
        popup.style.display = 'none'; // Hide the popup after fade-out
    }, 500); // 500ms to match the fade-out duration
}

// Function to handle closing the tab when "DECLINE" is clicked
function declineAgreement() {
    window.close(); // Close the current browser tab
}

// Add event listeners for the "ACCEPT" and "DECLINE" buttons
acceptButton.addEventListener('click', acceptAgreement);
declineButton.addEventListener('click', declineAgreement);
