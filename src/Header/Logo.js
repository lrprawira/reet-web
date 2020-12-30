import React from "react";
import styles from '../styles/LogoHeader.module.css';
import { Link } from 'react-router-dom';
import ReetLogo from '../assets/images/logo 2.0.1.svg';

const Logo = (props) => {
    return (
        <Link to={'/'}>
            <div className={styles.logoWrapper}>
                <img src={ReetLogo} className={styles.logoImage} alt={'Reet Logo'} />
                <div className={styles.logoText}>
                    Reet
                </div>
            </div>
        </Link>
    );
};

export default Logo;