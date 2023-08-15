import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const image = document.querySelector('.gallery');
console.log(image.innerHTML);
const markup = galleryItems
    .map((image) => `<div class="gallery-item"><img src=${image.url} alt=${image.alt}></img></div>`
)