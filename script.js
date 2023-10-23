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



