
	var btnElement = document.getElementById('btn');
		btnElement.onclick = function(){
			var firstNameValue = document.getElementById('firstName').value;
			var lastNameValue = document.getElementById('lastName').value;
			var fullName = firstNameValue+' '+lastNameValue;
				document.getElementById('fullName').value=fullName;
					
	};
	
	/*Calculator Script*/
	
	var additionBtn = document.getElementById('addition');
		additionBtn.onclick = function(){
			var firstNumberValue = Number(document.getElementById('firstNumber').value);
			var secondNumberValue = Number(document.getElementById('secondNumber').value);
			var result = firstNumberValue + secondNumberValue;
				document.getElementById('result').value = result;
	};
	
	var submitionBtn = document.getElementById('submition');
		submitionBtn.onclick = function(){
			var firstNumberValue = Number(document.getElementById('firstNumber').value);
			var secondNumberValue = Number(document.getElementById('secondNumber').value);
			var result = firstNumberValue - secondNumberValue;
				document.getElementById('result').value = result;
	};
	
	var multiplicationBtn = document.getElementById('multiplication');
		multiplicationBtn.onclick = function(){
			var firstNumberValue = Number(document.getElementById('firstNumber').value);
			var secondNumberValue = Number(document.getElementById('secondNumber').value);
			var result = firstNumberValue * secondNumberValue;
				document.getElementById('result').value = result;
	};
	
	var divisionBtn = document.getElementById('division');
		divisionBtn.onclick = function(){
			var firstNumberValue = Number(document.getElementById('firstNumber').value);
			var secondNumberValue = Number(document.getElementById('secondNumber').value);
			var result = firstNumberValue / secondNumberValue;
				document.getElementById('result').value = result;
	};
	
	var modulasBtn = document.getElementById('modulas');
		modulasBtn.onclick = function(){
			var firstNumberValue = Number(document.getElementById('firstNumber').value);
			var secondNumberValue = Number(document.getElementById('secondNumber').value);
			var result = firstNumberValue % secondNumberValue;
				document.getElementById('result').value = result;
	};
	
	/*Another Output*/
	
	var addBtn = document.getElementById('add');
		addBtn.onclick = function(){
			var beforeNumberValue = Number(document.getElementById('beforeNumber').value);
			var afterNumberValue = Number(document.getElementById('afterNumber').value);
			var output = beforeNumberValue + afterNumberValue;
			document.getElementById('output').value = output;
		};
	
	var subBtn = document.getElementById('sub');
		subBtn.onclick = function(){
			var beforeNumberValue = Number(document.getElementById('beforeNumber').value);
			var afterNumberValue = Number(document.getElementById('afterNumber').value);
			var output = beforeNumberValue - afterNumberValue;
			document.getElementById('output').value = output;
		};
	
	var mulBtn = document.getElementById('mul');
		mulBtn.onclick = function(){
			var beforeNumberValue = Number(document.getElementById('beforeNumber').value);
			var afterNumberValue = Number(document.getElementById('afterNumber').value);
			var output = beforeNumberValue * afterNumberValue;
			document.getElementById('output').value = output;
		};
	
	var divBtn = document.getElementById('div');
		divBtn.onclick = function(){
			var beforeNumberValue = Number(document.getElementById('beforeNumber').value);
			var afterNumberValue = Number(document.getElementById('afterNumber').value);
			var output = beforeNumberValue / afterNumberValue;
			document.getElementById('output').value = output;
		};
		
	var modBtn = document.getElementById('mod');
		modBtn.onclick = function(){
			var beforeNumberValue = Number(document.getElementById('beforeNumber').value);
			var afterNumberValue = Number(document.getElementById('afterNumber').value);
			var output = beforeNumberValue % afterNumberValue;
			document.getElementById('output').value = output;
		};
	
	
	// jQuery Practice:
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	