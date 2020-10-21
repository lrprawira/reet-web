import React from "react";
import {RiSearchLine} from "react-icons/ri";
import CatalogueContent from "./CatalogueContent";
import CatalogueSearch from "./CatalogueSearch";

const Catalogue = (props) => {
    return (
        <div>
            <CatalogueSearch />
            <CatalogueContent appNavi={props.appNavi} setNavi={props.setNavi} selectedProduct={props.selectedProduct} setProduct={props.setProduct} />
        </div>
    );
};

export default Catalogue;
