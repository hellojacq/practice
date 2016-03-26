var myName = "Jacq";

// function isEven (number) {
//	console.log(number%2===0);
//}

function isEven (number) {
	if(number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function isOdd (number) {
	if(number % 2 === 1 ||
		number % 2 === -1)
	{
		return true;
	} else {
		return false;
	}
}

function fizzbuzz () {
	for (var i=1; i<=100; i+=1) {
		if (i % 15 === 0) {
			document.write("fizzbuzz<br>");
		} else if (i % 5 === 0) {
			document.write("buzz<br>");
		} else if (i % 3 === 0) {
			document.write("fizz<br>");
		} else {
			document.write(i+"<br>");
		}
	}
}

// for (initial; condition; loop statement) {
  /*
   statements will be executed every time
   the for{} loop cycles, while the
   condition is satisfied
  */
 //}