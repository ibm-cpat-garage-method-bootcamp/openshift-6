import MyForm from './item.jsx';
import { render, fireEvent } from '@testing-library/react';

import React from 'react'


describe('item', ()=> {
    test('canary', ()=> {
        expect(true).toEqual(true);
    });

    test('expect change size field change size state', () => {
        var form = render(<MyForm />);
        const nameInput = form.getByTestId('name');

        const nameDisplay = form.getByTestId('nameDisplay');
        expect(nameDisplay.textContent).toContain('Name: ');
    });

    test('expect change size field change size state', () => {
        var form = render(<MyForm />);
        const sizeInput = form.getByTestId('size');

        const sizeDisplay = form.getByTestId('sizeDisplay');
        expect(sizeDisplay.textContent).toContain('Size: ');
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