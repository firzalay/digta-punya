// Select the modal
const modal = document.getElementById('modal');


// Function to check if the user is at the bottom of the page
function checkScrollPosition() {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // If the user has scrolled to the bottom
    if (scrollPosition >= documentHeight) {
        modal.style.display = 'flex'; // Show the modal
        window.removeEventListener('scroll', checkScrollPosition); // Remove the event listener to prevent repeated triggers
    }
}



// Add scroll event listener
window.addEventListener('scroll', checkScrollPosition);

function closeModal() {
    modal.style.display = 'none';
}

document.addEventListener('click', function () { document.getElementById('audioBackground').play() }, { once: true });

