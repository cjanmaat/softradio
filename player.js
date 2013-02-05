//Player.js

var audio = document.getElementById("audio");
var nowplaying = document.getElementById("audio");
var playbutton = document.getElementById("play");

playbutton.addEventListener("click",function() {
	if(!audio.src) {
		audio.src = "http://vip2.str.reasonnet.com/qmusic.mp3.96";
		audio.play();
		playbutton.src="img/pause.svg";
	} else {
		if(audio.paused) {
			audio.play()
			playbutton.src="img/pause.svg";
		}
		else {
			audio.pause()
			playbutton.src="img/play.svg";	
		}
	}
});

document.getElementById("radio1").addEventListener("click",function() {
	audio.src = "http://icecast.omroep.nl/radio1-bb-mp3";
});

document.getElementById("radio2").addEventListener("click",function() {
	audio.src = "http://icecast.omroep.nl/radio2-bb-mp3";
});

document.getElementById("3fm").addEventListener("click",function() {
	audio.src = "http://icecast.omroep.nl/3fm-bb-mp3";
});

document.getElementById("radio4").addEventListener("click",function() {
	audio.src = "http://icecast.omroep.nl/radio4-bb-mp3";
});

document.getElementById("radio5").addEventListener("click",function() {
	audio.src = "http://icecast.omroep.nl/radio5-bb-mp3";
});

document.getElementById("radio6").addEventListener("click",function() {
	audio.src = "http://icecast.omroep.nl/radio6-bb-mp3";
});

document.getElementById("qmusic").addEventListener("click",function() {
	audio.src = "http://vip2.str.reasonnet.com/qmusic.mp3.96";

});

document.getElementById("100pnl").addEventListener("click",function() {
	audio.src = "http://stream.100p.nl/100pctnl.mp3";
});

document.getElementById("candlelight").addEventListener("click",function() {
	audio.src = "http://ice1.streamzilla.jet-stream.nl:8000/ilsemedia=ice7";
});