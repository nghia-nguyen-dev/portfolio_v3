const scrollGrp = document.querySelector('.scroll-grp');
const header = document.querySelector('header');

const projects = {
    skrt: document.querySelector('.work--skrt'),
    bfi: document.querySelector('.work--bfi'),
}

let currentProject = '';


// ------------------------ EVENT LISTENERS ------------------------

scrollGrp.addEventListener('click', function(e) {
  
    
    if (e.target.classList.contains('loop-container')) {
        removeCard();
        displayCard(e);
        removeSelectedText();
        selectedTextLine(e);
    }

    if (e.target.classList.contains('x-icon')) {
        removeCard();
        removeSelectedText();
    }
   
    if (e.target.classList.contains('card-info__work')) {
        const main = document.querySelector('main');
        const line = document.querySelector('.line');

        main.style.display = 'block';
        line.style.display = 'block';

        Object.values(projects).forEach(proj => {
            proj.style.display = 'none'
        })
        
        const selectedWork = e.target.dataset.work;
        projects[selectedWork].style.display = 'block'

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

// header.addEventListener('click', function(e) {
//     console.log(e.target);
// })














// ------------------------ FUNCTIONS ------------------------



function selectedTextLine (e) {
    // const selectedTxt = [...document.querySelectorAll('.selected-txt')]
    // selectedTxt.forEach(each => {
    //     each.classList.remove('selected-txt')
    // })


    const loopContainerTxts = [...e.target.children];
    loopContainerTxts.forEach(each => {
        each.classList.add('selected-txt');
    })
}


function displayCard(e) {

    const activeCard = e.target.lastElementChild;
    activeCard.classList.add('card-active')

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    activeCard.style.left = `${mouseX}px`;
    activeCard.style.top = `${mouseY}px`;

}

function removeSelectedText() {
    const selectedTxt = [...document.querySelectorAll('.selected-txt')];
    selectedTxt.forEach(each => {
        each.classList.remove('selected-txt');
    })
}

function removeCard() {
    const activeCard = document.querySelector('.card-active');
    if (activeCard) {
        activeCard.classList.remove('card-active');
    }
}


// var today = new Date();
// var hour = today.getHours() - 12;
// var minute = today.getMinutes();
// var time = today.getHours() + ":" + today.getMinutes();

// const currentTime = `${hour}:${minute}`;


// when a project is clicked 

// display main
// display vertical line
// display chosen project