'use client'

import React from 'react';


function CalculatorSignButton(props) {
    const name = props.name
    const className = props.className
    let storedValue = props.storedValue
    let storedSetter = props.storedSetter;
    function appendString(){
        const lastChar = String(storedValue).substring(storedValue.length-1, storedValue.length);
        if(["+", "-"].includes(lastChar)){
            storedValue = storedValue.substring(0, storedValue.length-1);
        }
        storedSetter(storedValue + name);
    }

    return (
        <button className={className} onClick={appendString}>
            {name}
        </button>
    );
}

export default CalculatorSignButton;