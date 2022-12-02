import './style.scss'
const images = import.meta.glob('./img/*.jpg')
const  galleryTiles = document.querySelectorAll('.test')

const srcArr = []
for (const path in images) {
  srcArr.push(path)
}

function shuffleArray(array) {
  console.log('shug')
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

const galleryWrapper = document.getElementById('gallery')

shuffleArray(srcArr)

for (let i = 0; i < srcArr.length; i++){

    const photoDiv = document.createElement('div')
    photoDiv.className = "img-container"

    const galleryImg = document.createElement('img')
    galleryImg.src = srcArr[i]

    photoDiv.appendChild(galleryImg)

    galleryWrapper.appendChild(photoDiv)
}
