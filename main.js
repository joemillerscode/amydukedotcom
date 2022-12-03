import './style.scss'
const images = import.meta.glob('./img/*.jpg')

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

let imgCounter = 0
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
