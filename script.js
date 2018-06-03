var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);
// body.style.background = "red";

color1.addEventListener("input", setGradient); //function(){
	// console.log(color1.value);
	// body.style.background = 
	// "linear-gradient(to right, " 
	// + color1.value 
	// + "," 
	// + color2.value 
	// + ")";
// })
color2.addEventListener("input", setGradient);//function(){
	// console.log(color2.value);
// 	body.style.background = 
// 	"linear-gradient(to right, " 
// 	+ color1.value 
// 	+ "," 
// 	+ color2.value 
// 	+ ")";
// })