const textElement = document.querySelector('.page-header');

window.onscroll = function () {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const distanceFromBottom = windowHeight - scrollPosition;
  const opacity = distanceFromBottom / windowHeight;
  textElement.style.opacity = Math.max(0, opacity);
}

let arts = [
  {
    artName1: 'Art-1',
    artSource1: "arts/art-1.png"
  },

  {
    artName2: 'Art-2',
    artSource2: "arts/art-2.png"
  },

  {
    artName3: 'Art-3',
    artSource3: "arts/art-3.png"
  },

  {
    artName4: 'Art-4',
    artSource4: "arts/art-1.png"
  }
];

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.art-1');

const artGallery = document.querySelectorAll('.column .art' );
let previewBox = document.querySelector('.preview-box');
let previewImg = previewBox.querySelector(".img-box img");

window.onload = () => {
  for (let i = 0; i < artGallery.length; i++) {
    artGallery[i].onclick = () => {
      function preview() {
        let selectedImgUrl = artGallery[i].querySelector('img').src;
        previewImg.src = selectedImgUrl;
        console.log(selectedImgUrl);
        modal.showModal();
      }
      preview();
    }
  }
}