import {bebidas} from './drinks.js'



const ulCervejas = document.querySelector('#cervejas')
const ulChopps = document.querySelector('#chopps')
const ulCoqueteis = document.querySelector('#coqueteis')


for (let i = 0; i < bebidas[1].length; i++) {
    createLiCervejas(i)
}

for (let i = 0; i < bebidas[2].length; i++) {
    createLiChopps(i)
}

for (let i = 0; i < bebidas[4].length; i++) {
    createLiCoqueteis(i)
}



function createLiCervejas (i){
    
    const h4 = document.createElement('h4')
    h4.classList.add('title-description-container', 'h4')
    const span = document.createElement('span')
    const titleDescriptionContainer = document.createElement('div')
    titleDescriptionContainer.classList.add('title-description-container', 'center')
    const price = document.createElement('div')
    price.classList.add('price', 'center')
    const li = document.createElement('li')
    li.classList.add('product-item')
    titleDescriptionContainer.appendChild(h4)
    titleDescriptionContainer.appendChild(span)
    li.appendChild(titleDescriptionContainer)
    li.appendChild(price)

    h4.innerText = bebidas[1][i].title
    span.innerText = bebidas[1][i].desc
    price.innerText = bebidas[1][i].price

    ulCervejas.appendChild(li)
}

function createLiChopps(i) {
    const li = document.createElement('li')
    li.classList.add('product-item', 'vertical')
    const h4 = document.createElement('h4')
    const span = document.createElement('span')
    const span2 = document.createElement('span')

    li.appendChild(h4)
    li.appendChild(span)
    li.appendChild(span2)

    h4.innerText = bebidas[2][i].title
    span.innerText = bebidas[2][i].desc
    span2.innerText = bebidas[2][i].price
    
    ulChopps.appendChild(li)
}


function createLiCoqueteis(i) {
    const h4 = document.createElement('h4')
    h4.classList.add('title-description-container', 'h4')
    const titleDescriptionContainer = document.createElement('div')
    titleDescriptionContainer.classList.add('title-description-container', 'center')
    const price = document.createElement('div')
    price.classList.add('price', 'center')
    const li = document.createElement('li')
    li.classList.add('product-item')
    titleDescriptionContainer.appendChild(h4)
    li.appendChild(titleDescriptionContainer)
    li.appendChild(price)

    h4.innerText = bebidas[4][i].title
    price.innerText = bebidas[4][i].price

    ulCoqueteis.appendChild(li)
}






