import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryContainer: document.querySelector(".gallery"),
};

const listElGallery = onMakeGalleryEl(galleryItems);
onMakeGallery(listElGallery);

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });

function onMakeGalleryEl(el) {
  return el
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
        <a href="${original}" class="gallery__link">
          <img class="gallery__image" src="${preview}" alt="${description}">
        </a>
  </li>`
    )
    .join("");
}

function onMakeGallery(el) {
  refs.galleryContainer.innerHTML = el;
}