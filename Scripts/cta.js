document.addEventListener('DOMContentLoaded', function() {
    const products = ["Nexus Watch", "Nexus VR", "Nexus Buds"];
    const ctaButton = document.getElementById('cta-button');

    function getRandomProduct() {
        return products[Math.floor(Math.random() * products.length)];
    }

    function updateCTA() {
        const randomProduct = getRandomProduct();
        ctaButton.textContent = `Check out ${randomProduct}`;
        ctaButton.onclick = function() {
            location.href = 'products.html';
        };
    }

    updateCTA();
});
