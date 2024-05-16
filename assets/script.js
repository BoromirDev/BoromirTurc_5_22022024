const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



const arrowRight = document.querySelector('.arrow_right')
const image = document.querySelector('.banner-img')
const dots = document.querySelector(".dots")
const texte = document.querySelector('#banner p')



let currentPosition = 0

arrowRight.addEventListener("click", function() {
	let myDot = dots.children[currentPosition]
	myDot.classList.remove('dot_selected')
	
    currentPosition = (currentPosition + 1);
	
	if (currentPosition >= slides.length) {
		currentPosition = 0
	}

	changeSlide()
});

const arrowLeft = document.querySelector('.arrow_left')



arrowLeft.addEventListener("click", function() {
	let myDot = dots.children[currentPosition]
	myDot.classList.remove('dot_selected')

	currentPosition = (currentPosition - 1);
	
	if (currentPosition < 0) {
		currentPosition = slides.length - 1 
	}

    changeSlide()
});

function changeSlide() {
	myDot = dots.children[currentPosition]
	myDot.classList.add('dot_selected')
	
	const currentSlide = slides[currentPosition]

	const myPath = "./assets/images/slideshow/" + currentSlide.image
    texte.innerHTML = slides[currentPosition].tagLine

	image.src = myPath
}



slides.forEach((slide, index)=>{
	
	const newElement = document.createElement('div');
	newElement.classList.add('dot');

    if (index === 0) {
        newElement.classList.add('dot_selected');
    }

	dots.appendChild(newElement);
})