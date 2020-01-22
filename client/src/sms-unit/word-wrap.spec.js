const wordWrap = (testString, columnWidth) => {
    var newString="";
    for(var i = 0; i < testString.length-1; i++) {
        if((i+1) === columnWidth) {
            newString += testString.substring(0, i-1) + '\n' + testString.substring(i, testString.length-1);
        }
    }
    return newString;
}

describe('word-wrap', () => {
    test('canary verifies test tools', () => {
        expect(true).toEqual(true);
    });

    test('one character, one column', () => {
        expect(wordWrap('a', 1)).toEqual('a');    
    }); 

    test('two characters, one column', () => {
        expect(wordWrap('aa', 1)).toEqual('a\na');    
    }); 

});