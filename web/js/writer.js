

$(document).ready(function () {
    // type a text string in the UI.
    function typeEffect() {
        var effect = new Typed(".writable-element", {
            strings: [' ', 'Welcome to POS',
                'take 🛒 give 💰', 'have a good time 😇'],
            loop: false,
            typeSpeed: 50,
            backSpeed: 20,
            backDelay: 2500,
            cursorChar: ''
        })
    }
    typeEffect();
});