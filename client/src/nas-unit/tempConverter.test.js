const farenheitToCelsius = (temp) => {
	if (typeof temp !== 'number') {
		throw new Error('not a number');
	}

	return (temp - 32) * 5 / 9;
};

describe('tempConverter.test.js', () => {
	describe('convert farenheit to celsius', () => {
		test('canary verifies test tools', () => {
			expect(true).toEqual(true);
		});

		test('32 degress farenheit is equal to 0 degrees', () => {
			expect(farenheitToCelsius(32)).toEqual(0);
		});

		test('212 degress farenheit is equal to 100 degrees', () => {
			expect(farenheitToCelsius(212)).toEqual(100);
		});

		test('when value is not a number then throw an error', () => {
			expect(() => {
				farenheitToCelsius('100');
			}).toThrow(new Error('not a number'));
		});
	});
});
