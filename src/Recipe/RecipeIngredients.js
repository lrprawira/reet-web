import React from "react";
import styles from '../styles/RecipeIngredients.module.css';

const RecipeIngredients = props => {
    return (
        <div>
            <div className={styles.ingredientTitle}>Ingredients</div>
            {
                props.ingredients.split('\n').map((line, i) => <div className={styles.ingredientContent} key={i}>
                    <span style={{ paddingRight: 24}}>{ i+1 }.</span>{ line }
                </div> )
            }
        </div>
    );
};

export default RecipeIngredients;