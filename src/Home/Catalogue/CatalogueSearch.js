import React from "react";
import {RiSearchLine} from "react-icons/ri";
import styles from '../../styles/CatalogueSearch.module.css';
import SeparatorHorizontal from "../../SeparatorHorizontal";

const CatalogueSearch = props => {
    return (
        <div className={styles.catalogueSearchWrapper}>
            <input className={styles.catalogueSearchInput} placeholder={'Search Recipe'} />
            <SeparatorHorizontal width={16} />
            <RiSearchLine color={'black'} size={24} style={{cursor: 'pointer'}} type={'text'} />
        </div>
    );
};

export default CatalogueSearch;