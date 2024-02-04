'use client'

import React from 'react';
import CalculatorButton from "./CalculatorButton";
import CalculatorBackspaceButton from "./CalculatorBackspaceButton";

function CalculatorButtonsContainer(props) {
        let storedValue = props.storedValue;
        let storedSetter = props.storedSetter;
    return (
        <>
            <CalculatorButton className="calculatorButton" name={"1"} storedValue={storedValue} storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton" name={"2"}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton" name={"3"}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton" name={"4"}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton" name={"5"}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton" name={"6"}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton" name={"7"}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton" name={"8"}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton" name={"9"}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton0" name={"0"}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton" name={"+"}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton" name={"-"}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorButton className="calculatorButton" name={"="}  storedValue={storedValue}  storedSetter={storedSetter}/>
            <CalculatorBackspaceButton className="calculatorButton0" name={"<-"}  storedValue={storedValue}  storedSetter={storedSetter}/>
        </>
    );
}

export default CalculatorButtonsContainer;