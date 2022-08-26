import { galleryItems } from './gallery-items.js';
// Change code below this line

// import * as basicLightbox from 'basiclightbox';

console.log(galleryItems);



const imageGallery = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`).join('');

imageGallery.insertAdjacentHTML("beforeend", markup);

imageGallery.addEventListener("click", handlerImage);

let instance = null;

function handlerImage(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }
    // var2
    // if (evt.dataset.source) {
        
    // }
    // console.log(evt.target.nodeName);
    // console.log(evt.target);
    // console.log(imageGallery);
    const selectImage = evt.target.dataset.source;
    console.log(selectImage);

    instance = basicLightbox.create(`
    <img src="${selectImage}" width="800" height="600">
`);

instance.show();
window.addEventListener("keydown", onKeyPress);
};

function onKeyPress(evt) {
    const ESC_KEY_CODE = `Escape`;
    const isKeyCode = evt.code === ESC_KEY_CODE;

    if (isKeyCode) {
        instance.close();
        window.removeEventListener("keydown", onKeyPress);
    }
}



/**
<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>

style="pointer-events: none;"
 */