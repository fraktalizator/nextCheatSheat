'use client'

import React from 'react';
import './calc.css'

function CalculatorScreen(props) {
    let storedValue = props.storedValue
    return (
        <div id="calculatorScreen">
            {storedValue}
        </div>
    );
}

export default CalculatorScreen;