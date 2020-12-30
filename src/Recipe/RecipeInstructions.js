import React from "react";
import styles from '../styles/RecipeInstructions.module.css';

const RecipeInstructions = props => {
    return (
        <div className={styles.instructionWrapper}>
            <div className={styles.instructionTitle}>Instructions</div>
            {
                props.instructions.split('\n').map((line, i) => <div className={styles.instructionContent} key={i}>
                    { line }
                </div>)
            }

        </div>
    );
};

export default RecipeInstructions;