import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

function createGallery (images) {
   return images.map(({original, preview, description}) => {
    return`
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>`;
  
   })
   .join('');
   
}

const imageMarkup = createGallery(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', imageMarkup);

function openGalleryModal (e) {
    e.preventDefault();
    if(e.target.nodeName !== "IMG") {
        return;
    }  
    
    const imgOnClick = e.target;   
     
    const src = imgOnClick.src;    
     
    const instance = basicLightbox.create(`<img src="${imgOnClick.dataset.source}" width="800" height="600">`);
    console.log(instance);
    instance.show();     
    
}

galleryEl.addEventListener('click', openGalleryModal);