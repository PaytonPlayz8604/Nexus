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

console.log(
    `%c
    ╔═════════════════════════════════════════════════════════╗
    ║                                                         ║
    ║   Thank you for visiting the Nexus site!                ║
    ║   We kindly ask you not to paste or copy our code.      ║
    ║                                                         ║
    ║                Enjoy your stay!                         ║
    ║                      — The Nexus Team                   ║
    ║                                                         ║
    ╚═════════════════════════════════════════════════════════╝
    `,
    'color: #00aaff; font-weight: bold;'
);
