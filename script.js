function calculate() {
	input = document.getElementById('expression').value;
	document.getElementById('expression').value = eval(input);
	console.log(eval(input));
}

function clear() {
	console.log("test");
	document.getElementById('expression').value='';
}