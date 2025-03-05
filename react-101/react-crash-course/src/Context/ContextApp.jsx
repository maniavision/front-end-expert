import { useState } from "react";
import { Profile } from "./Profile";
import { UserContext } from "./UserContext";


// Context is used to prevent props drilling
const conner = {
    name: 'Conner',
    course: 'FrontendExpert'
};

const clement = {
    name: 'Clement',
    course: 'AlgoExpert'
}

const ContextApp = () => {
    const [user, setUser] = useState(conner);

    const toggleUser = () => {
        if(user === conner) {
            setUser(clement);
        } else {
            setUser(conner);
        }
    };

    return (
        <main>
            <UserContext.Provider value={user}>
                <Profile />
            </UserContext.Provider>
            <button onClick={toggleUser}>Toggle User</button>
        </main>
    );
};

export default ContextApp;