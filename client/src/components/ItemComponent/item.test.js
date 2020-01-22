import ItemList from './item.jsx';
import {render} from '@testing-library/react';
import React from 'react'

describe('item', ()=> {
    test('canary', ()=> {
        expect(true).toEqual(true);
    });

    test('I can input a name for the item', () => {
        var itemList = render(<ItemList />);
        var name = document.getElementById("name");
        expect(name.value).toEqual(itemList.input);
    });
});