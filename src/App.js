import React, {useState} from 'react';
import Home from './Home';
import styles from "./styles/App.module.css";
import Product from "./Product";
import Premium from "./Premium";
import pancake from "./assets/images/recipe/pancake.jpg";

function App() {
    const [appNavi, setAppNavi] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState({
        name: 'Placeholder Name',
        author: 'Anonymous',
        ingredients: '1 love 4 project score',
        instructions: 'work hard',
        images: [pancake],
        rating: 0,
        time: {
            prep: 5,
            cook: 15,
        },
        servings: 8,
    });
    return (
    <div className={styles.homeMargin}>
        {
            appNavi === 0 ?
                <Home appNavi={appNavi} setNavi={setAppNavi} selectedProduct={selectedProduct} setProduct={setSelectedProduct} /> :
                appNavi === 1 ?
                    <Premium appNavi={appNavi} setNavi={setAppNavi} /> :
                    appNavi === 2 ?
                        <Product appNavi={appNavi} setNavi={setAppNavi} selectedProduct={selectedProduct} /> : <></>
        }
    </div>
    );
}

export default App;
