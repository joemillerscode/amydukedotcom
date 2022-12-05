import './style.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
const images = import.meta.glob('./img/*.jpg')

AOS.init();
const srcArr = []
for (const path in images) {
  srcArr.push(path)
}

function shuffleArray(array) {
  console.log('images shuffled')
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

console.log(`${Math.ceil(Math.random() * 5) * 1000}ms`)
console.log(Math.floor(Math.random() * (6 - 2 + 1)) + 2)

function addImagesToDom(imgArr) {
  const galleryWrapper = document.getElementById('gallery')
  imgArr.map(image => {
    const imgContainer = document.createElement('div')
    imgContainer.className = "img-container"
    imgContainer.appendChild(image)
    galleryWrapper.appendChild(imgContainer)
  })
}
  
  // --------------------------------------------------------------
shuffleArray(srcArr)

const loadedImgs = []

for (let i = 0; i < srcArr.length; i++){
  const galleryImg = new Image()
    galleryImg.className = "gallery-img"
    galleryImg.src = srcArr[i]
    galleryImg.onload = (e) =>  {
      loadedImgs.push(galleryImg)
      if (loadedImgs.length === srcArr.length){
        addImagesToDom(loadedImgs)
      }
    }

}
