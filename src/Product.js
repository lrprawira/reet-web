import React from "react";
import Header from "./Header/Header";
import Big from "./Recipe/Big/Big";
import SeparatorVertical from "./SeparatorVertical";
import {RiStarFill, RiUserSmileFill} from "react-icons/ri";
import styles from './styles/Recipe.module.css';
import SeparatorHorizontal from "./SeparatorHorizontal";
import RecipeIngredients from "./Recipe/RecipeIngredients";
import RecipeInstructions from "./Recipe/RecipeInstructions";

const Product = (props) => {
    return (
        <div>
            <Header appNavi={props.appNavi} setNavi={props.setNavi} />
            <Big selectedProduct={props.selectedProduct} />
            <SeparatorVertical height={18} />
            <div className={styles.recipeAuthor}>
                <RiUserSmileFill color={'black'} size={24} />
                <SeparatorHorizontal width={16} />
                <div>Author: {props.selectedProduct.author}</div>
                <SeparatorHorizontal width={32} />
                <RiStarFill size={12} color={'#444'} />
                <SeparatorHorizontal width={6} />
                {props.selectedProduct.rating}/5.0
            </div>
            <SeparatorVertical height={28} />
            <RecipeIngredients ingredients={props.selectedProduct.ingredients} />
            <SeparatorVertical height={18} />
            <RecipeInstructions instructions={props.selectedProduct.instructions} />
            <SeparatorVertical height={72} />
        </div>
    );
};

export default Product;