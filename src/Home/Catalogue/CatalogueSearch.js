import React from "react";
import {RiSearchLine} from "react-icons/ri";
import styles from '../../styles/CatalogueSearch.module.css';
import SeparatorHorizontal from "../../SeparatorHorizontal";

const CatalogueSearch = props => {
    const changeQuery = (e) => {
        props.setSearchQuery(e.target.value);
    }
    return (
        <div className={styles.catalogueSearchWrapper} id={'searchbox'}>
            <input className={styles.catalogueSearchInput} placeholder={'Search Recipe'} onChange={e => changeQuery(e)} />
            <SeparatorHorizontal width={16} />
            <RiSearchLine color={'black'} size={24} style={{cursor: 'pointer'}} type={'text'} />
        </div>
    );
};

export default CatalogueSearch;