import React from "react";
import styles from '../styles/LogoHeader.module.css';

const Logo = (props) => {
    return (
        <div className={styles.logoText} onClick={props.onClick} style={{cursor: 'pointer'}}>
            Reet
        </div>
    );
};

export default Logo;