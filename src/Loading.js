import React from "react";
import { Helmet } from 'react-helmet-async';
import styles from './styles/Loading.module.css';

const  Loading = () => {
    return (
        <div className={styles.loading_wrapper}>
            <Helmet>
                <title>Loading Reet</title>
            </Helmet>
            Please wait...
        </div>
    );
};

export default Loading;