import React from "react";
import styles from '../../styles/CatalogueSidebar.module.css';
import SeparatorVertical from "../../SeparatorVertical";

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
                <div className={styles.filterList}>
                    <span className={styles.originName}>Indonesia</span>
                    <span className={styles.originCheckbox}>
                        <input type={'checkbox'} checked={props.originFilter.indonesia} onChange={(e) => filterOriginHandler(e, 'indonesia')}/>
                    </span>
                </div>
                <div className={styles.filterList}>
                    <span className={styles.originName}>Malaysia</span>
                    <span className={styles.originCheckbox}>
                        <input type={'checkbox'} checked={props.originFilter.malaysia} onChange={(e) => filterOriginHandler(e, 'malaysia')}/>
                    </span>
                </div>
                <div className={styles.filterList}>
                    <span className={styles.originName}>Thailand</span>
                    <span className={styles.originCheckbox}>
                        <input type={'checkbox'} checked={props.originFilter.thailand} onChange={(e) => filterOriginHandler(e, 'thailand')}/>
                    </span>
                </div>
                <div className={styles.filterList}>
                    <span className={styles.originName}>Philippines</span>
                    <span className={styles.originCheckbox}>
                        <input type={'checkbox'} checked={props.originFilter.philippines} onChange={(e) => filterOriginHandler(e, 'philippines')}/>
                    </span>
                </div>
                <div className={styles.filterList}>
                    <span className={styles.originName}>Chinese</span>
                    <span className={styles.originCheckbox}>
                        <input type={'checkbox'} checked={props.originFilter.chinese} onChange={(e) => filterOriginHandler(e, 'chinese')}/>
                    </span>
                </div>
                <div className={styles.filterList}>
                    <span className={styles.originName}>Japanese</span>
                    <span className={styles.originCheckbox}>
                        <input type={'checkbox'} checked={props.originFilter.japanese} onChange={(e) => filterOriginHandler(e, 'japanese')}/>
                    </span>
                </div>
                <div className={styles.filterList}>
                    <span className={styles.originName}>Korean</span>
                    <span className={styles.originCheckbox}>
                        <input type={'checkbox'} checked={props.originFilter.korean} onChange={(e) => filterOriginHandler(e, 'korean')}/>
                    </span>
                </div>
                <div className={styles.filterList}>
                    <span className={styles.originName}>Others</span>
                    <span className={styles.originCheckbox}>
                        <input type={'checkbox'} checked={props.originFilter.others} onChange={(e) => filterOriginHandler(e, 'others')}/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CatalogueSidebar;