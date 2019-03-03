describe('main.js', function(){
	describe('calculate()', function(){
		xit('validates expression');
		xit('calls add');
		xit('calls substract');
		xit('calls multiply');
		xit('calls divide');
		xit('validates operation');
		xit('calls updateResult');
	});

	describe('updateResult()',function(){
		let element;
		beforeAll(function(){
			// Excuted ONCE before all specs are executed.
			element = document.createElement('div');
			element.setAttribute('id','result');
			document.body.appendChild(element);
		});

		afterAll(function(){
			// Excuted ONCE after all specs are executed.
			const element = document.getElementById('result');
			document.body.removeChild(element);

		})

		it('adds result to DOM element', function(){
			updateResult('5');

			expect(element.innerText).toBe('5');
		});
	});
});