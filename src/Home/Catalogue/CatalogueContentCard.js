import React from "react";
import styles from '../../styles/CatalogueContentCard.module.css';
import {RiStarFill} from 'react-icons/ri';
import SeparatorHorizontal from "../../SeparatorHorizontal";
import pancake from "../../assets/images/recipe/pancake.jpg";

const CatalogueContentCard = props => {
    return (
        <div className={styles.catalogueContentCardWrapper} style={{cursor: "pointer"}} onClick={() => {
            props.setNavi(2);
            props.setProduct({
                name: props.name,
                author: props.author,
                ingredients: props.ingredients,
                instructions: props.instructions,
                images: props.images,
                rating: props.rating,
                time: props.time,
                servings: props.servings
            });
        }}>
            <div className={styles.catalogueContentCardImgWrapper}>
                <img src={props.images[0]} />
            </div>
            <div className={styles.catalogueContentCardTitle}>
                {props.name}
            </div>
            <div className={styles.catalogueContentCardSubtitle}>
                <div className={styles.catalogueContentCardAuthor}>
                    Author: {props.author}
                </div>
                <div className={styles.catalogueContentCardRating}>
                    <RiStarFill size={12} color={'#444'} />
                    <SeparatorHorizontal width={6} />
                    {props.rating}/5.0
                </div>
            </div>

        </div>
    );
};

export default CatalogueContentCard;