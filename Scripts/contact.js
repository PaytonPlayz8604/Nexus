document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting normally

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && message) {
            // Simulate a successful submission
            alert('Thank you for your message! We will get in touch with you shortly.');
            form.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});
