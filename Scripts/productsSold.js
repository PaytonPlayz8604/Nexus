document.addEventListener('DOMContentLoaded', function() {
    const productsSoldElement = document.querySelector('.products-sold .number');
    let currentCount = parseInt(localStorage.getItem('productsSold')) || 1;

    const targetCount = Math.floor(Math.random() * 10000) + 1;
    const increment = Math.ceil((targetCount - currentCount) / 200); 
    const intervalTime = 500; 

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function updateProductsSold() {
        if (currentCount < targetCount) {
            currentCount += increment;
            productsSoldElement.textContent = formatNumber(currentCount);
            localStorage.setItem('productsSold', currentCount);
            setTimeout(updateProductsSold, intervalTime);
        } else {
            productsSoldElement.textContent = formatNumber(targetCount);
            localStorage.setItem('productsSold', targetCount);
        }
    }

    updateProductsSold();
});
