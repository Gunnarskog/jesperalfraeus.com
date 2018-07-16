var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//Mode buttons event listeners
 setupModeButtons();
 setupSquares();

reset();
}

function setupModeButtons(){
		for (var i=0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected")
			modeButtons[1].classList.remove("selected")
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}
function setupSquares(){
		for(var i = 0; i < squares.length; i++){
	// Add clicklisteners to squares
	squares[i].addEventListener("click", function(){
	// Grab color of the clicked square
	var clickedColor = this.style.backgroundColor;
	// Compare it to pickedColor
	if(pickedColor === clickedColor) {
		messageDisplay.textContent = "Correct!"
		changeColors(clickedColor)
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play again?"
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try again"
	}
	});
}
}


function reset(){
	//Generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";

	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
		} else {
		squares[i].style.display = "none";
		}
	}
	//Reset h1 color
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	// Loop through all squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//Make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random colors and push into array
		arr.push(randomColor());
	}

	//return that array
	return arr;
}

function randomColor(){
	//make a red from 0 to 255
	var r = Math.floor(Math.random()*256);
	//make a green from 0 to 255
	var g = Math.floor(Math.random()*256);
	//make a blue from 0 to 255
	var b = Math.floor(Math.random()*256);

	return "rgb("+ r +", "+ g + ", " + b + ")";
}