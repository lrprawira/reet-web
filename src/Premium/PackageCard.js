import React from "react";
import styles from '../styles/PackageCard.module.css';

const PackageCard = props => {
    return (
        <div className={styles.packageCardWrapper}>
            <div>
                <div className={styles.packageCardTitle}>{props.title}</div>
                <hr />
                <ul className={styles.packageCardList}>
                    {props.benefit.map((bene, i) => <li key={i}>{bene}</li>)}
                </ul>
            </div>
            <div className={styles.packageCardPrice}>{props.price} IDR</div>
        </div>
    );
};

export default PackageCard;