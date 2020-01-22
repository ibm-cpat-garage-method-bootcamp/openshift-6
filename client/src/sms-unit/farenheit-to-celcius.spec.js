const farenheitToCelcius = (temp) => {
    if (typeof temp !== 'number') {
        throw new Error('not a number');
    }
    return ((temp-32)*5)/9;
}

describe('farenheit-to-celcius', () => {
    test('canary verifies test tools', () => {
        expect(true).toEqual(true);
    });

    test('32 degrees farenheit is 0 degrees celcius', () => {

        expect(farenheitToCelcius(32)).toEqual(0);
    });

    test('212 degrees farenheit to 100 degrees celcius', () => {
        expect(farenheitToCelcius(212)).toEqual(100);
    });

    test('when the value passed in is not a number then throw an error', () => {
        expect( () => {
            farenheitToCelcius('test');
        }).toThrow(new Error('not a number'));
    });
});