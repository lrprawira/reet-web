import React from "react";
import styles from '../../styles/Carousel.module.css';
import CarouselText from "./CarouselText";

const CarouselHome = () => {
    return (
        <div className={styles.carouselWrapper}>
            <CarouselText />
            <div className={styles.vegePath}></div>
        </div>
    );
};

export default CarouselHome;