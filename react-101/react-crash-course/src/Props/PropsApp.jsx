
const PropsApp = () => {

    return <Hello name = "Fortune"/>;
};

function Hello(props) {
    return <h2>Hello {props.name}</h2>
}

export default PropsApp;