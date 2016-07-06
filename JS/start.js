function startGame(){
	//creating buttons and html elements
	var startBtn = $('<input type="button" value="Start Game" id="start">');
	$("body").append(startBtn);
	
	$("body").append(document.createElement("br"));
	
	var highscoreBtn = $('<input type="button" value="Highscore" id="highscore">');
	$("body").append(highscoreBtn);
	
	$("body").append(document.createElement("br"));
	
	var switchMusicBtn = $('<input type="button" value="Switch Music" id="switchMusic">');
	$("body").append(switchMusicBtn);
	
	$("body").append(document.createElement("br"));
	
	var muteBtn = $('<input type="button" value="Mute/Unmute" id="mute">');
	$("body").append(muteBtn);
	var playing = 0;
	
	//start button functions
	$("#start").click(function(){
		$("#start").remove();
		$("#highscore").remove();
		$("br").remove();
		$("#switchMusic").remove();
		$("#mute").remove();
		displayScoreLevel();
		distractions(level);
		initPic();
		$("#a").ready(picMove(),timer());
	});
	
	//highscore button functions
	$("#highscore").click(function(){
		$("#start").remove();
		$("#highscore").remove();
		$("br").remove();
		$("#switchMusic").remove();
		$("#mute").remove();
		highscoreScreen();
	});
	
	//switch music button function
	$("#switchMusic").click(function(){
		if($("#doublelift").prop('paused')){
			$("#doublelift").trigger('play');
			$("#apprentice").trigger('pause');
			playing = 0;
		} else {
			$("#doublelift").trigger('pause');
			$("#apprentice").trigger('play');
			playing = 1;
		}
	});
	
	//mute button functionality
	$("#mute").click(function(){
		$(".music").prop("muted",!$(".music").prop("muted"));
	});
}