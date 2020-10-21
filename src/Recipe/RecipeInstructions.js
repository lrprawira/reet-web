import React from "react";
import styles from '../styles/RecipeInstructions.module.css';

const RecipeInstructions = props => {
    return (
        <div className={styles.instructionWrapper}>
            <div className={styles.instructionTitle}>Instructions</div>
            <div className={styles.instructionContent}>{ props.instructions }</div>
        </div>
    );
};

export default RecipeInstructions;