import React from "react";
import styles from '../../styles/CatalogueSidebar.module.css';
import SeparatorVertical from "../../SeparatorVertical";
import CatalogueFilterList from "./CatalogueFilterList";

const CatalogueSidebar = props => {
    const filterOriginHandler = (e, origin) => {
        const val = e.target.checked;
        props.setOriginFilter(prev => {
            return {
                ...prev,
                [origin]: val
            }
        });
    }
    return (
        <div className={styles.filterParent}>
            <div className={styles.filterTitle}>
                Filter By
            </div>
            <SeparatorVertical height={36} />
            <div className={styles.filterType}>
                <span>Origin</span>
                <CatalogueFilterList originName={'Indonesia'} canonicalOriginName={'indonesia'} originFilter={props.originFilter} filterOriginHandler={filterOriginHandler} />
                <CatalogueFilterList originName={'Malaysia'}  canonicalOriginName={'malaysia'} originFilter={props.originFilter} filterOriginHandler={filterOriginHandler} />
                <CatalogueFilterList originName={'Thailand'}  canonicalOriginName={'thailand'} originFilter={props.originFilter} filterOriginHandler={filterOriginHandler} />
                <CatalogueFilterList originName={'Philippines'} canonicalOriginName={'philippines'} originFilter={props.originFilter} filterOriginHandler={filterOriginHandler} />
                <CatalogueFilterList originName={'Chinese'} canonicalOriginName={'chinese'} originFilter={props.originFilter} filterOriginHandler={filterOriginHandler} />
                <CatalogueFilterList originName={'Japanese'} canonicalOriginName={'japanese'} originFilter={props.originFilter} filterOriginHandler={filterOriginHandler} />
                <CatalogueFilterList originName={'Korea'} canonicalOriginName={'korea'} originFilter={props.originFilter} filterOriginHandler={filterOriginHandler} />
                <CatalogueFilterList originName={'Others'} canonicalOriginName={'others'} originFilter={props.originFilter} filterOriginHandler={filterOriginHandler} />
            </div>
        </div>
    );
};

export default CatalogueSidebar;