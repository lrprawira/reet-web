import React from "react";
import SeparatorVertical from "./SeparatorVertical";
import ThreePackages from "./Premium/ThreePackages";

const Premium = (props) => {
    return (
        <div>
            <SeparatorVertical height={48} />
            <ThreePackages />
        </div>
    );
};

export default Premium;