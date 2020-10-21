import React, {useState} from "react";
import styles from '../../styles/CarouselText.module.css';

const CarouselText = (props) => {
    const [pointerHover, setPointerHover] = useState(false);
    return (
        <div className={styles.carouselTextWrapper}>
            <div className={styles.carouselTextTitle}>
                Reet Saving Plan 20% off!
            </div>
            <div className={styles.carouselTextSubTitle}>
                Reet Saving Plan includes Reet Premium Food Package for 2 weeks only for very limited time!*
            </div>
            <div className={styles.carouselTextMisc}>
                *ToC applies
            </div>
            <div className={styles.carouselTextCheck} onPointerOver={() => setPointerHover(true)} onPointerLeave={() => setPointerHover(false)}>
                Check out now <span style={pointerHover ? {marginLeft: 4, transition: 1} : {}}>→</span>
            </div>
        </div>
    );
};

export default CarouselText;