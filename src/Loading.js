import React from "react";
import { Helmet } from 'react-helmet-async';

const  Loading = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <Helmet>
                <title>Loading Reet</title>
            </Helmet>
            Please wait...
        </div>
    );
};

export default Loading;