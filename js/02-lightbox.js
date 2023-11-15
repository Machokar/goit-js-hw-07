import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gal = document.querySelector(".gallery");
gal.insertAdjacentHTML("beforeend", createsome(galleryItems));
function createsome(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`
    )
    .join("");
}
new SimpleLightbox(".gallery__link", {
  captionSelector: "img",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
