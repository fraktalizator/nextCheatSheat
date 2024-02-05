'use client'

import React from 'react';

export default function CalculatorEnterButton(props) {
    const name = props.name
    const className = props.className
    let storedValue = props.storedValue
    let storedSetter = props.storedSetter;
    function calculate(){
        let storedValueWithoutLastSymbol = eval(storedValue);
        storedSetter(storedValueWithoutLastSymbol);
    }

    return (
        <button className={className} onClick={calculate}>
            {name}
        </button>
    );
}