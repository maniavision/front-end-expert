import { useState } from "react";
import { createPortal } from 'react-dom';

export default function PortalsApp() {
    const [isHidden, setIsHidden] = useState(true);

    return(
        <>
            <div>
                <button
                    onClick={() => setIsHidden(!isHidden)}>
                        {isHidden ? 'Show Modal': 'Hide Modal'}
                </button>
                {isHidden || <Modal />}
            </div>
            <p>Other Content</p>
        </>
    );
}
// createPortal this function places the react element at the attribute specified in the second arg
// instead of where it should be in the react dom
function Modal() {
    return createPortal(<p>Modal</p>, document.getElementById('modal-root'));
}