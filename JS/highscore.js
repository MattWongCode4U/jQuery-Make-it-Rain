function highscoreScreen(){
	var t = document.createElement("p");
	var node1 = document.createTextNode("Highscore");
	t.appendChild(node1);
	t.setAttribute("id","gameover");
	document.body.appendChild(t);
	
	var mainBtn = $('<input type="button" value="Main Menu" id="mainmenu">');
	$("body").append(mainBtn);
	
	$("#mainmenu").click(function(){
		$("#mainmenu").remove();
		$("#gameover").remove();
		startGame();
	});
}