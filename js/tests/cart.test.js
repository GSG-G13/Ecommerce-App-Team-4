const { getTotalPrice } = require("../logic/cart.js");

describe('Testing getTotalPrice return value', () => {
	test('Should return 150 when given value', () => {
		
		expect(getTotalPrice([{name:"product1" , price:50},{name:"product1" , price:100},])).toEqual(150);
	});

	test('Should return 80 when given value', () => {
		
		expect(getTotalPrice([{name:"product1" , price:"20"},{name:"product1" , price:60},])).toEqual(80);
	});

		
});