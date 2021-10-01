var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#color-display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

init();

function init() {
	colorDisplay.textContent = pickedColor;
	setupSquares();
	reset();
}

resetButton.addEventListener("click", function() {
	reset();
});

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if(clickedColor === pickedColor) {
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play Again";
				changeColors(pickedColor);
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "try again";
			}
		});
	}
}

function changeColors(color) {
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
		h1.style.backgroundColor = color;
	}
}

function reset() {
	colors = RandomColors(numSquares);
	pickedColor = chooseColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "#2C8E99";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
}



function chooseColor() {
	var random = Math.floor(Math.random() * colors.length);
  console.log(colors[random]);
	return colors[random];
}

function RandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(makeColor());
	}
  console.log(arr);
	return arr;
}

function makeColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
