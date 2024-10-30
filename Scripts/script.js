/* Navigation Bar */
document.addEventListener('DOMContentLoaded', function () {
    let includeHTML = document.querySelectorAll('[w3-include-html]');
    includeHTML.forEach(function (el) {
        let file = el.getAttribute('w3-include-html');
        fetch(file).then(response => {
            return response.text()
        }).then(data => {
            el.innerHTML = data;
        });
    });
});

/* Footer */
document.addEventListener('DOMContentLoaded', function () {
    let includeHTML = document.querySelectorAll('[w3-include-html]');
    includeHTML.forEach(function (el) {
        let file = el.getAttribute('w3-include-html');
        fetch(file)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
            });
    });
});

/* Slideshow on index.html */
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

/* Property Console Log */
console.log(
    `%c
    ╔═════════════════════════════════════════════════════════╗
    ║                                                         ║
    ║   Thank you for visiting the Nexus site!                ║
    ║   We kindly ask you not to copy our code.               ║
    ║                                                         ║
    ║                Enjoy your stay!                         ║
    ║                      — The Nexus Team                   ║
    ║                                                         ║
    ╚═════════════════════════════════════════════════════════╝
    `,
    'color: #00aaff; font-weight: bold;'
);
