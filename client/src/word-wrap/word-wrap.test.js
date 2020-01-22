// Word Wrap kata:
// Given an input string and a column number, write a
// function that returns the string, but with line breaks inserted
// at just the right places to make sure that no line is longer than the column number.
// You try to break lines at word boundaries but long words (words that are longer that the column width)
// should be broken at the column width. You should also try to make each line as long as possible without exceeding the column width.
// Like a word processor, break the line by replacing the last space in a line with a newline

const wordWrap = (words, size) => {
	var count = 0;
	var last_space = null;
	var arr = words.split('');

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === ' ') {
			last_space = i;
		}

		if (count >= size) {
			count = 0;
			if (arr[i + 1] === ' ' || last_space == null) {
				arr[i] = [ '\n', arr[i].trim() ];
			} else {
				arr[last_space] = '\n';
			}
		} else {
			count++;
		}
	}

	return arr.flat().join('');
};

describe('word-wrap tests', () => {
	test('canary', () => {
		expect(true).toEqual(true);
	});

	test('{a, 1}', () => {
		expect(wordWrap('a', 1)).toEqual('a');
	});

	test('{aa, 1}', () => {
		expect(wordWrap('aa', 1)).toEqual('a\na');
	});

	test('{this is a test, 4}', () => {
		expect(wordWrap('this is a test', 4)).toEqual('this\nis a\ntest');
	});

	test('{a aa, 3}', () => {
		expect(wordWrap('a aa', 3)).toEqual('a\naa');
	});

	test('{      a aa, 3}', () => {
		expect(wordWrap('a aa', 3)).toEqual('a\naa');
	});

	test('{a aa            , 3}', () => {
		expect(wordWrap('a aa', 3)).toEqual('a\naa');
	});

	test('{      a aa            , 3}', () => {
		expect(wordWrap('a aa', 3)).toEqual('a\naa');
	});

	test('{hello my name is napoleon, 8}', () => {
		expect(wordWrap('hello my name is napoleon', 8)).toEqual('hello my\nname is\nnapoleon');
	});
});
