let d1 = 0;
let d2 = 0;
let score = 0;

function main() {
	if (d2 == 1) {
		document.getElementById("score").innerHTML = "You died";
		document.getElementById("d1").innerHTML = d1;
		document.getElementById("d2").innerHTML = d2;
	} else if (d1 == 1) {
		document.getElementById("score").innerHTML = "You died";
		document.getElementById("d1").innerHTML = d1;
		document.getElementById("d2").innerHTML = d2;
	} else {
		document.getElementById("d1").innerHTML = d1;
		document.getElementById("d2").innerHTML = d2;
		calculateScore();
		function calculateScore() {
			if (score = null) {
				var score = d2 + d1;
			} else {
				var score = score + d1 + d2;
				document.getElementById("score").innerHTML = score;
			}
		}
	}	
}

function rollDice() {
	d1 = Math.floor(Math.random() * 5);
	d2 = Math.floor(Math.random() * 5);
	d1++;
	d2++;
	main();
}
