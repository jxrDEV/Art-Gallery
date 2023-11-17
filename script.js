const textElement = document.querySelector('.page-header');

window.onscroll = function () {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const distanceFromBottom = windowHeight - scrollPosition;
  const opacity = distanceFromBottom / windowHeight;
  textElement.style.opacity = Math.max(0, opacity);
}

const modal = document.querySelector('.modal');
const dialogElement = document.querySelector('dialog');

const artGallery = document.querySelectorAll('.art-container .art' );
let previewBox = document.querySelector('.preview-box');
let previewImg = previewBox.querySelector(".img-box img");
let previewTitle = previewBox.querySelector(".art-title p");

dialogElement.addEventListener('click', (event) => {
  if (event.target == dialogElement) {
    dialogElement.close();
  }
  function haveflow () {
    window.removeEventListener("wheel", preventDefault);
  }
  haveflow();
})

var preventDefault;
window.onload = () => {
  for (let i = 0; i < artGallery.length; i++) {
    artGallery[i].onclick = () => {
      function preview() {
        let selectedImgUrl = artGallery[i].querySelector('img').src;
        let selectedArtTitle = artGallery[i].getAttribute('data-title');

        previewImg.src = selectedImgUrl;
        previewTitle.innerText = selectedArtTitle;
        modal.showModal();
      }

      function noflow () {
        preventDefault = function (event) {
          event.preventDefault();
        }
        window.addEventListener("wheel", preventDefault, { passive: false });
      }
      
      preview();
      noflow();
    }
  }
}

window.addEventListener('load', () => {
  document.querySelector(".loader").classList.add('loader--hidden');
})