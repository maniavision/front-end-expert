import { forwardRef, useRef, useState } from "react";


const RefsApp = () => {
    const [seconds, setSeconds] = useState(0);
    const timerId = useRef(null);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    
    const startTimer = () => {
        timerId.current = setInterval(() => {
            setSeconds(curreconds => curreconds + 1);
        }, 1000);
    };

    const stopTimer = () => {
        clearInterval(timerId.current);
    };

    const onFocusHandler1 = () => {
        inputRef1.current.focus();
    }

    const onFocusHandler2 = () => {
        inputRef2.current.focus();
    }

    return (
        <>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <p>seconds: {seconds}</p>
        <div>
        {/* using ref on build-in components */}
        <input ref={inputRef1}/> 
        <button onClick={onFocusHandler1}>Focus1</button>
        </div>
        <div>
        {/* using ref on custom component */}
        <MyInput ref={inputRef2}/>
        <button onClick={onFocusHandler2}>Focus2</button>
        </div>
        </>
    );
};
export default RefsApp;

const MyInput = forwardRef(function (props, inputRef) {
    return <input ref={inputRef} {...props} />
});

// function startTimer(setSeconds, timerId) {
//     timerId = setInterval(() => {
//         setSeconds(curreconds => curreconds + 1);
//     }, 1000);
// };

// function stopTimer(){

// };