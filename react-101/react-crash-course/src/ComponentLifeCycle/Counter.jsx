import { useEffect, useLayoutEffect, useState } from "react";

// Component life cycle phases: (1) mount, (2) update and (3) umount
export default function Counter() {
    const  [count, setCount] = useState(0);
    const [bool, setBool] = useState(false);

    useEffect(() => {
        console.log("Always"); // This will always run at every compoment life cycle phase
    })

    useEffect(() => {
        console.log('Mount Only'); // Will only display when component mount
    }, []);

    useEffect(() => {
        console.log('Mount || Update Count'); // Will only display when component mount or count is updated
    }, [count]); // Dependency array

    useEffect(() => {
        return () => console.log('Unmount'); // Will display when component unmount
    }, []);

    useLayoutEffect(() => {

    }, []); // run synchroniously 

    return (
        <div>
            <button onClick={() => setBool(!bool)}>Re-Render</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </div>
    );
}