// Define an asynchronous function to fetch and display user data
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the HTML element where the API data will be displayed
    const dataContainer = document.getElementById('api-data');

    // Use a try-catch block to handle the fetching process and potential errors
    try {
        // Fetch data from the API asynchronously
        const response = await fetch(apiUrl);

        // Check if the response was successful (status code 200-299)
        if (!response.ok) {
            // If response is not OK, throw an error
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert the response to JSON
        const users = await response.json();

        // Clear the initial "Loading user data..." message
        dataContainer.innerHTML = '';

        // Create a <ul> element to hold the list of users
        const userList = document.createElement('ul');

        // Loop through the users array and create an <li> for each user
        users.forEach(user => {
            // Create an <li> element
            const listItem = document.createElement('li');
            // Set the text content of the <li> to the user's name
            listItem.textContent = user.name;
            // Append the <li> to the <ul>
            userList.appendChild(listItem);
        });

        // After the loop, append the completed <ul> to the dataContainer
        dataContainer.appendChild(userList);

    } catch (error) {
        // In the catch block, clear existing content and display an error message
        console.error('Error fetching user data:', error); // Log the actual error for debugging
        dataContainer.innerHTML = ''; // Clear loading message or previous content
        dataContainer.textContent = 'Failed to load user data. Please try again later.';
        dataContainer.style.color = '#dc3545'; // Optional: style error message in red
    }
}

// Invoke fetchUserData when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);