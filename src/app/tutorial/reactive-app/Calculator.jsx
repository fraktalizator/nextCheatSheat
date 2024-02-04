'use client'
import React, {useState} from 'react';
import CalculatorScreen from "./CalculatorScreen";
import CalculatorButtonsContainer from "./CalculatorButtonsContainer";
import './calc.css'

function Calculator(props) {
    let [storedValue, setStoredValue] = useState("test");
    return (
        <div className="calculator">
            <CalculatorScreen storedValue={storedValue}/>

            <CalculatorButtonsContainer storedValue={storedValue} storedSetter={setStoredValue}/>
        </div>
    );
}

export default Calculator;