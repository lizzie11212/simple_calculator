const customMatchers = {
	toBeCalculator: function(){
		return {
			compare: function(actual){
				const result = {
					pass: actual instanceof Calculator, 
					message: ''
				}

				// Need two messages for both pass and fail because you might be negating the matchers
				// Ex: expect(calculator).not.toBeCalculator(); -->will show failure
				// messageL "Expected[object object] not to be instance of Calculator"
				if (result.pass){
					result.message = 'Expected' + actual + 'not to be instance of Calculator'
				} else {
					result.message = 'Expected' + actual + 'to be instance of Calculator'
				}

				return result;	
			}

		}
	}
}