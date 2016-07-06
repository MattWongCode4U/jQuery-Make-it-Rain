xMoveTimer = null;
yMoveTimer = null;
//direction = "right";
bounceCount = 0;
xSpeed = 1.75;
ySpeed = 1.75;
xChoice = null;
yChoice = null;
xLocation = null;
yLocation = null;
lives = 3;
level = 1;
score = 0;

function initPic(){
	if(xLocation == null){
		xLocation = Math.ceil(Math.random() * window.innerWidth * 0.80) + window.innerWidth * 0.05;
	}
	
	if(yLocation == null){
		yLocation = Math.ceil(Math.random() * window.innerHeight * 0.650) + window.innerHeight * 0.05;
	}
	pic();
}

function chooseDirection(){
	// random number 0-1
	var xRandom = Math.floor(Math.random() * 2);
	var yRandom = Math.floor(Math.random() * 2);
	
	if(xRandom == 0){
		xChoice = "right";
	} else {
		xChoice = "left";
	}
	
	if(yRandom == 0){
		yChoice = "down";
	} else {
		yChoice = "up";
	}
}

function pic(){
	chooseDirection();
	var i = document.createElement("img");
	//i.setAttribute("src", "Images/medhat_yugioh.png");
	i.setAttribute("src", "Images/make_it_rain.png");
	i.setAttribute("id", "a");
	i.setAttribute("class","countPic");
	document.body.appendChild(i);
	var img = document.getElementById("a");
	img.style.left = xLocation + "px";
	img.style.top = yLocation + "px";
	img.style.position = "absolute";
}

function picMove(){
	if(xChoice == "right"){
		xMoveTimer = setInterval("moveRight()", 10);
	}
	
	if(xChoice == "left"){
		xMoveTimer = setInterval("moveLeft()", 10);
	}
	
	if(yChoice == "down"){	
		yMoveTimer = setInterval("moveDown()", 10);
	}
	
	if(yChoice == "up"){	
		yMoveTimer = setInterval("moveUp()", 10);
	}
	
	/*if(xMoveTimer == null && direction == "right"){
		xMoveTimer = setInterval("moveRight()", 10);
		yMoveTimer = setInterval("moveDown()", 10);
	} else if(xMoveTimer == null && direction == "left"){
		xMoveTimer = setInterval("moveLeft()", 10);
		yMoveTimer = setInterval("moveUp()", 10);
	}else{
		// timer already running
		clearInterval(xMoveTimer);
		xMoveTimer = null;
	}*/
}

function moveRight(){
	document.getElementById("a").style.left = 
		parseInt(document.getElementById("a").style.left) + (xSpeed * level) + "px";
	var width = window.innerWidth;
	var img = document.getElementById("a");
	//hits right wall
	if((img.clientWidth + parseInt(img.style.left)) >= width){
		bounceCount++;
		//direction = "left";
		clearInterval(xMoveTimer);
		xMoveTimer = null;
		xMoveTimer = setInterval("moveLeft()", 10);
	}
}
	
function moveLeft(){
	document.getElementById("a").style.left = 
		parseInt(document.getElementById("a").style.left) - (xSpeed * level) + "px";
		
	var img = document.getElementById("a");
	//hits left wall
	if(parseInt(img.style.left) <= 0){
		bounceCount++;
		//direction = "right";
		clearInterval(xMoveTimer);
		xMoveTimer = null;
		xMoveTimer = setInterval("moveRight()", 10);
	}
}

function moveDown(){
	document.getElementById("a").style.top = 
		parseInt(document.getElementById("a").style.top) + (ySpeed * level) + "px";
		
	var img = document.getElementById("a");
	var height = window.innerHeight;
	//hits bottom wall
	if((img.clientHeight + parseInt(img.style.top)) >= height){
		bounceCount++;
		//direction = "right";
		clearInterval(yMoveTimer);
		yMoveTimer = null;
		yMoveTimer = setInterval("moveUp()", 10);
	}
}

function moveUp(){
	document.getElementById("a").style.top = 
		parseInt(document.getElementById("a").style.top) - (ySpeed * level) + "px";
		
	var img = document.getElementById("a");
	//hits top wall
	if(parseInt(img.style.top) <= 0){
		bounceCount++;
		//direction = "right";
		clearInterval(yMoveTimer);
		yMoveTimer = null;
		yMoveTimer = setInterval("moveDown()", 10);
	}
}

function timer(){
	var picTimer = setTimeout(inputScore,5000);
}

function inputScore(){
	var userGuess = prompt("How many times did it bounce?");
	if (userGuess != null){
		//inputs letters
		if($.isNumeric(userGuess) == false){
			alert("Please input answer as a number.");
			inputScore();
		//correct answer
		}else if(userGuess == bounceCount){
			alert("Correct!");
			score = score + (level * 100);
			level++;
			$(".countPic").remove();
			clearInterval(xMoveTimer);
			clearInterval(yMoveTimer);
			resetValues();
			$("#a").remove();
			$("#info").remove();
			displayScoreLevel();
			/*var disp = setInterval(displayScoreLevel,10);
			setTimeout(clearInterval(disp),5000);*/
			//setTimeout(initPic,5000);
			distractions(level);
			initPic();
			$("#a").ready(picMove(),timer());
		//no input
		}else if(userGuess == ""){
			alert("Did not enter");
			inputScore();
		//wrong answer
		}else {
			alert("Wrong!");
			lives--;
			$(".countPic").remove();
			clearInterval(xMoveTimer);
			clearInterval(yMoveTimer);
			resetValues();
			$("#a").remove();
			$("#info").remove();
			if(lives > 0){
				displayScoreLevel();
				/*var disp = setInterval(displayScoreLevel,10);
				setTimeout(clearInterval(disp),5000);*/
				//setTimeout(initPic,5000);
				distractions(level);
				initPic();
				$("#a").ready(picMove(),timer());
			} else {
				removeDistractions();
				gameOver();
				resetGame();
			}
		}
	//pressed cancel
	} else {
		alert("Please enter a number.");
		inputScore();
	}
}

/**
	Resets values for next level
*/
function resetValues(){
	xMoveTimer = null;
	yMoveTimer = null;
	xChoice = null;
	yChoice = null;
	xLocation = null;
	yLocation = null;
	bounceCount = 0;
}

function displayScoreLevel(){
	//document.write("Lives: " + lives + "<br>Level: " + level);
	var t = document.createElement("p");
	var node1 = document.createTextNode("Lives: " + lives);
	var nodeBr1 = document.createElement("br");
	var node2 = document.createTextNode("Level: " + level);
	var nodeBr2 = document.createElement("br");
	var node3 = document.createTextNode("Score: " + score);
	t.appendChild(node1);
	t.appendChild(nodeBr1);
	t.appendChild(node2);
	t.appendChild(nodeBr2);
	t.appendChild(node3);
	t.setAttribute("id","info");
	document.body.appendChild(t);
}

/**
	Resets all values of the game
*/
function resetGame(){
	xMoveTimer = null;
	yMoveTimer = null;
	bounceCount = 0;
	xSpeed = 3;
	ySpeed = 3;
	xChoice = null;
	yChoice = null;
	xLocation = null;
	yLocation = null;
	lives = 3;
	level = 1;
	score = 0;
}

/**
	Game Over screen
*/
function gameOver(){
	var t = document.createElement("p");
	var node1 = document.createTextNode("Game Over");
	var node2 = document.createElement("br");
	var node3 = document.createTextNode("Score: " + score);
	var node4 = document.createElement("br");
	t.appendChild(node1);
	t.appendChild(node2);
	t.appendChild(node3);
	t.appendChild(node4);
	t.setAttribute("id","gameOver");
	document.body.appendChild(t);
	
	var mainMenuBtn = $('<input type="button" value="Main Menu" id="mainmenu">');
	$("body").append(mainMenuBtn);
	$("body").append(document.createElement("br"));
	var restartBtn = $('<input type="button" value="Restart" id="restart">');
	$("body").append(restartBtn);
	
	//mainmenu button
	$("#mainmenu").click(function(){
		$("#mainmenu").remove();
		$("#restart").remove();
		$("#gameOver").remove();
		$("br").remove();
		startGame();
	});
	
	//restart button
	$("#restart").click(function(){
		$("#mainmenu").remove();
		$("#restart").remove();
		$("#gameOver").remove();
		$("br").remove();
		initPic();
		$("#a").ready(picMove(),timer());
	});
}