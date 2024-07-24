let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openLightbox(index);
    });
});

function openLightbox(index) {
    lightbox.style.display = 'block';
    currentIndex = index;
    updateLightbox();
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1;
    } else if (currentIndex >= galleryItems.length) {
        currentIndex = 0;
    }
    updateLightbox();
}

function updateLightbox() {
    const img = galleryItems[currentIndex].querySelector('img');
    lightboxImg.src = img.src;
    caption.textContent = img.alt;
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        changeImage(1);
    } else if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'Escape') {
        closeLightbox();
    }
});
