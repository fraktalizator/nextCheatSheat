'use client'
import React, {useState} from 'react';
import CalculatorScreen from "./CalculatorScreen";
import CalculatorButtonsContainer from "./CalculatorButtonsContainer";
import './calc.css'

function Calculator(props) {
    let [storedValue, setStoredValue] = useState("");
    return (
        <div className="calculator m-auto">
            <CalculatorScreen storedValue={storedValue}/>

            <CalculatorButtonsContainer storedValue={storedValue} storedSetter={setStoredValue}/>
        </div>
    );
}

export default Calculator;