import React from "react";
import {RiSearchLine} from "react-icons/ri";
import styles from '../../styles/CatalogueSearch.module.css';

const CatalogueSearch = props => {
    const changeQuery = (e) => {
        props.setSearchQuery(e.target.value);
    }
    return (
        <div className={styles.catalogueSearchWrapper} id={'searchbox'}>
            <div className={styles.catalogueSearchInputWrapper}>
                <RiSearchLine color={'black'} size={24} type={'text'} />
                <input className={styles.catalogueSearchInput} placeholder={'Search Recipe'} onChange={e => changeQuery(e)} />
            </div>
        </div>
    );
};

export default CatalogueSearch;