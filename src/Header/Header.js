import React, { useEffect, useState } from "react";
import styles from '../styles/Header.module.css';
import ProfileButton from "./ProfileButton";
import WorldLangButton from "./WorldLangButton";
import SeparatorEmpty from "./SeparatorEmpty";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = (props) => {
    const [currentPath, setCurrentPath] = useState();
    useEffect(() => {
        setCurrentPath(prev => window.location.pathname);
    }, []);

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLeftLayout}>
                <Logo />
                <SeparatorEmpty width={56} />
                {
                    currentPath !== '/packages' && <Menu />
                }
            </div>
            <div className={styles.headerRightLayout}>
                <WorldLangButton style={{cursor: 'pointer'}} />
                <SeparatorEmpty width={32} />
                <ProfileButton style={{cursor: 'pointer'}} />
            </div>
        </div>
    );
};

export default Header;