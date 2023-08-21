import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const fotoGallery = document.querySelector(".gallery");
const getFotoGallery = galleryItems
	.map(
		({preview, original, description}) => `<div class="gallery__item"><a class="gallery__link" href="${original}">
		<img
			class="gallery__image"
			src="${preview}"
			data-source="${original}"
			alt="${description}"
		/>
	</a> </div>`
	)
	.join(" ");

fotoGallery.insertAdjacentHTML('beforeend', getFotoGallery)

function getFoto(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") {
		return;
	}
	const modal = basicLightbox.create(`<img src="${event.target.dataset.source}"/>`);

	modal.show();
	document.addEventListener("keydown", event => {
		if (event.key === "Escape") {
			modal.close();
		}
	});
}
fotoGallery.addEventListener("click", getFoto);
