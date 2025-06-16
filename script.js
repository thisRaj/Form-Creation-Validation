document.addEventListener('DOMContentLoaded', function() { // Changed to a traditional function
    // Select the form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Add event listener for form submission
    form.addEventListener('submit', function(event) { // Changed to a traditional function
        // Prevent default form submission to the server
        event.preventDefault();

        // Retrieve and trim input values
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Initialize validation variables
        let isValid = true;
        const messages = [];

        // --- Username Validation ---
        // Check if username length is less than 3
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // --- Email Validation ---
        // Check if email includes both '@' and '.' characters
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address (must contain @ and .).');
        }

        // --- Password Validation ---
        // Ensure password length is at least 8
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // --- Displaying Feedback ---
        // Make feedbackDiv visible
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // If all validations pass, display success message
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green color for success
            feedbackDiv.style.backgroundColor = '#d4edda'; // Lighter green background
        } else {
            // If any validations fail, display error messages
            // Join messages with <br> for multiline display
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = '#dc3545'; // Red color for errors
            feedbackDiv.style.backgroundColor = '#f8d7da'; // Lighter red background
        }
    });
});