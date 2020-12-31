import React from "react";
import styles from "../../styles/CatalogueFilterList.module.css";

const CatalogueFilterList = props => {
    return (
        <div className={styles.filterList}>
            <span className={styles.originName}>{ props.originName }</span>
            <span className={styles.originCheckbox}>
                <input type={'checkbox'} checked={props.originFilter[props.canonicalOriginName]} onChange={(e) => props.filterOriginHandler(e, props.canonicalOriginName)}/>
            </span>
        </div>
    );
};

export default CatalogueFilterList;