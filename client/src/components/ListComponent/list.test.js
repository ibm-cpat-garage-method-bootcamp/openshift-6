import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import TableList from "./list.jsx";

describe('list', ()=> {
    test('canary', ()=> {
        expect(true).toEqual(true);
    });

    /*
    test('There are rows in the body', () => {
        const { getByTestId } = render(<TableList />);
        const taElement = getByTestId("body");
        expect(taElement).toBeInTheDocument();
    });
    */

    // test('There is the bread row in the document', () => {
    //     const { getByTestId } = render(<TableList />);
    //     const taElement = getByTestId("Name");
    //     expect(taElement).toBeInTheDocument();
    // });
});