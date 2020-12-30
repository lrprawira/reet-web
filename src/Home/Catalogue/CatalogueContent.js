import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import axios from 'axios';
import styles from '../../styles/CatalogueContent.module.css';
import CatalogueContentCard from "./CatalogueContentCard";
import Loading from "../../Loading";

const CatalogueContent = props => {
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const apiURL = useSelector(state => state.apiInfo);
    useEffect(() => {
        if (loading) {
            axios.get(`${apiURL}/products`)
                .then((res) => {
                    const result = res.data.data;
                    setRecipes(prev => result);
                    setLoading(false);
                })
        }
    }, [apiURL, loading])
    const catalogueCardRender = (recipe) => {
        return (<CatalogueContentCard
            id={recipe.id}
            key={recipe.id}
            name={recipe.name}
            author={recipe.author}
            image={recipe.image}
            rating={recipe.rating}
        />);
    };

    return (
        <>
            {
                loading ? <Loading /> : (
                    <div className={styles.catalogueContentWrapper}>
                        {recipes.map(recipe => {
                            if (props.searchQuery) {
                                return recipe.name.toLowerCase().includes(props.searchQuery.toLowerCase()) && catalogueCardRender(recipe)
                            }
                            return catalogueCardRender(recipe);
                        })}
                    </div>)
            }
        </>
    );
};

export default CatalogueContent;