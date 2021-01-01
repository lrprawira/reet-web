import React from "react";
import { RiSearchLine } from 'react-icons/ri';
import styles from '../styles/MenuHeader.module.css';
import SeparatorEmpty from "./SeparatorEmpty";
import { Link, useLocation } from 'react-router-dom';

const Menu = (props) => {
    const location = useLocation();
    return (
        <div className={styles.menuWrapper}>
            <Link replace={'/' === location.pathname} to={'/'}>
                <div style={{ fontWeight: 'bold' }}>Recipes</div>
            </Link>
            <SeparatorEmpty width={32} />
            <Link replace={'/packages' === location.pathname} to={'/packages'}>
                <div>Reet Premium</div>
            </Link>
            <SeparatorEmpty width={28} />
            <a href={'#/#searchbox'} >
                <RiSearchLine color={'black'} size={24} style={{cursor: 'pointer'}} />
            </a>
        </div>
    );
};

export default Menu;