const scrollGrp = document.querySelector('.scroll-grp');
const header = document.querySelector('header');
const controls = document.querySelector('.controls');

const projects = [...document.querySelectorAll('.work')]

let counter = '';

// ------------------------ INIT ------------------------


updateTime();
setInterval(updateTime, 60000);


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

controls.addEventListener('click', function(e) {
  
    if (e.target.className === 'arrow') {
        if (e.target.dataset.arrow === 'left') {
            prev();
        } else {
            next();
        }
    }

})



// ------------------------ FUNCTIONS ------------------------

function prev() {
    if (counter === 0) {
        return
    } else {
        removeProject();
        counter = counter - 1;
        projects[counter].style.display = 'block';
    }
}

function next() {
    if (counter === projects.length - 1) {
        console.log('object');
        return
    } else {
        removeProject();
        counter = counter + 1;
        projects[counter].style.display = 'block';
    }
}

function displayMainAndLine() {
    const main = document.querySelector('main');
    const line = document.querySelector('.line');
    
    main.style.display = 'block';
    line.style.display = 'block';
    controls.style.display = 'flex'
}

function removeProject() {
    projects.forEach(proj => {
        proj.style.display = '';
    })
}

function displayProject(e) {
    const currentProject = parseInt(e.target.dataset.project);
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

    let mouseX = e.clientX;
    const mouseY = e.clientY;

    // safeguard for info card from appearing off frame if clicked close to left edge
    if (mouseX > window.innerWidth - e.target.lastElementChild.offsetWidth) {
        mouseX = (window.innerWidth - e.target.lastElementChild.offsetWidth) - 20;
    }

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


function getPmOrAm () {
    const today = new Date();
    const hour = today.getHours();
    if (hour >= 12) {
        return 'PM'
    } else {
        return 'AM'
    }
}

function updateTime() {
    const today = new Date();
    let hour = today.getHours() - 12;
    let minute = today.getMinutes();
    const timeOfDay = getPmOrAm();

    if (hour <= 0) {
        hour = hour * -1;
    }

    if (minute < 10) {
        minute = `0${minute}`
    }

    const timeZone = document.querySelector('.timezone');
    timeZone.innerHTML = `${hour}:${minute} ${timeOfDay}<span class="est">EST</span>`
}
