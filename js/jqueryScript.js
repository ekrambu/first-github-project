
	function createFunction(){
		
		var newElementHeading = document.createElement('h1');
		var newElementPragraph = document.createElement('p');
		
		newElementHeading.innerHTML = "This is heading.";
		newElementPragraph.innerHTML = "This is pragraph.";
	 
		document.getElementById('ddiv').appenChild(newElementHeading);
		document.getElementById('ddiv').appenChild(newElementPragraph);
	}
	
	document.getElementById('btn').onclick = function (){
		createFunction();
	};
	

/*
$('#submit').click(function(){
    var firstNameValue = $('#firstName').val();
	var lastNameValue = $('#lastName').val();
	var fullName = firstNameValue+' '+lastNameValue;
	$('#fullName').val(fullName);
});



/*
$('#firstName').keyup(function(){
    var firstNameValue = $('#firstName').val();
	$('#nameOne').text(firstNameValue);
});

$('#lastName').keyup(function(){
	var lastNameValue = $('#lastName').val();
	$('#nameTwo').text(lastNameValue);
});

$('#lastName').blur(function(){
	var firstNameValue = $('#firstName').val();
	var lastNameValue = $('#lastName').val();
	$('#nameTotal').text(firstNameValue+' '+lastNameValue);
});


$('#clickMe').click(function() {
		var OneNameValue = $('#oneName').val();
		var TwoNameValue = $('#twoName').val();
		var totalName = OneNameValue+' '+TwoNameValue;
		
		$('#totalName').val = (totalName);
		
	});
	
*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	