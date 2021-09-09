import './navbar.css'

export default function nav(parent){
    const ele = document.createElement('div')
    ele.innerText = "navbar"
    ele.classList.toggle('navbar')
    parent.appendChild(ele)
}
