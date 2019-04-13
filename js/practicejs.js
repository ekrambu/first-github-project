

	var addition = document.getElementById('addA');
		addition.onclick = function(){
			var numOneValue = Number(document.getElementById('numOne').value);
			var numTwoValue = Number(document.getElementById('numTwo').value);
			var finalResult = numOneValue + numTwoValue;
			document.getElementById('finalResult').value = finalResult;
		};
		
	var submition = document.getElementById('subS');
		submition.onclick = function(){
			var numOneValue = Number(document.getElementById('numOne').value);
			var numTwoValue = Number(document.getElementById('numTwo').value);
			var finalResult = numOneValue - numTwoValue;
			document.getElementById('finalResult').value = finalResult;
		};
		
	var multiplication = document.getElementById('mulM');
		multiplication.onclick = function(){
			var numOneValue = Number(document.getElementById('numOne').value);
			var numTwoValue = Number(document.getElementById('numTwo').value);
			var finalResult = numOneValue * numTwoValue;
			document.getElementById('finalResult').value = finalResult;
		};	
	
	var division = document.getElementById('divD');
		division.onclick = function(){
			var numOneValue = Number(document.getElementById('numOne').value);
			var numTwoValue = Number(document.getElementById('numTwo').value);
			var finalResult = numOneValue / numTwoValue;
			document.getElementById('finalResult').value = finalResult;
		};
	
	var modulation = document.getElementById('modM');
		modulation.onclick = function(){
			var numOneValue = Number(document.getElementById('numOne').value);
			var numTwoValue = Number(document.getElementById('numTwo').value);
			var finalResult = numOneValue % numTwoValue;
			document.getElementById('finalResult').value = finalResult;
		};
		
	/*Second JavaScrip*/

	var add = document.getElementById('add');
		add.onclick = function(){
			var firstNumValue = Number(document.getElementById('firstNum').value);
			var secondNumValue = Number(document.getElementById('secondNum').value);
			var output = firstNumValue + secondNumValue;
			document.getElementById('output').value = output;
		};
		
	var sub = document.getElementById('sub');
		sub.onclick = function(){
			var firstNumValue = Number(document.getElementById('firstNum').value);
			var secondNumValue = Number(document.getElementById('secondNum').value);
			var output = firstNumValue - secondNumValue;
			document.getElementById('output').value = output;
		};
		
	var mul = document.getElementById('mul');
		mul.onclick = function(){
			var firstNumValue = Number(document.getElementById('firstNum').value);
			var secondNumValue = Number(document.getElementById('secondNum').value);
			var output = firstNumValue * secondNumValue;
			document.getElementById('output').value = output;
		};
		
	var div = document.getElementById('div');
		div.onclick = function(){
			var firstNumValue = Number(document.getElementById('firstNum').value);
			var secondNumValue = Number(document.getElementById('secondNum').value);
			var output = firstNumValue / secondNumValue;
			document.getElementById('output').value = output;
		};
	
	var mod = document.getElementById('mod');
		mod.onclick = function(){
			var firstNumValue = Number(document.getElementById('firstNum').value);
			var secondNumValue = Number(document.getElementById('secondNum').value);
			var output = firstNumValue % secondNumValue;
			document.getElementById('output').value = output;
		};
		
	/*Third JavaScrip*/

	var addd = document.getElementById('addd');
		addd.onclick = function(){
			var topNumValue = Number(document.getElementById('top').value);
			var bottomNumValue = Number(document.getElementById('bottom').value);
			var result = topNumValue + bottomNumValue;
			document.getElementById('result').value = result;
		};
		
	var subb = document.getElementById('subb');
		subb.onclick = function(){
			var topNumValue = Number(document.getElementById('top').value);
			var bottomNumValue = Number(document.getElementById('bottom').value);
			var res = topNumValue - bottomNumValue;
			document.getElementById('result').value = res;
		};
		
	var mul = document.getElementById('mull');
		mul.onclick = function(){
			var one = Number(document.getElementById('top').value);
			var two = Number(document.getElementById('bottom').value);
			var output = one * two;
			document.getElementById('result').value = output;
		};
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		