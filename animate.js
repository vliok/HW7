var s = document.getElementById("s");
var g = document.getElementById("g");
var d = document.getElementById("d");
var stop = document.getElementById("stop");

var rid = 0;

var go = function() {
    window.cancelAnimationFrame( rid );
    var x = 0;
    
    var circle = function() {
	var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
	s.appendChild(c);
	var halfHeight = (Integer.parseInt(s.getAttribute("height")) / 2).toString();
	var halfWidth = (Integer.parseInt(s.getAttribute("width")) / 2).toString();
	c.setAttribute("cx",halfHeight);
	c.setAttribute("cy",halfWidth);
	c.setAttribute("r",x);
	c.setAttribute("fill","red");
    };
};
    
g.addEventListener("click",go);
d.addEventListener("click",dvd);
stop.addEventListener("click",stopIt);
