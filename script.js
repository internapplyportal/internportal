document.querySelector('.job-search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the values from the form fields
    const jobTitle = document.getElementById('job-title').value;
    const location = document.getElementById('location').value;

    // Display an alert (optional)
    alert(`Searching for ${jobTitle} in ${location}`);

    // Create the image element for the popup
    const popupImage = document.createElement('img');
    popupImage.src = 'images/pom.png'; // Set the image source
    popupImage.alt = 'Popup Image'; 
    popupImage.classList.add('popup-image');

    // Append the image to the body
    document.body.appendChild(popupImage);

    // Add a class to body to trigger the dimmed background
    document.body.classList.add('popup-active');

    // Close the popup image when clicked
    popupImage.addEventListener('click', function () {
        document.body.removeChild(popupImage);
        document.body.classList.remove('popup-active');
    });
});
