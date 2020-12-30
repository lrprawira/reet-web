import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import styles from "./styles/App.module.css";
import Product from "./Product";
import Premium from "./Premium";

function App() {

    return (
        <Router>
            <div className={styles.homeMargin}>
                <Switch>
                    <Route path={'/'} component={Home} exact />
                    <Route path={'/recipe/:id'} component={Product} />
                    <Route path={'/packages'} component={Premium} />
                </Switch>
            </div>
        </Router>
    );
}


export default App;
