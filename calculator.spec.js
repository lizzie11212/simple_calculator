describe('calculator.js', function(){
	describe('Calculator', function(){
		let calculator;
		let calculator2;

		beforeEach(function(){
			// Anything inside this block executes before 
			// each spec (it) inside this describe.
			calculator = new Calculator();
			calculator2 = new Calculator();

		})

		afterEach(function(){
			// Anything inside this block executes after
			// each spec (it) inside this describe.

		})

		it('should initialize the total', function(){
			expect(calculator.total).toBe(0);
			expect(calculator.total).toBeFalsy();
		})

		it('can be instantiated', function(){
			jasmine.addMatchers(customMatchers);

			expect(calculator).toBeCalculator(); // custom matcher !
			expect(calculator).toBeTruthy();
			expect(calculator2).toBeTruthy();
			expect(calculator).toEqual(calculator2);
			expect(calculator.constructor.name/* Calculator */).toContain("Calc");
		})

		it('instantiates unique object', function(){
			expect(calculator).not.toBe(calculator2);
		})

		it('has common operations', function(){
			expect(calculator.add).toBeDefined() //or not.toBeUndefined();
			expect(calculator.substract).toBeDefined();
			expect(calculator.multiply).toBeDefined();
			expect(calculator.divide).toBeDefined();
		})

		it('can overwrite total', function(){
			calculator.total = null;
			expect(calculator.total).toBeNull();
		})

		describe('add()',function(){
			it('should add numbers to total', function(){
		//create a new calculator
				calculator.add(5);
				// expect total to be 5
				expect(calculator.total).toBe(5);
			});

			it ('returns total', function(){
				calculator.total = 50;

				expect(calculator.add(20)).toBe(70);
				expect(calculator.total).toMatch(/-?\d+/);
				expect(typeof calculator.total).toMatch('number');
				expect(calculator.total).toBeNumber(); //from third party matchers jasmine-matchers.js
				expect(calculator.total).toEqual(jasmine.anything());
			});
		})

		describe('substract()', function(){
			it('should substract numbers to total', function(){
				calculator.total = 30;
				calculator.substract(5);
				expect(calculator.total).toBe(25);
			});
		})
		
		describe('multiply()', function(){
			it('should multiply total by number', function(){
				calculator.total = 100;
				calculator.multiply(2);
				expect(calculator.total).toBe(200);
			});

			it ('does not hadle NaN', function(){
				calculator.total = 20;
				calculator.multiply('a');
				expect (calculator.total).toBeNaN(); 
			})
		})

		describe('divide()', function(){
			it('should divide total by number', function(){
				calculator.total = 200;
				calculator.divide(2);
				expect(calculator.total).toBe(100);
			});

			it ('handles divide by zero', function(){
				expect(function(){ calculator.divide(0) }).toThrow();
				expect(function(){ calculator.divide(0) }).toThrowError(Error);
				expect(function(){ calculator.divide(0) }).toThrowError(Error, 'Cannot divide by zero');
			})
		})		
	})
});
