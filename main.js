const scrollGrp = document.querySelector(".scroll-grp");
const header = document.querySelector("header");
const mouseCursor = document.querySelector(".cursor");
const projects = [...document.querySelectorAll(".work")];

const controls = document.querySelector(".controls");
const up = document.querySelector(".up");
const leftArrow = document.querySelector(".arrow--left");
const rightArrow = document.querySelector(".arrow--right");

let counter = "";
let isDone = false;

// ------------------------ EVENT LISTENERS ------------------------

up.addEventListener("click", e => {
	e.preventDefault();
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
});

rightArrow.addEventListener("click", e => {
	e.preventDefault();
	next();
	setTimeout(scrollToMain, 0);
});

leftArrow.addEventListener("click", e => {
	e.preventDefault();
	prev();
	setTimeout(scrollToMain, 0);
});

scrollGrp.addEventListener("click", function (e) {
	if (e.target.classList.contains("loop-container")) {
		removeCard();
		displayCard(e);
		removeSelectedText();
		selectedTextLine(e);
	}

	if (e.target.classList.contains("x-icon")) {
		removeCard();
		removeSelectedText();
	}

	if (e.target.classList.contains("card-info__project")) {
		displayMain();
		displayControls();
		removeProject();
		displayProject(e);
		scrollToMain()
	}
});

// ------------------------ FUNCTIONS ------------------------
function scrollToMain() {
	const main = document.querySelector("main");
	main.scrollIntoView({ behavior: 'smooth' });
}

function prev() {
	if (counter === 0) {
		return;
	} else {
		removeProject();
		counter = counter - 1;
		projects[counter].style.display = "block";
	}
}

function next() {
	if (counter === projects.length - 1) {
		console.log("object");
		return;
	} else {
		removeProject();
		counter = counter + 1;
		projects[counter].style.display = "block";
	}
}

function displayMain() {
	const main = document.querySelector("main");
	main.style.display = "block";
}

function displayControls() {
	controls.style.display = "flex";
}

function removeProject() {
	projects.forEach(proj => {
		proj.style.display = "";
	});
}

function displayProject(e) {
	const currentProject = parseInt(e.target.dataset.project);
	counter = currentProject;
	projects[currentProject].style.display = "block";
}

function selectedTextLine(e) {
	const loopContainerTxts = [...e.target.children];
	loopContainerTxts.forEach(each => {
		each.classList.add("selected-txt");
	});
}

function displayCard(e) {
	const activeCard = e.target.lastElementChild;
	activeCard.classList.add("card-active");

	let mouseX = e.clientX;
	const mouseY = e.clientY;

	// safeguard for info card from appearing off frame if clicked close to left edge
	if (mouseX > window.innerWidth - e.target.lastElementChild.offsetWidth) {
		mouseX = window.innerWidth - e.target.lastElementChild.offsetWidth - 20;
	}

	activeCard.style.left = `${mouseX}px`;
	activeCard.style.top = `${mouseY}px`;
}

function removeSelectedText() {
	const selectedTxt = [...document.querySelectorAll(".selected-txt")];
	selectedTxt.forEach(each => {
		each.classList.remove("selected-txt");
	});
}

function removeCard() {
	const activeCard = document.querySelector(".card-active");
	if (activeCard) {
		activeCard.classList.remove("card-active");
	}
}

function introAnim() {
	const tl = gsap.timeline();
	tl.set(".line-anim", {
		bottom: 0,
		height: 0,
		top: "60vh",
		display: "block",
	});
	tl.to(".line-anim", {
		height: "40vh",
		duration: 2,
		ease: "power4.inOut",
	});
	tl.set(".line-anim", {
		top: "initial",
	});
	tl.to(".line-anim", {
		height: "8vh",
		duration: 1.7,
		ease: "power4.inOut",
	});
}
