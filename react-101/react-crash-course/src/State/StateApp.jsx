import { useState } from "react";

const StateApp = () => {
    return (
        <>
            <Counter />
            <Counter initValue={5} />
        </>
    );
};

function Counter({initValue = 0}) {
    const [count, setCount] = useState(initValue);

    return (
    <>
        <button 
        onClick={() => {
            setCount(count + 1);
            setCount(count + 1); // count is staled and still the same value
            setCount((prevCount) => prevCount + 1);
        }}>Increment</button>
        <h3>Count: {count}</h3>
    </>
    );
}
export default StateApp;