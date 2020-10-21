import React from "react";
import { GrLanguage } from 'react-icons/gr';

const WorldLangButton = (props) => {
    return (
        <GrLanguage size={28} color={'black'} style={ props.style } />
    );
};

export default WorldLangButton;