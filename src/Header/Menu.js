import React from "react";
import { RiSearchLine } from 'react-icons/ri';
import styles from '../styles/MenuHeader.module.css';
import SeparatorEmpty from "./SeparatorEmpty";

const Menu = (props) => {
    return (
        <div className={styles.menuWrapper}>
            <div style={props.appNavi === 0 ? {cursor: 'pointer', fontWeight: 600} : {cursor: 'pointer'}} onClick={() => props.setNavi(0)}>Recipes</div>
            <SeparatorEmpty width={32} />
            <div style={{cursor: 'pointer'}} onClick={() => props.setNavi(1)}>Reet Premium</div>
            <SeparatorEmpty width={28} />
            <RiSearchLine color={'black'} size={24} style={{cursor: 'pointer'}} />
        </div>
    );
};

export default Menu;