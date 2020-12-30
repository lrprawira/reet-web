import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import PackageCard from "./PackageCard";
import styles from '../styles/ThreePackages.module.css';
import axios from "axios";

const ThreePackages = (props) => {
    const apiURL = useSelector(state => state.apiInfo);
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        axios.get(`${apiURL}/packages`)
            .then((res) => {
                const data = res.data.data;
                setPackages(data);
            })
    }, [apiURL]);
    return (
        <div className={styles.packageWrapper}>
            {
                packages.map((pkg, i) => {
                    return (
                        <PackageCard
                            key={i}
                            title={pkg.type}
                            price={pkg.price}
                            benefit={JSON.parse(pkg.benefits).benefits}
                        />
                    )
                })
            }
        </div>
    );
};

export default ThreePackages;