var img = document.getElementById('logo');		
var t = document.getElementById('text');
var c = document.getElementById('cube');
t.style.WebkitAnimationPlayState="paused";
c.style.WebkitAnimationPlayState="paused";		
img.style.WebkitAnimationPlayState="paused";		
var trial = function(s){
	c.style.WebkitAnimationPlayState="running";
	t.style.WebkitAnimationPlayState="running";
	img.style.WebkitAnimationPlayState="running";				
}
var trigger = function(){
	trial("play");		
}