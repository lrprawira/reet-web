import React from "react";
import PackageCard from "./PackageCard";
import styles from '../styles/ThreePackages.module.css';

const packages = [
    {
        title: 'Basic Premium',
        benefit: [
            'Premium Recipe',
            'Limited Access to Ingredient Delivery Service',
            '24/7 Online Support'
        ],
        price: '120.000',
    },
    {
        title: 'Premium Pro',
        benefit: [
            'Premium Recipe',
            'Full Access to Ingredient Delivery Service',
            'Free Ingredient Pick',
            '24/7 Online Support'
        ],
        price: '360.000',
    }
]

const ThreePackages = (props) => {
    return (
        <div className={styles.packageWrapper}>
            {
                packages.map(pkg => {
                    return (
                        <PackageCard
                            title={pkg.title}
                            price={pkg.price}
                            benefit={pkg.benefit}
                        />
                    )
                })
            }
        </div>
    );
};

export default ThreePackages;