document.addEventListener('DOMContentLoaded', function() {
    const productsSoldElement = document.querySelector('.products-sold .number');
    let currentCount = parseInt(localStorage.getItem('productsSold')) || 1;

    const targetCount = Math.floor(Math.random() * 10000) + 1;
    const increment = Math.ceil((targetCount - currentCount) / 100); // Adjust the increment for a smooth count up
    const intervalTime = 100; // Adjust the interval time for desired speed

    function updateProductsSold() {
        if (currentCount < targetCount) {
            currentCount += increment;
            productsSoldElement.textContent = currentCount;
            localStorage.setItem('productsSold', currentCount);
            setTimeout(updateProductsSold, intervalTime);
        } else {
            productsSoldElement.textContent = targetCount;
            localStorage.setItem('productsSold', targetCount);
        }
    }

    updateProductsSold();
});
