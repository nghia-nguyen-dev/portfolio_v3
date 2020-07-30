const scrollGrp = document.querySelector('.scroll-grp');




// ------------------------ EVENT LISTENERS ------------------------

scrollGrp.addEventListener('click', function(e) {
    
    // prevents the scrollGrp div from being click which will select all texts
    if (e.target === scrollGrp) {
        return;
    }

    displayCard(e);
    selectedTextLine(e);

})

scrollGrp.addEventListener('mouseover', function(e) {
    const slowTextLine = [...document.querySelectorAll('.slow-anim')];
    if (slowTextLine.length != 0) {
        slowTextLine.forEach(each => {
            each.classList.remove('slow-anim')
        })
    }

    if (e.target.className === 'loop-container') {
        const x = [...e.target.children]
        // console.log(x);
        x.forEach(each => {
            if(each.classList.contains('loop-container__text')) {
                each.classList.add('slow-anim')
            }
        })
    }
})
















// ------------------------ FUNCTIONS ------------------------



function selectedTextLine (e) {
    const selectedTxt = [...document.querySelectorAll('.selected-txt')]
    selectedTxt.forEach(each => {
        each.classList.remove('selected-txt')
    })

    const loopContainerTxts = [...e.target.children]
    loopContainerTxts.forEach(each => {
        each.classList.add('selected-txt')
    })
}


function displayCard(e) {

    removeCard()
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


// var today = new Date();
// var hour = today.getHours() - 12;
// var minute = today.getMinutes();
// var time = today.getHours() + ":" + today.getMinutes();

// const currentTime = `${hour}:${minute}`;


