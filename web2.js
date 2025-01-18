// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Get the "Get Started" button
    const getStartedButton = document.querySelector('.cta-button');
    
    // Add click event listener to the "Get Started" button
    getStartedButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        alert("Redirecting to the detailed quiz..."); // Placeholder action
        // Here you can redirect to the quiz page
        // window.location.href = 'quiz.html'; // Uncomment and set the correct URL
    });

    // Get all "Explore" buttons
    const exploreButtons = document.querySelectorAll('.explore-button');

    // Add click event listener to each "Explore" button
    exploreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            const featureName = this.previousElementSibling.innerText; // Get feature name
            alert(`Exploring: ${featureName}`); // Placeholder action
            // Here you can redirect to the respective feature page
            // window.location.href = `${featureName.toLowerCase().replace(/\s+/g, '-')}.html`; // Uncomment and set the correct URL
        });
    });
});