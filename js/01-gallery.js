import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const refs = {
  galleryContainer: document.querySelector(".gallery"),
};

const galleryEl = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
<a class="gallery__link" href=${original}>
<img
class="gallery__image"
src=${preview}
data-source=${original}
alt=${description}
/>
</a>
</li>`
  )
  .join("");

refs.galleryContainer.insertAdjacentHTML("beforeend", galleryEl);

refs.galleryContainer.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const currentImage = event.target.getAttribute("data-source");

  const instance = basicLightbox.create(`
    <img src="${currentImage}" width="800" height="600">`);

  instance.show();

  refs.galleryContainer.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});
