xDistTimer1 = null;
yDistTimer1 = null;
xDistTimer2 = null;
yDistTimer2 = null;

function distractions(level){
	removeDistractions();
	if(level >= 1){	
		var img = document.createElement("img");
		img.setAttribute("src", "Images/coin.png");
		img.setAttribute("id", "coin");
		img.setAttribute("class", "distract");
		img.style.left = Math.ceil(Math.random() * window.innerWidth * 0.80) + window.innerWidth * 0.05 + "px";
		img.style.top = Math.ceil(Math.random() * window.innerHeight * 0.650) + window.innerHeight * 0.05 + "px";
		img.style.position = "absolute";
		document.body.appendChild(img);
		move("#coin", 1);
	}
	if(level >= 2){
		var img = document.createElement("img");
		img.setAttribute("src", "Images/piles_of_money.png");
		img.setAttribute("id", "money");
		img.setAttribute("class", "distract");
		img.style.left = Math.ceil(Math.random() * window.innerWidth * 0.80) + window.innerWidth * 0.05 + "px";
		img.style.top = Math.ceil(Math.random() * window.innerHeight * 0.650) + window.innerHeight * 0.05 + "px";
		img.style.position = "absolute";
		document.body.appendChild(img);
		move("#money", 2);
	}
}

function move(id, num){
	if(num == 1){
		var xRandom = Math.floor(Math.random() * 2);
		var yRandom = Math.floor(Math.random() * 2);
		if(xRandom == 0){
			xDistTimer1 = setInterval(function(){moveR1(id);},10);
		} else {
			xDistTimer1 = setInterval(function(){moveL1(id);},10);
		}
		if(yRandom == 0){
			yDistTimer1 = setInterval(function(){moveD1(id);},10);
		} else {
			yDistTimer1 = setInterval(function(){moveU1(id);},10);
		}
	}
	if(num == 2){
		var xRandom = Math.floor(Math.random() * 2);
		var yRandom = Math.floor(Math.random() * 2);
		if(xRandom == 0){
			xDistTimer2 = setInterval(function(){moveR2(id);},10);
		} else {
			xDistTimer2 = setInterval(function(){moveL2(id);},10);
		}
		if(yRandom == 0){
			yDistTimer2 = setInterval(function(){moveD2(id);},10);
		} else {
			yDistTimer2 = setInterval(function(){moveU2(id);},10);
		}
	}
}

		/*if(xRandom == 0){
			xDistTimer = setInterval(function(){moveR(i);},10);
		} else {
			xDistTimer = setInterval(function(){moveL(i);},10);
		}*/

/*function chooseDir(){
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
}*/

function moveR1(id){
	var move = $(id).css("left");
	$(id).css("left", parseInt(move) + (xSpeed * level * 1.75) + "px");
	var width = window.innerWidth;
	//hits right wall
	if((parseInt($(id).width()) + parseInt($(id).css("left"))) >= width){
		//direction = "left";
		clearInterval(xDistTimer1);
		xDistTimer1 = null;
		xDistTimer1 = setInterval(function(){moveL1(id);}, 10);
	}
}
	
function moveL1(id){
	var move = $(id).css("left");
	$(id).css("left", parseInt(move) - (xSpeed * level * 1.75) + "px");
	//hits left wall
	if(parseInt($(id).css("left")) <= 0){
		//direction = "left";
		clearInterval(xDistTimer1);
		xDistTimer1 = null;
		xDistTimer1 = setInterval(function(){moveR1(id);}, 10);
	}
}

function moveD1(id){
	var move = $(id).css("top");
	$(id).css("top", parseInt(move) + (ySpeed * level * 1.75) + "px");
	var height = window.innerHeight;
	//hits bottom wall
	if((parseInt($(id).height()) + parseInt($(id).css("top"))) >= height){
		//direction = "right";
		clearInterval(yDistTimer1);
		yDistTimer1 = null;
		yDistTimer1 = setInterval(function(){moveU1(id);}, 10);
	}
}

function moveU1(id){
	var move = $(id).css("top");
	$(id).css("top", parseInt(move) - (ySpeed * level * 1.75) + "px");
	//hits top wall
	if(parseInt($(id).css("top")) <= 0){
		//direction = "right";
		clearInterval(yDistTimer1);
		yDistTimer1 = null;
		yDistTimer1 = setInterval(function(){moveD1(id);}, 10);
	}
}

function moveR2(id){
	var move = $(id).css("left");
	$(id).css("left", parseInt(move) + (xSpeed * level * 1.75) + "px");
	var width = window.innerWidth;
	//hits right wall
	if((parseInt($(id).width()) + parseInt($(id).css("left"))) >= width){
		//direction = "left";
		clearInterval(xDistTimer2);
		xDistTimer2 = null;
		xDistTimer2 = setInterval(function(){moveL2(id);}, 10);
	}
}
	
function moveL2(id){
	var move = $(id).css("left");
	$(id).css("left", parseInt(move) - (xSpeed * level * 1.75) + "px");
	//hits left wall
	if(parseInt($(id).css("left")) <= 0){
		//direction = "left";
		clearInterval(xDistTimer2);
		xDistTimer2 = null;
		xDistTimer2 = setInterval(function(){moveR2(id);}, 10);
	}
}

function moveD2(id){
	var move = $(id).css("top");
	$(id).css("top", parseInt(move) + (ySpeed * level * 1.75) + "px");
	var height = window.innerHeight;
	//hits bottom wall
	if((parseInt($(id).height()) + parseInt($(id).css("top"))) >= height){
		//direction = "right";
		clearInterval(yDistTimer2);
		yDistTimer2 = null;
		yDistTimer2 = setInterval(function(){moveU2(id);}, 10);
	}
}

function moveU2(id){
	var move = $(id).css("top");
	$(id).css("top", parseInt(move) - (ySpeed * level * 1.75) + "px");
	//hits top wall
	if(parseInt($(id).css("top")) <= 0){
		//direction = "right";
		clearInterval(yDistTimer2);
		yDistTimer2 = null;
		yDistTimer2 = setInterval(function(){moveD2(id);}, 10);
	}
}

function removeDistractions(){
	clearInterval(xDistTimer1);
	clearInterval(xDistTimer2);
	clearInterval(yDistTimer1);
	clearInterval(yDistTimer2);
	xDistTimer1 = null;
	xDistTimer2 = null;
	yDistTimer1 = null;
	yDistTimer2 = null;
	$(".distract").remove();
}