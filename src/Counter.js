import {useState, useEffect} from "react";
function Counter() {
    const storedNumber = Number(localStorage.getItem('count'));
    const [count, setCount] = useState(Number.isInteger(storedNumber) ? storedNumber : 0
    );

    const increase = () => {
        setCount(count => count + 1);
    };

    useEffect(() => {
        localStorage.setItem('count', String(count));
    }, [count]);

    return (
        <div className="counter">
            <h1>Counter Application</h1>
                <button onClick={increase}>
                    +
                </button>
            <h1 className="counter_output">{count}</h1>
        </div>
    )
}

export default Counter;
