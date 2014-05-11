var img = document.getElementById('logo');		
var t = document.getElementById('text');
var c = document.getElementById('cube');
t.style.WebkitAnimationPlayState="paused";
c.style.WebkitAnimationPlayState="paused";		
img.style.WebkitAnimationPlayState="paused";		
var p = false;
var play = function(){
	c.style.WebkitAnimationPlayState="running";
	t.style.WebkitAnimationPlayState="running";
	img.style.WebkitAnimationPlayState="running";				
	p=true;
}
var pause = function(){
	c.style.WebkitAnimationPlayState="paused";
	t.style.WebkitAnimationPlayState="paused";
	img.style.WebkitAnimationPlayState="paused";	
	p=false;
}
var toggleAnimation = function(){
	if(p){
		pause();
	}
	else{
		play();
	}
}