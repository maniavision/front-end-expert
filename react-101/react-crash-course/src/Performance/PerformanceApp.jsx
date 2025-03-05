import { lazy, Suspense, useCallback, useMemo, useState } from "react";

const MyButton = lazy(() => import('./MyButton'));
// 
export default function PerformanceApp() {
    const [num, setNum] = useState(10);
    const [logValue, setLogValue] = useState('');
    
    const fibValue = useMemo(() => {
        console.log('calling fib...');
        return fib(num);
    }, [num]); // function fib will only be call if number changes

    const onClickLog = useCallback(() => {
        console.log(logValue);
    }, [logValue]);

    return (
        <>
            <h1>Fib {num} is {fibValue}</h1>
            <input 
                type="number"
                value={num}
                onChange={ event => setNum(parseInt(event.target.value))} 
            />
            <input 
                type="text" 
                value={logValue}
                onChange={event => setLogValue(event.target.value)}
            />
            {
                logValue.length > 0 ? (
                    <Suspense fallback={<div>Loading...</div>}>
                        <MyButton onClick={onClickLog}>
                            Log Value
                        </MyButton>
                    </Suspense>
                )
                 : null
            }

        </>
    );
}

function fib(num) {
    console.log('in fib...');
    if(num == 2) return 1;
    if(num == 1) return 0;
    return fib(num - 1) + fib(num - 1);
}