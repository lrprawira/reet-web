import React from "react";
import Header from "./Header/Header";
import CarouselHome from "./Home/Carousel/CarouselHome";
import Catalogue from "./Home/Catalogue/Catalogue";
import SeparatorVertical from "./SeparatorVertical";

const Home = (props) => {
    return (
        <div>
            <Header appNavi={props.appNavi} setNavi={props.setNavi} />
            <CarouselHome />
            <Catalogue appNavi={props.appNavi} setNavi={props.setNavi} selectedProduct={props.selectedProduct} setProduct={props.setProduct} />
            <SeparatorVertical height={72} />
        </div>
    );
};

export default Home;