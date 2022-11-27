import './style.scss'


const images = import.meta.glob('./img/*.jpg')

// for (const path in images) {
//   images[path]().then((mod) => {
//     console.log(path, mod)
//   })
// }

const  galleryTiles = document.querySelectorAll('.test')
const srcArr = []


for (const path in images) {
  images[path]().then(img => {
    
  })
}

// import javascriptLogo from './img/2time.jpeg'
// import { setupCounter } from './counter.js'

// const photoWall = document.querySelector('#photo-wall');

// photoWall.addEventListener('wheel', (event) => {
//   event.preventDefault();

//   photoWall.scrollBy({
//     left: event.deltaY < 0 ? -30 : 30,
    
//   });
// });

//horizontal scroll with mousewheel above.