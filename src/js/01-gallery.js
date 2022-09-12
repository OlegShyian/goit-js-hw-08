import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Add imports above this line
// Change code below this line

(function renderOnLoad() {
  const domElementGallery = document.querySelector('.gallery');
  const domElementsArray = createDomElements(galleryItems);

  domElementGallery.append(...domElementsArray);

  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
})();

function createDomElements(itemsArray) {
  return itemsArray.map(galleryItem => {
    const { preview, description, original } = galleryItem;
    const itemElement = createDiv('gallery__item');
    const link = createLink('gallery__link', original);
    const image = createImage('gallery__image', preview, description);

    link.appendChild(image);
    itemElement.appendChild(link);

    return itemElement;
  });
}

function createDiv(className) {
  const div = document.createElement('div');
  div.classList.add(className);
  return div;
}

function createLink(className, href) {
  const link = document.createElement('a');
  link.classList.add(className);
  link.href = href;
  return link;
}

function createImage(className, src, description) {
  const img = document.createElement('img');
  img.classList.add(className);
  img.src = src;
  img.alt = description;
  return img;
}
