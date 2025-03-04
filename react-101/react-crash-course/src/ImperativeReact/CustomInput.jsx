import { forwardRef, useImperativeHandle, useState } from "react";

const CustomInput = (props, inputRef) => {
    const [value, setValue] = useState('');

    useImperativeHandle(inputRef, () => {
        return {
            reset: () => setValue('')
        }
    })

    return (
        <input 
        {...props} 
        value = {value}
        onChange={event => setValue(event.target.value)}
        />
    );
};

export default forwardRef(CustomInput);