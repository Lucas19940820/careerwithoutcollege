document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Event listener to toggle menu visibility
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Toggle menu visibility
        hamburger.classList.toggle('active'); // Change hamburger to X icon

        // Update the hamburger icon
        if (hamburger.classList.contains('active')) {
            hamburger.textContent = '✕'; // Change to X icon
        } else {
            hamburger.textContent = '☰'; // Change back to hamburger icon
        }
    });
});