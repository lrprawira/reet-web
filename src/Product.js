import React, {useCallback, useEffect, useRef, useState} from "react";
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
import RecipeWarning from "./Recipe/RecipeWarning";
import RecipeName from "./Recipe/RecipeName";

const Product = (props) => {
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState({});
    const [bigImageWidth, setBigImageWidth] = useState(0);
    const apiURL = useSelector(state => state.apiInfo);
    const { id } = useParams();
    const history = useHistory();
    const bigImageRef = useRef(null);

    const resizeEvent = useCallback(() => {
        if (bigImageRef.current) {
            setBigImageWidth(bigImageRef.current.clientWidth);
        }
    }, []);
    useEffect(() => {
        window.addEventListener('resize', resizeEvent);
        return () => {
            window.removeEventListener('resize', resizeEvent);
        }
    }, [resizeEvent]);
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
    }, [apiURL, history, id, loading]);
    return (
        <>
        {
            loading ? <Loading/> :
                <div>
                    <Helmet>
                        <title>Reet - { recipe.name }</title>
                    </Helmet>
                    <Header/>
                    <Big selectedProduct={recipe} bigImageRef={bigImageRef} resizeEvent={resizeEvent} />
                    <SeparatorVertical height={18}/>
                    <RecipeMiniInfo author={recipe.author} rating={recipe.rating} />
                    <RecipeWarning limitation={recipe.limitation} width={bigImageWidth} />
                    <SeparatorVertical height={28}/>
                    <RecipeName name={recipe.name} />
                    <SeparatorVertical height={14} />
                    <hr style={{width: bigImageWidth, float: "left"}}/>
                    <SeparatorVertical height={28} />
                    <div style={{marginLeft: 12}}>
                        <SeparatorVertical height={28}/>
                        <RecipeIngredients ingredients={recipe.ingredients}/>
                        <SeparatorVertical height={18}/>
                        <RecipeInstructions instructions={recipe.instructions}/>
                        <SeparatorVertical height={72}/>
                    </div>
                </div>
        }
        </>
    );
};

export default Product;