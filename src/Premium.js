import React from "react";
import Header from "./Header/Header";
import SeparatorVertical from "./SeparatorVertical";
import ThreePackages from "./Premium/ThreePackages";

const Premium = (props) => {
    return (
        <div>
            <Header />
            <SeparatorVertical height={48} />
            <ThreePackages />
        </div>
    );
};

export default Premium;