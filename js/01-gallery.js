import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

function createGallery () {
   const gallery = galleryItems.map(item => {
   const galleryItem = 
    `<div class="gallery__item">
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

function openGalleryModal (e) {
    e.preventDefault();
    if(e.target.nodeName !== "IMG") {
        return;
    }  
    
    const imgOnClick = e.target;
    const src = imgOnClick.src;

    const instance = basicLightbox.create(`${imgOnClick}`);
        
    instance.show();

    const lightboxDiv = document.querySelector('.basicLightbox');
    console.log(lightboxDiv);
    console.log(lightboxDiv.classList.contains('basicLightbox--visible'));

    if(lightboxDiv.classList.contains('basicLightbox--visible')) {
            
        imgOnClick.src = imgOnClick.dataset.source;
        
        
        const lightboxPlaceholder = document.querySelector('.basicLightbox__placeholder');
    
        lightboxPlaceholder.style.width = '100vh';
        lightboxPlaceholder.style.height = '100vh';
        imgOnClick.style.width = '100vh';
    
        lightboxPlaceholder.append(imgOnClick);
    }
    
}

galleryEl.addEventListener('click', openGalleryModal);