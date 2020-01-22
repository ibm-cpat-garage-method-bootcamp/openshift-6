import MyForm from './item.jsx';
import { render, fireEvent } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-15';
import {configure, mount, shallow} from 'enzyme'

import React from 'react'


describe('item', ()=> {

    beforeAll(() => {
        configure({ adapter: new Adapter() });
    });

    test('canary', ()=> {
        expect(true).toEqual(true);
    });

    test('expect change name field change name state', () => {
        var dom = shallow(<MyForm />);
        fireEvent.click(document.getElementById("name"));
        expect(document.querySelector("input#name")).toBe('A');
    });

    test('expect change size field change size state', () => {
        var form = render(<MyForm />);
        form.find('input');
        expect(form.state.name).toEqual('abcdefg');
    });

    test('expect change size field change size state', () => {
        var form = render(<MyForm />);
        form.find('input');
        expect(form.state.name).toEqual('abcdefg');
    });
});