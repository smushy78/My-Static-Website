// script.js

// Simple JavaScript for static website

// Show a welcome alert when page loads
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    const header = document.querySelector('header');
    header.style.cursor = 'pointer';

    // When user clicks on header, show greeting
    header.addEventListener('click', () => {
        alert('Welcome to My Static Website!');
    });
});

// Change background color on button click (if button exists)
const changeColorButton = document.getElementById('changeColor');
if(changeColorButton){
    changeColorButton.addEventListener('click', () => {
        document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    });
}
