import React from "react";
import { RiSearchLine } from 'react-icons/ri';
import styles from '../styles/MenuHeader.module.css';
import SeparatorEmpty from "./SeparatorEmpty";
import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <div className={styles.menuWrapper}>
            <Link to={'/'}>
                <div>Recipes</div>
            </Link>
            <SeparatorEmpty width={32} />
            <Link to={'/packages'}>
                <div>Reet Premium</div>
            </Link>
            <SeparatorEmpty width={28} />
            <Link to={'/#searchbox'}>
                <RiSearchLine color={'black'} size={24} style={{cursor: 'pointer'}} />
            </Link>
        </div>
    );
};

export default Menu;