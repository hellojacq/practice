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
