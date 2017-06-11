"use strict";

var p1 = document.getElementById('p1');
console.log(p1);
var p2 = document.getElementById('p2');
console.log(p2);

var przycisk = document.getElementById('przycisk');
console.log(przycisk);

function ustawTla() {
	console.log("ustawia");
	p1.style.backgroundColor = "red";
	p2.style.backgroundColor = "yellow";
	
}
	
przycisk.onclick = ustawTla;
