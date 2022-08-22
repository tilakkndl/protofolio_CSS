const gallery = document.getElementById("gallery");
const left = document.getElementById("left");
const right = document.getElementById("right");
let index = 1;
//rendering image
renderingImage();
function renderingImage() {
  gallery.innerHTML = `<img src = image/img-${index}.jpg>`;
}

left.addEventListener("click", () => {
  if (index !== 1) {
    index--;
  } else {
    index = 4;
  }
  renderingImage();
});

right.addEventListener("click", () => {
  if (index !== 4) {
    index++;
  } else {
    index = 1;
  }
  renderingImage();
});
