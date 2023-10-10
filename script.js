//your JS code here. If required.
const line = document.getElementById("line");

setInterval(rotate,20);
let deg = 0;
function rotate() {
	deg+=2;
	line.style.transform = `rotate(${deg}deg)`
}