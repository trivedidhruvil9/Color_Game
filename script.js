var numSquares = 6;
var colors = generateRandomColors(numSquares);
var square = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector(".colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	for(var i=0;i<square.length;i++)
	{
		if(colors[i]){
			square[i].style.backgroundColor = colors[i];
		}
		else{
			square[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent="";
	
});
hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<square.length;i++)
	{	
		square[i].style.backgroundColor = colors[i];
		square[i].style.display = "block";
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent="";
});


resetButton.addEventListener("click",function(){
	 numSquares = 6;
	 colors = generateRandomColors(numSquares);
	 pickedColor = pickColor();
	 colorDisplay.textContent = pickedColor;
	for(var i=0;i<square.length;i++)
	{
		square[i].style.backgroundColor = colors[i];
	} 
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent="";
	this.textContent= "New Colors";
});

for (var i = 0; i < square.length; i++){
	square[i].style.backgroundColor = colors[i];
	
	square[i].addEventListener("click",function(){

		var clickedColor = this.style.backgroundColor;
		if(clickedColor===pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "PLay Again?";
		}
		else{
			messageDisplay.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	});
}

function changeColor(color){
	for(var i=0; i<square.length;i++)
	{
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = []
	for(var i=0; i<num; i ++)
	{
		arr.push(randomColor())
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}