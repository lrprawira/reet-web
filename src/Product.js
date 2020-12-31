import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useHistory, useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import Header from "./Header/Header";
import Big from "./Recipe/Big/Big";
import SeparatorVertical from "./SeparatorVertical";
import RecipeIngredients from "./Recipe/RecipeIngredients";
import RecipeInstructions from "./Recipe/RecipeInstructions";
import axios from "axios";
import Loading from "./Loading";
import RecipeMiniInfo from "./Recipe/RecipeMiniInfo";

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
                    <RecipeMiniInfo author={recipe.author} rating={recipe.rating} />
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