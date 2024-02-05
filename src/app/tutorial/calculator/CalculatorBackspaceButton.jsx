'use client'
function CalculatorButton(props) {
    const name = props.name
    const className = props.className
    let storedValue = props.storedValue
    let storedSetter = props.storedSetter;
    function appendString(){
        let storedValueWithoutLastSymbol = String(storedValue).substring(0, storedValue.length-1)
        storedSetter(storedValueWithoutLastSymbol);
    }

    return (
        <button className={className} onClick={appendString}>
            {name}
        </button>
    );
}

export default CalculatorButton;