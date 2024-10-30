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
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.querySelectorAll(".mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

/* Property Console Log */
console.log(
    `%c
    ╔═════════════════════════════════════════════════════════╗
    ║                                                         ║
    ║   Thank you for visiting the Nexus site!                ║
    ║   We kindly ask you not to copy our code.               ║
    ║                                                         ║
    ║                Enjoy your stay! :D                      ║
    ║                      — The Nexus Team                   ║
    ║                                                         ║
    ╚═════════════════════════════════════════════════════════╝
    `,
    'color: #00aaff; font-weight: bold;'
);
