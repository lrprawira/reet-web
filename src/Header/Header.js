import React from "react";
import styles from '../styles/Header.module.css';
import ProfileButton from "./ProfileButton";
import WorldLangButton from "./WorldLangButton";
import SeparatorEmpty from "./SeparatorEmpty";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = (props) => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLeftLayout}>
                <Logo onClick={() => props.setNavi(0)} />
                <SeparatorEmpty width={56} />
                {
                    props.appNavi !== 1 ? <Menu appNavi={props.appNavi} setNavi={props.setNavi} /> : <></>
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