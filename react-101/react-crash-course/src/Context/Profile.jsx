import { Fragment } from "react";
import WelcomeBanner from "./WelcomeBanner";
import Course from "./Course";

export const Profile = () => {
    return (
        <Fragment>
            <WelcomeBanner/>
            <Course />
        </Fragment>
    );
};