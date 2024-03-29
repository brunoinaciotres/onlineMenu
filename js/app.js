import {bebidas} from './drinks.js'



const ulCervejas = document.querySelector('#cervejas')
const ulChopps = document.querySelector('#chopps')
const ulCoqueteis = document.querySelector('#coqueteis')
const ulAperitivos = document.querySelector('#aperitivos')
const ulBebidas = document.querySelector('#bebidas')


for (let i = 0; i < bebidas[0].length; i++) {
    createLiBebidas(i)
}

for (let i = 0; i < bebidas[1].length; i++) {
    createLiCervejas(i)
}

for (let i = 0; i < bebidas[2].length; i++) {
    createLiChopps(i)
}
for (let i = 0; i < bebidas[3].length; i++) {
    createLiAperitivos(i)
}


for (let i = 0; i < bebidas[4].length; i++) {
    createLiCoqueteis(i)
}



function createLiCervejas (i){
    
    const h4 = document.createElement('h4')
    h4.classList.add('title-description-container', 'h4')
    const span = document.createElement('span')
    const titleDescriptionContainer = document.createElement('div')
    titleDescriptionContainer.classList.add('title-description-container', 'center', 'column', 'align-items-flex-start')
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

function createLiAperitivos(i) {
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

    h4.innerText = bebidas[3][i].title
    price.innerText = bebidas[3][i].price

    ulAperitivos.appendChild(li)
}

function createLiBebidas(i){
    const h4 = document.createElement('h4')
    h4.classList.add('title-description-container', 'h4')
    const span = document.createElement('span')
    const titleDescriptionContainer = document.createElement('div')
    titleDescriptionContainer.classList.add('title-description-container', 'center', 'column', 'align-items-flex-start')
    const price = document.createElement('div')
    price.classList.add('price', 'center')
    const li = document.createElement('li')
    li.classList.add('product-item')
    titleDescriptionContainer.appendChild(h4)
    titleDescriptionContainer.appendChild(span)
    li.appendChild(titleDescriptionContainer)
    li.appendChild(price)

    h4.innerText = bebidas[0][i].title
    span.innerText = bebidas[0][i].desc
    price.innerText = bebidas[0][i].price

    ulBebidas.appendChild(li)
}


const expandButton = document.querySelectorAll('.expand-button')
const productsUl = Array.from(document.querySelectorAll('.products-ul'))


expandButton.forEach( button => {
    button.addEventListener('click', (event) => {
        
        //troca icone
        let buttons = Array.from(event.target.childNodes)
        buttons.forEach(btn => {
            if(btn.classList){
                btn.classList.toggle('display-none')
            }
        })
        
        //evita abrir todos
        switch(event.target.getAttribute('id')){

            case 'expand-bebidas':
                for (let i = 0; i<productsUl.length; i++){
                    if(productsUl[i].getAttribute('id') == 'bebidas') {
                        productsUl[i].classList.toggle('height')
                    }
                }
                break
            
                case 'expand-aperitivos':
                    for (let i = 0; i<productsUl.length; i++){
                        if(productsUl[i].getAttribute('id') == 'aperitivos') {
                            productsUl[i].classList.toggle('height')
                        }
                    }
                    break
        
        }
    })
});



function createExpandButton() {
    const menuSection = document.querySelector('.menu-section')

    const expandButtonDiv = document.createElement('div')
    expandButtonDiv.classList.add('expand-button')

    const plusIcon = document.createElement('i')
    plusIco.setAttribute
    const arrowIcon = document.createElement('i')
}





