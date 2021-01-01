import React from "react";
import styles from '../styles/RecipeMiniInfo.module.css';
import {RiStarFill, RiUserSmileFill} from "react-icons/ri";
import SeparatorHorizontal from "../SeparatorHorizontal";

const RecipeMiniInfo = props => {
    return (
        <div className={styles.recipeAuthor}>
            <RiUserSmileFill color={'black'} size={24}/>
            <SeparatorHorizontal width={16}/>
            <div>Author: {props.author}</div>
            <SeparatorHorizontal width={32}/>
            <RiStarFill size={12} color={'#444'}/>
            <SeparatorHorizontal width={6}/>
            {props.rating.toPrecision(2)}/5.0
        </div>
    );
};

export default RecipeMiniInfo;