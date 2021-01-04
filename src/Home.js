import React from "react";
import CarouselHome from "./Home/Carousel/CarouselHome";
import Catalogue from "./Home/Catalogue/Catalogue";
import SeparatorVertical from "./SeparatorVertical";

const Home = (props) => {
    return (
        <div>
            <CarouselHome />
            <Catalogue />
            <SeparatorVertical height={72} />
        </div>
    );
};

export default Home;