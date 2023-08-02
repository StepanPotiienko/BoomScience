function onScrollDisplay(id, scrollTop) {
    if (document.body.scrollTop > scrollTop || document.documentElement.scrollTop > scrollTop) {
        document.getElementById(id).style.display = 'block'
    } else {
        document.getElementById(id).style.display = 'none'
    }
}

window.onscroll = function () { onScrollDisplay('up', 800) }

function createCource(name = 'Новий курс', description = 'Це новий курс!', price = 'БЕЗКОШТОВНО') {
    let div = document.createElement('div')
    document.getElementById('cources').append(div)
    div.classList.add('cource')
    div.classList.add('centered')
    div.style.justifyContent = 'space-between'

    let content = document.createElement('div')
    div.appendChild(content)
    content.classList.add('centered')

    let title = document.createElement('h3')
    content.appendChild(title)
    title.innerText = name

    let cource_desciption = document.createElement('p')
    content.style.fontSize = '1.5em'
    content.appendChild(cource_desciption)
    cource_desciption.innerText = description

    let priceLink = document.createElement('div')
    priceLink.classList.add('price_link')
    priceLink.classList.add('centered')
    div.appendChild(priceLink)

    let a = document.createElement('a')
    a.href = '#header'
    a.innerText = price
    priceLink.appendChild(a)
}

createCource()
