import MyForm from './item.jsx';
import { render, fireEvent, setup } from '@testing-library/react';

import React from 'react'


describe('item', ()=> {

    test('canary', ()=> {
        expect(true).toEqual(true);
    });

    test('expect change name field change name state', () => {
        var form = render(<MyForm />);
        const nameInput = form.getByTestId('name');
        //const name = setup(form, 'name');
        fireEvent.change(nameInput, { target: { value: 'Bob Trufant' } });

        const nameDisplay = form.getByTestId('nameDisplay');
        expect(nameDisplay.textContent).toContain('Bob Trufant');
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