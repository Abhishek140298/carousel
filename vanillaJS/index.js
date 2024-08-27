(function () {
  console.log("gfhsj");

  let image = [];
  const carouselBox = document.getElementById("carousel_box");
  const nextButton = document.getElementById("next");
  const prevButton = document.getElementById("prev");
  let carouselSubContainer = document.getElementById("carousel_sub_name");
  let currentIndex = 0;
  let totalNumber

  const fetchImages = async () => {
    const response = await fetch("https://picsum.photos/v2/list");
    const data = await response.json();
    getImages(data);
  };

  function getImages(images) {
    console.log("Images", images);
    image = images;
     totalNumber = image.length;
    image.forEach((image) => {
        console.log("Image",image)
      let imageElem = document.createElement("img");
      imageElem.src = image.download_url;
      imageElem.className = "images";
      carouselSubContainer.appendChild(imageElem);
    });
  }

  fetchImages();

 

  function handleNextElement(event) {
    console.log("fhsg");
    currentIndex = (currentIndex + 1) % totalNumber;
    
    
    const offset = -currentIndex * 100;
    carouselSubContainer.style.transform = `translateX(${offset}%)`;
  }

  function handlePrevElemetn(event) {
    console.log("fhsg");
    currentIndex = (currentIndex - 1 + totalNumber) % totalNumber;
    const offset = -currentIndex * 100;
    carouselSubContainer.style.transform = `translateX(${offset}%)`;
  }

  nextButton.addEventListener("click", handleNextElement);
  prevButton.addEventListener("click", handlePrevElemetn);
})();
