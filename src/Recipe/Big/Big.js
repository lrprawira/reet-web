import React from "react";
import styles from "../../styles/RecipeImage.module.css";

const Big = props => {
    return (
        <div className={styles.dividedBig}>
            <div className={styles.imageBig} ref={props.bigImageRef} onLoad={props.resizeEvent}>
                <img src={props.selectedProduct.image} alt={`${props.selectedProduct.name}`}/>
            </div>
            <div className={styles.infoBig}>
                <div className={styles.infoBox}>
                    <div className={styles.infoBigTitle}>Before You Cook</div>
                    <ul className={styles.infoBigLists}>
                        <li>Prep. Time: {props.selectedProduct.preptime} mins</li>
                        <li>Cook Time: {props.selectedProduct.cooktime} mins</li>
                        <li>Servings: {props.selectedProduct.servings} servings</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Big;