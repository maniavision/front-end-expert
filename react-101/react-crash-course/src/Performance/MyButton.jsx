import { memo } from "react";

// memo function will only re-render the component when the props change
export default memo(function MyButton(props) {
    console.log('rendering MyButton...');
    return <button {...props} />;
});