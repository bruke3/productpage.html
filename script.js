const thumbnails = document.querySelector('.thumbnails img');
const mainImage = document.getElementById('.main-img');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        mainImage.src = thumbnail.src;
    });
});

document.getElementById('add-to-cart').addEventListener('click', () => {
    const quantity = document.getElementById('quantity').ariaValueMax;
    alert(`Added ${quantity} items(s) to your cart!`);
})