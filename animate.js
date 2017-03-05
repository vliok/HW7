var s = document.getElementById("s");
var g = document.getElementById("g");
var d = document.getElementById("d");
var stop = document.getElementById("stop");

var rid = 0;

var go = function() {
    window.cancelAnimationFrame( rid );
    var r = 0;
    var x = 2;
    
    var circle = function() {
	var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
	if ( s.hasChildNodes() ) {
	    s.removeChild(s.childNodes[0]);
	}
	s.appendChild(c);
	var halfHeight = (parseInt(s.getAttribute("width")) / 2).toString();
	var halfWidth = (parseInt(s.getAttribute("height")) / 2).toString();
	c.setAttribute("cx",halfHeight);
	c.setAttribute("cy",halfWidth);
	c.setAttribute("r",r.toString());
	c.setAttribute("fill","red");
	if (r >= halfHeight || r >= halfWidth || r+x < 0) {
	    x = -x;
	}
	r = r + x;
	rid = window.requestAnimationFrame( circle );
    };
    
    circle();
};

var dvd = function() {
    window.cancelAnimationFrame( rid );
    var x = parseInt(s.getAttribute("width")) / 2;
    var y = parseInt(s.getAttribute("height")) / 2;
    var xspeed = 3;
    var yspeed = 3;
    var width = 50;
    var height = 50;
    function move() {
        var r = document.createElementNS("http://www.w3.org/2000/svg","rect");
	if ( s.hasChildNodes() ) {
            s.removeChild(s.childNodes[0]);
	}
        s.appendChild(r);
	if (x >= parseInt(s.getAttribute("width")) - width || x <= 0) {
            xspeed = -xspeed;
        };
        if (y >= parseInt(s.getAttribute("height")) - height|| y <= 0) {
            yspeed = -yspeed;
        };
        r.setAttribute("x",x.toString());
	r.setAttribute("y",y.toString());
	r.setAttribute("width",width.toString());
	r.setAttribute("height",height.toString());
	r.setAttribute("fill","red");
        x = x + xspeed;
        y = y + yspeed;
        rid = window.requestAnimationFrame( move );
    };
    move();
};

var stopIt = function() {
    window.cancelAnimationFrame( rid );
};

g.addEventListener("click",go);
d.addEventListener("click",dvd);
stop.addEventListener("click",stopIt);
