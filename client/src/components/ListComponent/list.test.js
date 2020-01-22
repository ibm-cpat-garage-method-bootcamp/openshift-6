import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import TableList from "./list.jsx";
import "@testing-library/jest-dom/extend-expect";

describe('list', ()=> {
    test('canary', ()=> {
        expect(true).toEqual(true);
    });

    
    test('There are rows in the body', () => {
        const { getByTestId } = render(<TableList />);
        const taElement = getByTestId("body");
        expect(taElement.children.length).toBe(3);
    });

    test('Text is bread', () => {
        const { getByTestId } = render(<TableList />);
        const taElement = getByTestId("body");
        // console.log(breadRow);
        expect(breadRow.value).toBe("Bread");
    });

    
    // test('There is the bread row in the document', () => {
    //     const { getByTestId } = render(<TableList />);
    //     const taElement = getByTestId("Name");
    //     expect(taElement).toBeInTheDocument();
    // });
});