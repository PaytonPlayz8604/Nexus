document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: "Nexus Watch", url: "nexuswatch.html" },
        { name: "Nexus VR", url: "nexusvr.html" },
        { name: "Nexus Buds", url: "nexusbuds.html" },
        { name: "Nexus Charger", url: "nexuscharger.html" },
        { name: "Nexus Tracker", url: "nexustracker.html" },
        { name: "Nexus Scooter", url: "nexusscooter.html" },
        { name: "Nexus Cam", url: "nexuscam.html" }
    ];
    const ctaButton = document.getElementById('cta-button');

    if (ctaButton) {
        function getRandomProduct() {
            return products[Math.floor(Math.random() * products.length)];
        }

        function updateCTA() {
            const randomProduct = getRandomProduct();
            ctaButton.textContent = `Check Out ${randomProduct.name}`;
            ctaButton.onclick = function() {
                location.href = randomProduct.url;
            };
        }

        updateCTA();
    } else {
        console.error('CTA button not found.');
    }
});
