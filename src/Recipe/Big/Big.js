import React from "react";
import styles from "../../styles/RecipeImage.module.css";

const Big = props => {
    return (
        <div className={styles.dividedBig}>
            <div className={styles.imageBig}>
                <img src={props.selectedProduct.images[0]}/>
            </div>
            <div className={styles.infoBig}>
                <div className={styles.infoBox}>
                    <div className={styles.infoBigTitle}>Before You Cook</div>
                    <ul className={styles.infoBigLists}>
                        <li>Prep. Time: {props.selectedProduct.time.prep} mins</li>
                        <li>Cook Time: {props.selectedProduct.time.cook} mins</li>
                        <li>Servings: {props.selectedProduct.time.cook} servings</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Big;