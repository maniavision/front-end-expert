import { useEffect, useRef, useState } from "react";

// Custom hooks are just helper functions that use hooks
// used to remove redundant codes...
export default function CustomHooksApp() {

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');

    // Assync: meaning it wont block to wait the results of these..
    const prevCount = usePrevious(count);
    const prevText = usePrevious(text);

    return (<>
        <button 
            onClick={() => setCount(count + 1)}>
            Increment
        </button>
        <p>Count: {count}</p>
        <p>Previous render count: {prevCount}</p>

        <input 
            type="text" 
            value={text}
            onChange={event => setText(event.target.value)}
        />
        <p>Previous render text: {prevText}</p>
    </>);
}

function usePrevious(value) { // CUSTOM HOOKS HERE
    const prevRef = useRef();
    useEffect(() => {
        console.log('useEffect value:' + value);
        prevRef.current = value;
    }, [value]);

    return prevRef.current;
}