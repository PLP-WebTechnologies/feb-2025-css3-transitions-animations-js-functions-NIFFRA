// script.js
document.addEventListener("DOMContentLoaded", function() {
    const animateButton = document.getElementById('animateButton');
    const animationBox = document.getElementById('animationBox');
    const saveButton = document.getElementById('saveButton');
    const dataInput = document.getElementById('dataInput');
    const savedData = document.getElementById('savedData');

    // Function to trigger animation
    animateButton.addEventListener('click', function() {
        animationBox.classList.toggle('animate');
    });

    // Function to save data to local storage
    saveButton.addEventListener('click', function() {
        const inputValue = dataInput.value;
        if (inputValue) {
            localStorage.setItem('savedText', inputValue);
            displaySavedData();
        }
    });

    // Function to display saved data
    function displaySavedData() {
        const storedData = localStorage.getItem('savedText');
        if (storedData) {
            savedData.textContent = `Saved data: ${storedData}`;
        }
    }

    // Load saved data on page load
    displaySavedData();
});
