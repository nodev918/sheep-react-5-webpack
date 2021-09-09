import './index.css'
import myImg from './img/exampleImg.jpg'
import Navbar from './components/Navbar'

const ele  = document.createElement('div')
ele.innerText = 'hello innerText'
document.body.appendChild(ele)


const img = new Image()
img.src = myImg
ele.appendChild(img)

Navbar(document.body)