import React, {useState} from "react";
import CatalogueContent from "./CatalogueContent";
import CatalogueSearch from "./CatalogueSearch";

const Catalogue = (props) => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div>
            <CatalogueSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <CatalogueContent searchQuery={searchQuery} />
        </div>
    );
};

export default Catalogue;
