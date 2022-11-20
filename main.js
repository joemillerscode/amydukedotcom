import './style.css'
import javascriptLogo from './img/2time.jpeg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <p>AmyDuke.com coming soon </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
