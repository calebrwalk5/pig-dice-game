function rollDice() {
	var d1 = Math.floor(Math.random() * 5);
	var d2 = Math.floor(Math.random() * 5);
	d1++;
	d2++;
	if (d2 == 1) {
		document.getElementById("score").innerHTML = "You died";
		document.getElementById("d1").innerHTML = "Die 1 is: " +d1;
		document.getElementById("d2").innerHTML = "Die 2 is: " +d2;
	} else if (d1 == 1) {
		document.getElementById("score").innerHTML = "You died";
		document.getElementById("d1").innerHTML = "Die 1 is: " +d1;
		document.getElementById("d2").innerHTML = "Die 2 is: " +d2;
	} else {
		document.getElementById("d1").innerHTML = "Die 1 is: " +d1;
		document.getElementById("d2").innerHTML = "Die 2 is: " +d2;
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
