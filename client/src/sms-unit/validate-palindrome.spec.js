const validatePalindrome = (testString) => {
    if(typeof testString !== "string" || testString === "") throw new Error('Not a string');
    var end_char_count = testString.length-1;
    var i = 0;
    while(i < end_char_count) {
        if(testString.charAt(i) === ' ') i++;
        else if (testString.charAt(end_char_count) === ' ') end_char_count--;
        else if(testString.charAt(i) !== testString.charAt(end_char_count)) {
            return false;
        }
        i++;
        end_char_count--;
    }
    return true;
}


describe('validate-palindrome', () => {
    test('canary verifies test tools', () => {
        expect(true).toEqual(true);
    });

    test('test string that is not a palindrome', () => {
        expect(validatePalindrome('abcd')).toEqual(false);
    });

    test('input is not a string', () => {
        expect( () => {
            validatePalindrome(739247234);
        }).toThrow(new Error('Not a string'));
    });

    test('test empty string', () => {
        expect( () => {
            validatePalindrome('');
        }).toThrow(new Error('Not a string'));
    });

    test('test space character', () => {
        expect(validatePalindrome(' ')).toEqual(true);
    });

    test('test a character', () => {
        expect(validatePalindrome('a')).toEqual(true);
    });

    test('test mom string', () => {
        expect(validatePalindrome('mom')).toEqual(true);
    });

    test('test dude string to not be a palindrome', () => {
        expect(validatePalindrome('dude')).toEqual(false);
    });

    test('test race car string', () => {
        expect(validatePalindrome('race car')).toEqual(true);
    });

    test('test moM string', () => {
        expect(validatePalindrome('moM')).toEqual(false);
    });

    test('test string with a space in between', () => {
        expect(validatePalindrome('mom mom')).toEqual(true);
    });

    test('test string with multiple spaces in between', () => {
        expect(validatePalindrome('a man a plan a canal panama')).toEqual(true);
    });
});