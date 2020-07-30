const scrollGrp = document.querySelector('.scroll-grp');




// ------------------------ EVENT LISTENERS ------------------------

scrollGrp.addEventListener('click', function(e) {
    console.log(e.target);
    console.log(e.target.className);

    if (e.target.classList.contains('loop-container')) {
        removeCard()
        displayCard(e);
        removeSelectedText();
        selectedTextLine(e);
    }

    if (e.target.classList.contains('x-icon')) {
        removeCard();
        removeSelectedText();
    }
   

})


// scrollGrp.addEventListener('mouseover', function(e) {
//     const slowTextLine = [...document.querySelectorAll('.slow-anim')];
//     if (slowTextLine.length != 0) {
//         slowTextLine.forEach(each => {
//             each.classList.remove('slow-anim')
//         })
//     }

//     if (e.target.className === 'loop-container') {
//         const x = [...e.target.children]
//         // console.log(x);
//         x.forEach(each => {
//             if(each.classList.contains('loop-container__text') && !each.classList.contains('selected-txt')) {
//                 each.classList.add('slow-anim')
//             }
//         })
//     }
// })
















// ------------------------ FUNCTIONS ------------------------



function selectedTextLine (e) {
    // const selectedTxt = [...document.querySelectorAll('.selected-txt')]
    // selectedTxt.forEach(each => {
    //     each.classList.remove('selected-txt')
    // })


    const loopContainerTxts = [...e.target.children]
    loopContainerTxts.forEach(each => {
        each.classList.add('selected-txt')
    })
}


function displayCard(e) {

    const activeCard = e.target.lastElementChild;
    activeCard.classList.add('card-active')

    const mouseX = e.clientX
    const mouseY = e.clientY

    activeCard.style.left = `${mouseX}px`
    activeCard.style.top = `${mouseY}px`

}

function removeSelectedText() {
    const selectedTxt = [...document.querySelectorAll('.selected-txt')]
    selectedTxt.forEach(each => {
        each.classList.remove('selected-txt')
    })
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


