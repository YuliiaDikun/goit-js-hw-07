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

let isKeyEvent = false;

function createLightBox(img) {
    const instance = basicLightbox.create(`<img src="${img.dataset.source}">`);
    
    instance.show();
    if(isKeyEvent) {
        instance.close(); 
    }   
}

function openGalleryModal (e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }  
    
    const imgOnClick = e.target;
    
    createLightBox(imgOnClick);   
}

function closeFromKeyboard(e) {    
    if(e.code === 'Escape')  {
        console.log('this is key event');
        isKeyEvent = true;               
    }   
}

galleryEl.addEventListener('keydown', closeFromKeyboard);


galleryEl.addEventListener('click', openGalleryModal);
