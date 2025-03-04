import { useRef } from "react";
import Counter from "./Counter";
import CustomInput from "./CustomInput";

// Goal is to reset state values in both Counter && CustomInputfrom the reset button 
const ImperativeReactApp = () => {
    const counterRef = useRef(null);
    const customInputRef = useRef(null);

    return (
        <>
            <Counter ref={counterRef}/>
            <CustomInput ref={customInputRef} placeholder="Type something..."/>
            <button
                onClick={() => {
                    counterRef.current.reset();
                    customInputRef.current.reset();
                    }}>Reset</button>
        </>
    );
};

export default ImperativeReactApp;