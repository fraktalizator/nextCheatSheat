'use client'
function CalculatorButton(props) {
    const name = props.name
    const className = props.className
    let storedValue = props.storedValue
    let storedSetter = props.storedSetter;
    function appendString(){
        storedSetter(storedValue + name);
    }

    return (
        <button className={className} onClick={appendString}>
            {name}
        </button>
    );
}

export default CalculatorButton;