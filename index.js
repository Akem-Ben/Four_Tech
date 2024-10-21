//Hero Carousel Setup
const imagesFolder = "./images/hero/";
const imageFiles = ["gsmarena.png", "ndtv.png", "newsweek.png"];
const carouselImagesContainer = document.getElementById("carousel-images");


const allImages = [...imageFiles];

allImages.forEach((file) => {
    const img = document.createElement("img");
    img.src = `${imagesFolder}${file}`;
    img.width = 20;
    img.height = 20;
    carouselImagesContainer.appendChild(img);
  });
  
  let currentIndex = 0;
  let scrollInterval = 3000;
  
  function scrollImages() {
    let newPosition = -carouselImagesContainer.clientWidth * currentIndex;

    carouselImagesContainer.style.transform = `translateX(${newPosition}px)`;

    currentIndex++;

    if (currentIndex >= imageFiles.length) {
      currentIndex = 0;
    }
  }

  setInterval(scrollImages, scrollInterval);