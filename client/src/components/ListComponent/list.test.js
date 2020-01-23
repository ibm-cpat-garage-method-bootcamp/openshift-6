import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableList from './list.jsx';
import '@testing-library/jest-dom/extend-expect';

describe('list', () => {
	test('canary', () => {
		expect(true).toEqual(true);
	});


    test('There are four rows in the body', () => {
        const { getByTestId } = render(<TableList />);
        const taElement = getByTestId("body");
        expect(taElement.children.length).toBe(4);
    });

    test('First item is bread', () => {
        const { getAllByTestId } = render(<TableList />);
        const taElement = getAllByTestId("Name");
        expect(taElement[0].innerHTML).toBe("Bread");
    });


	test('Bread is size Medium', () => {
	    const { getAllByTestId } = render(<TableList />);
	    const taElement = getAllByTestId("Size");
	    expect(taElement[0].innerHTML).toBe("Medium");
    });
    
    test('Bread comment is white bread', () => {
	    const { getAllByTestId } = render(<TableList />);
	    const taElement = getAllByTestId("Comments");
	    expect(taElement[0].innerHTML).toBe("Get white bread");
	});
});
