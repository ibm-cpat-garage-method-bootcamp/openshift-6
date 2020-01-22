import MyForm from './item.jsx';
<<<<<<< HEAD
import { render, fireEvent, setup } from '@testing-library/react';
=======
import { render, fireEvent } from '@testing-library/react';
>>>>>>> fixed update

import React from 'react'


describe('item', ()=> {
<<<<<<< HEAD

=======
>>>>>>> fixed update
    test('canary', ()=> {
        expect(true).toEqual(true);
    });

    test('expect change name field change name state', () => {
<<<<<<< HEAD
=======
        var dom = render(document.getElementById("name"));
        fireEvent.change(dom, { target: { value: 'a' } })
        expect(dom).toBeInTheDocument()
    });

    test('expect change size field change size state', () => {
>>>>>>> fixed update
        var form = render(<MyForm />);
        const nameInput = form.getByTestId('name');
        fireEvent.change(nameInput, { target: { value: 'Bob Trufant' } });

        const nameDisplay = form.getByTestId('nameDisplay');
        expect(nameDisplay.textContent).toContain('Bob Trufant');
    });

    test('expect change size field change size state', () => {
        var form = render(<MyForm />);
        const sizeInput = form.getByTestId('size');
        fireEvent.change(sizeInput, { target: { value: '16 oz' } });

        const sizeDisplay = form.getByTestId('sizeDisplay');
        expect(sizeDisplay.textContent).toContain('16 oz');
    });

    // test('expect change size field change size state', () => {
    //     var form = render(<MyForm />);
    //     form.find('input');
    //     expect(form.state.name).toEqual('abcdefg');
    // });

    // test('expect change size field change size state', () => {
    //     var form = render(<MyForm />);
    //     form.find('input');
    //     expect(form.state.name).toEqual('abcdefg');
    // });
});