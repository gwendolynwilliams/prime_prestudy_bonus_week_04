console.log ("Hey this works!");

function myFunction1(n) {
	return n + 3;
}

function myFunction2(n) {
	return n * 4;
}

function myFunction3(n) {
	return n / 2;
}

x = myFunction1(myFunction2(myFunction3(2)));
console.log(x);
