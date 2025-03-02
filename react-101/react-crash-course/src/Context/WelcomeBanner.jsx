import { useContext } from "react";
import { UserContext } from "./UserContext";

const WelcomeBanner = () => {
    const user = useContext(UserContext);
    return <h1>Hello {user.name}</h1>;
};

export default WelcomeBanner;