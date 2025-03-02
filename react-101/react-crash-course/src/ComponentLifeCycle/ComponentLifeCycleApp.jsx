import { useState } from "react";
import Counter from "./Counter";

const ComponentLifeCycleApp = () => {
    const [isShown, setIsShown] = useState(true);

    return (
        <>
            <button onClick={() => setIsShown(!isShown)}>
                {isShown ? 'Hide Counter' : 'Show Counter'}
            </button>
            {isShown ? <Counter /> : null}
        </>
    );
};

export default ComponentLifeCycleApp;