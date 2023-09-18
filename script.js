const textElement = document.querySelector('.page-header');

window.onscroll = function () {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const distanceFromBottom = windowHeight - scrollPosition;
  const opacity = distanceFromBottom / windowHeight;
  textElement.style.opacity = Math.max(0.2, opacity);
}