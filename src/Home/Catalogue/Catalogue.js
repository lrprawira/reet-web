import React, {useState} from "react";
import CatalogueContent from "./CatalogueContent";
import CatalogueSidebar from "./CatalogueSidebar";
import CatalogueSearch from "./CatalogueSearch";
import styles from '../../styles/Catalogue.module.css';

const Catalogue = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [originFilter, setOriginFilter] = useState({
        indonesia: false,
        malaysia: false,
        thailand: false,
        philippines: false,
        chinese: false,
        japanese: false,
        korean: false,
        others: false
    });

    return (
        <div>
            <CatalogueSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className={styles.catalogueBodyWrapper}>
                <CatalogueSidebar
                    originFilter={originFilter}
                    setOriginFilter={setOriginFilter}
                />
                <CatalogueContent searchQuery={searchQuery} originFilter={originFilter} />
            </div>
        </div>
    );
};

export default Catalogue;
