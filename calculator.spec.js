describe('calculator.js', function(){
	it('should add numbers to total', function(){
		//create a new calculator
		const calculator = new Calculator();
		calculator.add(5);
		// expect total to be 5
		expect(calculator.total).toBe(5);
	});

	it('should substract numbers to total', function(){
		const calculator = new Calculator();
		calculator.total = 30;
		calculator.substract(5);
		expect(calculator.total).toBe(25);
	});

	it('should multiply total by number', function(){
		const calculator = new Calculator();
		calculator.total = 100;
		calculator.multiply(2);
		expect(calculator.total).toBe(200);
	});

	it('should divide total by number', function(){
		const calculator = new Calculator();
		calculator.total = 200;
		calculator.divide(2);
		expect(calculator.total).toBe(100);
	});
});
