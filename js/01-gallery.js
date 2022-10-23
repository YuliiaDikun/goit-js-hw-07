import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createGallery = () => {
   const gallery = galleryItems.map(item => {
   const galleryItem =  `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
        </a>
  </div>`;
  return galleryItem;
   });

   galleryEl.innerHTML= gallery.join('');
}
createGallery();