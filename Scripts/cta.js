document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.getElementById('cta-button');
    const productsNav = document.querySelector('nav .dropdown li span'); 

    if (ctaButton) {
        function highlightProductsNav() {
            if (productsNav) {
                productsNav.classList.add('highlight'); // Add highlight class
                setTimeout(() => {
                    productsNav.classList.remove('highlight'); 
                }, 5000);
            }
        }

        function updateCTA() {
            ctaButton.textContent = `Shop Now`;
            ctaButton.onclick = function() {
                highlightProductsNav();
            };
        }

        updateCTA();
    } else {
        console.error('CTA button not found.');
    }
});
