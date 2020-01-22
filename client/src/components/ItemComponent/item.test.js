import { MyForm } from './item.jsx';
import { render } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-15';
import { mount } from 'enzyme';
import React from 'react'

describe('item', ()=> {
    test('canary', ()=> {
        expect(true).toEqual(true);
    });

    test('expect change name field change name state', () => {
        var form = mount(<MyForm />);
        form.simulate('change', { target: { value: 'abcdefg'} })
        expect(form.state.name).toEqual('abcdefg');
    });
});