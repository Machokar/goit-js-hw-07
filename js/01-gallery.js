import { galleryItems } from "./gallery-items.js";
const box = document.querySelector(".gallery");
box.insertAdjacentHTML("beforeend", createsome(galleryItems));
box.addEventListener("click", handleClick);
function createsome(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`
    )
    .join("");
}
function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"/>`
  );
  instance.show();
}
