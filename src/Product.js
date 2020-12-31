import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from "./Header/Header";
import Big from "./Recipe/Big/Big";
import SeparatorVertical from "./SeparatorVertical";
import {RiStarFill, RiUserSmileFill} from "react-icons/ri";
import styles from './styles/Recipe.module.css';
import SeparatorHorizontal from "./SeparatorHorizontal";
import RecipeIngredients from "./Recipe/RecipeIngredients";
import RecipeInstructions from "./Recipe/RecipeInstructions";
import axios from "axios";
import Loading from "./Loading";

const Product = (props) => {
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState({});
    const apiURL = useSelector(state => state.apiInfo);
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        if (loading) {
            axios.get(`${apiURL}/products/${id}`)
                .then((res) => {
                    const result = res.data.data[0];
                    setRecipe(prev => result);
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err.message);
                    history.push('/');
                    window.location.reload();
                })
        }
    })
    return (
        <>
        {
            loading ? <Loading/> :
                <div>
                    <Helmet>
                        <title>Reet - { recipe.name }</title>
                    </Helmet>
                    <Header/>
                    <Big selectedProduct={recipe}/>
                    <SeparatorVertical height={18}/>
                    <div className={styles.recipeAuthor}>
                        <RiUserSmileFill color={'black'} size={24}/>
                        <SeparatorHorizontal width={16}/>
                        <div>Author: {recipe.author}</div>
                        <SeparatorHorizontal width={32}/>
                        <RiStarFill size={12} color={'#444'}/>
                        <SeparatorHorizontal width={6}/>
                        {recipe.rating}/5.0
                    </div>
                    <SeparatorVertical height={28}/>
                    <RecipeIngredients ingredients={recipe.ingredients}/>
                    <SeparatorVertical height={18}/>
                    <RecipeInstructions instructions={recipe.instructions}/>
                    <SeparatorVertical height={72}/>
                </div>
        }
        </>
    );
};

export default Product;