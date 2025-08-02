document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.getElementById('order-button');

    orderButton.addEventListener('click', function() {
        alert('Thank you for your order! We will process it shortly.');
    });

    // Dark/Light mode switch
    const modeSwitch = document.getElementById('mode-switch');
    const body = document.body;

    // Default to dark mode
    if (!body.classList.contains('light-mode')) {
        modeSwitch.innerText = '🌙';
    }

    modeSwitch.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        if (body.classList.contains('light-mode')) {
            modeSwitch.innerText = '☀️';
        } else {
            modeSwitch.innerText = '🌙';
        }
    });
});