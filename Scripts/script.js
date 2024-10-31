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

/* Search Functionality for 404 Page */
function searchPages() {
    const query = document.getElementById('search').value.toLowerCase();
    const pages = [
        { name: 'Home', url: 'index.html' },
        { name: 'About Us', url: 'about.html' },
        { name: 'Contact', url: 'contact.html' },
        { name: 'NexusWatch', url: 'nexuswatch.html' },
        { name: 'NexusCharger', url: 'nexuscharger.html' },
        { name: 'NexusTracker', url: 'nexustracker.html' },
        { name: 'NexusBuds', url: 'nexusbuds.html' },
        { name: 'NexusVR', url: 'nexusvr.html' },
        { name: 'NexusScooter', url: 'nexusscooter.html' },
        { name: 'NexusCam', url: 'nexuscam.html' }
    ];

    const results = pages.filter(page => page.name.toLowerCase().includes(query));

    if (results.length > 0) {
        let resultLinks = results.map(result => `<a href="${result.url}" class="result-link">${result.name}</a>`).join('<br>');
        document.querySelector('.not-found').innerHTML = `
            <i class="fa fa-exclamation-circle"></i>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <div class="search-container">
                <input type="text" id="search" placeholder="Search for pages...">
                <button onclick="searchPages()"><i class="fa fa-search"></i></button>
            </div>
            <div class="search-results">
                <h2>Search Results:</h2>
                ${resultLinks}
            </div>
        `;
    } else {
        document.querySelector('.not-found').innerHTML = `
            <i class="fa fa-exclamation-circle"></i>
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <div class="search-container">
                <input type="text" id="search" placeholder="Search for pages...">
                <button onclick="searchPages()"><i class="fa fa-search"></i></button>
            </div>
            <div class="search-results">
                <h2>Search Results:</h2>
                <p>No results found.</p>
            </div>
        `;
    }
}

/* Property Console Log */
console.log(
    `%c    ╔═════════════════════════════════════════════════════════╗
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
