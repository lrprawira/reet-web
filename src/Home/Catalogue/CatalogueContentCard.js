import React from "react";
import {Link} from 'react-router-dom';
import styles from '../../styles/CatalogueContentCard.module.css';
import {RiStarFill} from 'react-icons/ri';
import SeparatorHorizontal from "../../SeparatorHorizontal";

const CatalogueContentCard = props => {
    return (
        <Link to={`/recipe/${props.id}`} className={styles.catalogueContentCardWrapper} style={{cursor: "pointer"}} >
            <div className={styles.catalogueContentCardImgWrapper}>
                <img src={props.image} alt={`${props.name}`} />
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

        </Link>
    );
};

export default CatalogueContentCard;