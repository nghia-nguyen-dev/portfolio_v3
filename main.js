const scrollGrp = document.querySelector('.scroll-grp');
const header = document.querySelector('header');

const projects = [...document.querySelectorAll('.work')]

let counter = '';


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
        displayMainAndLine();
        removeProject();
        displayProject(e);
    }

})


// ------------------------ FUNCTIONS ------------------------

function displayMainAndLine() {
    const main = document.querySelector('main');
    const line = document.querySelector('.line');
    main.style.display = 'block';
    line.style.display = 'block';
}

function removeProject() {

    projects.forEach(proj => {
        proj.style.display = '';
    })
}

function displayProject(e) {
    const currentProject = parseInt(e.target.dataset.project) - 1;
    counter = currentProject;
    projects[currentProject].style.display = 'block';
}


function selectedTextLine (e) {

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