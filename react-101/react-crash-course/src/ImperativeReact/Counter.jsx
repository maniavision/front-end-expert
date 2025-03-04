import { forwardRef, useImperativeHandle, useState } from "react";

const Counter = (props, inputRef) => {
    const [count, setCount] = useState(0);

    useImperativeHandle(inputRef, () => {
        return {
            reset: () => setCount(0) //assigning the function to reset the state to the ref
        };
    });

    return (
        <>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <p>Count: {count}</p>
        </>
    );
};

export default forwardRef(Counter);