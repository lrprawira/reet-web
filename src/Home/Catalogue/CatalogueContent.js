import React, {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import axios from 'axios';
import styles from '../../styles/CatalogueContent.module.css';
import CatalogueContentCard from "./CatalogueContentCard";
import Loading from "../../Loading";


const isFiltered = (filter) => {
    for (let f in filter) {
        if (filter[f]) {
            return true;
        }
    }
    return false;
};

const checkRecipeFilterCompatibility = (recipe, filter) => {
    for (let f in filter) {
        if (filter[f] && recipe.origin === f)
            return true;
    }
    return false;
};

const CatalogueContent = props => {
    const [loading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState([]);
    const [gridElementHeight, setGridElementHeight] = useState(0);
    const apiURL = useSelector(state => state.apiInfo);
    const gridCatalogue = useRef(null);

    const resizeEvent = () => {
        if (gridCatalogue.current) {
            calculateGridElementHeight(gridCatalogue.current.clientWidth);
        }
    };
    const calculateGridElementHeight = (width) => {
        setGridElementHeight(width / 3 / 1.5);
        console.log(gridElementHeight);
    };
    useEffect(() => {
        window.addEventListener('resize', resizeEvent);
        return () => {
            window.removeEventListener('resize');
        }
    }, []);

    useEffect(() => {
        if (loading) {
            axios.get(`${apiURL}/products`)
                .then((res) => {
                    const result = res.data.data;
                    setRecipes(result);
                    setLoading(false);
                })
        }
    }, [apiURL, loading]);


    const catalogueCardRender = (recipe) => {
        return (<CatalogueContentCard
            id={recipe.id}
            key={recipe.id}
            name={recipe.name}
            author={recipe.author}
            image={recipe.image}
            rating={recipe.rating}
            update={resizeEvent}
            height={gridElementHeight}
        />);
    };

    const determineShowCard = (recipe) => {
        let passSearch = undefined;
        let passOrigin = undefined;
        if (props.searchQuery) { // Check if search is not empty
            if (!recipe.name.toLowerCase().includes(props.searchQuery.toLowerCase())) // Check SubString Equality
                passSearch = false;
        }
        if (passSearch === false)
            return null;
        else
            passSearch = true
        if (isFiltered(props.originFilter)) {
            if (!checkRecipeFilterCompatibility(recipe, props.originFilter))
                passOrigin = false
        }
        if (passOrigin === false)
            return null
        else
            passOrigin = true
        return passSearch && passOrigin && catalogueCardRender(recipe);

    }

    return (
        <>
            {
                loading ? <Loading /> : (
                    <div className={styles.catalogueContentWrapper}
                         ref={gridCatalogue}
                         onLoad={resizeEvent}
                         id={'gridCatalogue'}>
                        {recipes.map(recipe => {
                            return determineShowCard(recipe);
                        })}
                    </div>)
            }
        </>
    );
};

export default CatalogueContent;