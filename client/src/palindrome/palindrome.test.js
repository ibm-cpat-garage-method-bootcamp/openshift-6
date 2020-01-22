// 'a' is a palindrome
// 'mom' is a palindrome
// 'dude' is not a palindrome
// 'mom mom' is a palindrome
// 'mom dad' is not a palindrome
// ' ' (space) is a palindrome? throws an Error
// '' (empty string) throws an error? throws an Error
// 'moM' is a palindrome?
// 'race car' is a palindrome
// 'a man a plan a canal panama' is a palindrome
const palindrome = (str) => {
	str = str.replace(/\s/g, '');
	if (str.length === 0) {
		throw new Error('INVALID STRING');
	}
	return str === str.split('').reverse().join('');
};

describe('Test for palindrome.js', () => {
	test('canary test for testing tools ', () => {
		expect(true).toEqual(true);
	});
	test('expect "a" to be a TRUE palindrome', () => {
		expect(palindrome('a')).toEqual(true);
	});

	test('expect "mom" to be a TRUE palindrome', () => {
		expect(palindrome('mom')).toEqual(true);
	});

	test('expect "mom mom" to be a TRUE palindrome', () => {
		expect(palindrome('mom mom')).toEqual(true);
	});

	test('expect "mom dad" to be a FALSE palindrome', () => {
		expect(palindrome('mom dad')).toEqual(false);
	});

	test('when " " (space) to throw an ERROR(INVALID STRING)', () => {
		expect(() => {
			palindrome(' ');
		}).toThrow(new Error('INVALID STRING'));
	});

	test("'' (empty string) to throw an ERROR(INVALID STRING)", () => {
		expect(() => {
			palindrome('');
		}).toThrow(new Error('INVALID STRING'));
	});

	test('expect "moM" to be a FALSE palindrome', () => {
		expect(palindrome('moM')).toEqual(false);
	});

	test('expect "recar car" to be a TRUE palindrome', () => {
		expect(palindrome('recar car')).toEqual(false);
	});

	test('expect "a man a plan a canal panama" to be a TRUE palindrome', () => {
		expect(palindrome('a man a plan a canal panama')).toEqual(true);
	});
});
