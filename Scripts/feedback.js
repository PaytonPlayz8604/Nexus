document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const formObject = Object.fromEntries(formData.entries());

    // Log the feedback (you can replace this with an actual API call)
    console.log('Feedback submitted:', formObject);

    // Optionally reset the form after submission
    this.reset();

    // Display a thank you message or redirect the user
    alert('Thank you for your feedback!');
});
