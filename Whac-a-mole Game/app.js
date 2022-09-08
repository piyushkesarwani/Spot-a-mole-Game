const squares = document.querySelectorAll('.square')
const score = document.querySelector('#score')
const timeleft = document.querySelector('#time-left')
const mole = document.querySelector('.mole')

let timerId = null;
let result = 0;
let hitposition;
let currenttime = 60;

function randomsquare(){
	squares.forEach(square => {
		square.classList.remove('mole')
	})

	let randomsquare = squares[Math.floor(Math.random() * 9)]
	randomsquare.classList.add('mole')

	hitposition = randomsquare.id
	
}

squares.forEach(square => {
	square.addEventListener('mousedown', () => {
		if(square.id == hitposition){
			result++
			score.textContent = result
			hitposition = null
		}
	})
})

function movemole(){
	timerId = setInterval(randomsquare, 600)
}

movemole()

function countdown(){
	currenttime--;
	timeleft.textContent = currenttime;

	if(currenttime == 0){
		clearInterval(timerId)
		clearInterval(counttimerId)
		alert('GAME OVER! Your Final SCORE is ' + result)
	}

}

let counttimerId = setInterval(countdown, 1000)
