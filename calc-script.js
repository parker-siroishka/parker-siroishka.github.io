$(document).ready(function() {
	$("#equals").click(function() {
		let val = document.getElementById("expression").value;
		try {
			document.getElementById("expression").value = eval(val); 
			document.getElementById("expression-answer-text").innerHTML = val + "=" +eval(val).toString();
		}catch (e) {
		document.getElementById("expression").value = "Invalid Expression!";
		document.getElementById("expression-answer-text").innerHTML = val + "=ERROR";
		}
	}); 
	// Row 1
	$("#C").click(function() {
		document.getElementById("expression").value = "";
	});
	$("#CE").click(function() {
		let val = document.getElementById("expression").value;
		if (val === "Invalid Expression!") {
			document.getElementById("expression").value = "";
		}else {
			document.getElementById("expression").value = val.substring(0, val.length-1);
		}
	});
	$("#lb").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "(";
	});
	$("#rb").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + ")";
	});
	// Row 2
	$("#7").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "7";
	});
	$("#8").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "8";
	});
	$("#9").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "9";
	});
	$("#div").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "/";
	});
	// Row 3
	$("#4").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "4";
	});
	$("#5").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "5";
	});
	$("#6").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "6";
	});
	$("#mult").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "*";
	});
	//Row 4
	$("#1").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "1";
	});
	$("#2").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "2";
	});
	$("#3").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "3";
	});
	$("#sub").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "-";
	});
	// Row 5
	$("#0").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "0";
	});
	$("#dec").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + ".";
	});
	$("#add").click(function() {
		let val = document.getElementById("expression").value;
		document.getElementById("expression").value = val + "+";
	});


})