import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TableList from './list.jsx';
import '@testing-library/jest-dom/extend-expect';

describe('list', () => {
	test('canary', () => {
		expect(true).toEqual(true);
	});

    /*
    test('First item is bread', () => {
        const { getAllByTestId } = render(<TableList />);
        const taElement = getAllByTestId("Name");
        expect(taElement[0]).not.toBe("");
    });

	test('Bread is size Medium', () => {
	    const { getAllByTestId } = render(<TableList />);
	    const taElement = getAllByTestId("Size");
	    expect(taElement[0]).not.toBe("");
    });
    
    test('Bread comment is white bread', () => {
	    const { getAllByTestId } = render(<TableList />);
	    const taElement = getAllByTestId("Comments");
	    expect(taElement[0]).not.toBe("");
    });
    */

    // test('Items can be checkmarked', () => {
	//     const { getByTestId } = render(<TableList />);
    //     const checkbox = getByTestId("checkbox-0");
    //     fireEvent.click(checkbox);
    //     expect(checkbox.checked).toBe(true);
    // });

    // test('Multiple items can be checkmarked', () => {
	//     const { getByTestId } = render(<TableList />);
    //     const checkbox0 = getByTestId("checkbox-0");
    //     fireEvent.click(checkbox0);
    //     const checkbox1 = getByTestId("checkbox-1");
    //     fireEvent.click(checkbox1);
    //     expect(checkbox0.checked).toBe(true);
    //     expect(checkbox1.checked).toBe(true);
    // });

    // test('Items can be unchecked', () => {
	//     const { getByTestId } = render(<TableList />);
    //     const checkbox0 = getByTestId("checkbox-0");
    //     fireEvent.click(checkbox0);
    //     fireEvent.click(checkbox0);
    //     expect(checkbox0.checked).toBe(false);
    // });
});
