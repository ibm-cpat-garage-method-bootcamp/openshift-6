import React from 'react'

var input;
export default function itemList() {
    return (
        <div>
            <form>
                <input id="name" placeholder="" ref={input}></input>
            </form>
        </div>
    )
}

