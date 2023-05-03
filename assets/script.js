const slides = [{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

slides.forEach( (slide,i) => {
	var dots = document.getElementById("dots");
	const dot = document.createElement("div");
	dot.className = "dot" + (i === 0 ? " dot_selected" : "");
	dots.appendChild(dot);
})


let index = 1

//Flèches du caroussel
const leftArrow = document.getElementById("arrow_left");
const rightArrow = document.getElementById("arrow_right");

leftArrow.addEventListener('click', function (param) {
	selectDot(param)
})
rightArrow.addEventListener('click', function (param) {
	selectDot(param)
})


function selectDot(param) {

	var dots = document.getElementsByClassName("dot");

	if (param.target.id === "arrow_left") {
		index == 1 ? index = 4 : index --
	} else {
		index == 4 ? index = 1 : index ++
	}


	Array.from(dots).forEach(dot => {
		dot.classList.remove("dot_selected")
	});

	dots[index - 1].classList.add("dot_selected")

	document.querySelector('.banner-img').src = `./assets/images/slideshow/${slides[index-1].image}`
	document.getElementById('tagline').innerHTML = slides[index - 1].tagLine
}