function calculate(inputValue){
	// https://regex101.com
	const expression = /\+|\-|\*|\//;
	const numbers = inputValue.split(expression);
	
	const numberA = parseInt(numbers[0]);
	const numberB = parseInt(numbers[1]);
	
	const operation = inputValue.match(expression);

	if (Number.isNaN(numberA) || Number.isNaN(numberB) || operation === null){
		updateResult('Operation not recognized');
		return;
	}

	const calculator = new Calculator();
	calculator.add(numberA);

	let result;
	switch(operation[0]){
		case '+':
			result = calculator.add(numberB);
			break;
		case '-':
			result = calculator.substract(numberB);
			break;
		case '*':
			result = calculator.multiply(numberB);
			break;
		case '/':
			
			if (numberB === 0){
				updateResult('Cannot divide by zero');
				return;
			}

			result = calculator.divide(numberB);
			break;
	}

	updateResult(result);
}

function updateResult(result){
	const element = document.getElementById('result');

	if(element){
		element.innerText = result;
	}
}
