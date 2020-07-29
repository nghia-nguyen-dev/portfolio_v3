const scrollGrp = document.querySelector('.scroll-grp');
const cardWork = document.querySelector('.card-info')


scrollGrp.addEventListener('click', function(e) {
    
    // prevents the scrollgrp div from being click which will select all texts
    if (e.target === scrollGrp) {
        return;
    }

   
    removeCard()
    displayCard(e);


    const selectedTxt = [...document.querySelectorAll('.selected-txt')]
    selectedTxt.forEach(each => {
        each.classList.remove('selected-txt')
    })

    const loopContainerTxts = [...e.target.children]
    loopContainerTxts.forEach(each => {
        each.classList.add('selected-txt')
    })




})



function displayCard(e) {

    const activeCard = e.target.lastElementChild;
    activeCard.classList.add('card-active')

    const mouseX = e.clientX
    const mouseY = e.clientY

    activeCard.style.left = `${mouseX}px`
    activeCard.style.top = `${mouseY}px`

}

function removeCard() {

    const activeCard = document.querySelector('.card-active')

    if (activeCard) {
        activeCard.classList.remove('card-active')
    }

}