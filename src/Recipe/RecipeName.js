import React from "react";

const RecipeName = props => {
    return (
        <div style={{ fontSize: 42, fontWeight: 'bold' }}>{ props.name }</div>
    );
};

export default RecipeName;