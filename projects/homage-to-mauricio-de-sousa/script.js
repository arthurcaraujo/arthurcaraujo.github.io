const image = document.getElementById("image");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const modalImage = document.getElementById("modal-img");
const modalCaption = document.getElementById("modal-caption");

function zoomingImg() {
    modal.style.display = "block";
    modalImage.src = image.src;
}

function closingBtn() {
    modal.style.display = "none";
}