const item = require('./item.jsx');

describe('item', ()=> {
    test('canary', ()=> {
        expect(true).toEqual(true);
    });

    test('I can input a name for the item', () => {
        var curValue = item.find('name');
        item.value = 'cereal';
        expect(curValue).not.toEqual(item.value);
    });
});