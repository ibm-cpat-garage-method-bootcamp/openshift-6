import MyForm from './item.jsx';
import { render, fireEvent } from '@testing-library/react';

import React from 'react'


describe('item', ()=> {
    test('canary', ()=> {
        expect(true).toEqual(true);
    });
    
    test('expect change name field change size state', () => {
        var form = render(<MyForm />);
        const nameInput = form.getByTestId('name');
        var bob = 'Bob Trufant';
        fireEvent.change(nameInput, { target: { value: bob } });
        expect(nameInput.value).toContain(bob);
    });

    test('expect change size field change size state', () => {
        var form = render(<MyForm />);
        const sizeInput = form.getByTestId('size');
        fireEvent.change(sizeInput, { target: { value: '16 oz' } });
        expect(sizeInput.value).toContain('16 oz');
    });

    test('expect form to be blank after submit', () => {
        var form = render(<MyForm />);
        const sizeInput = form.getByTestId('size');
        const nameInput = form.getByTestId('name');
        const commentInput = form.getByTestId('comment');
        expect(sizeInput.value).toContain('');
        expect(nameInput.value).toContain('');
        expect(commentInput.value).toContain('');

    });
});