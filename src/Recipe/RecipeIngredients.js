import React from "react";
import styles from '../styles/RecipeIngredients.module.css';

const RecipeIngredients = props => {
    return (
        <div>
            <div className={styles.ingredientTitle}>Ingredients</div>
            <div className={styles.ingredientContent}>{ props.ingredients }</div>
        </div>
    );
};

export default RecipeIngredients;