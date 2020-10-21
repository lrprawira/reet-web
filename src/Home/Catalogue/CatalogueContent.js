import React from "react";
import styles from '../../styles/CatalogueContent.module.css';
import CatalogueContentCard from "./CatalogueContentCard";

import pancake from '../../assets/images/recipe/pancake.jpg';

const recipes = [
    {
        name: 'Pancake',
        author: 'Albert Salim',
        ingredients: '1 cup flour\n' +
            '2 tbsp sugar\n' +
            '2 tsp baking powder\n' +
            '1/2 tsp salt\n' +
            '1 cup milk\n' +
            '1  egg\n' +
            '2 tbsp oil',
        instructions: '1. Put flour, sugar, baking powder, and salt in a bowl. Mix until even.\n' +
            '2. Make a curve in middle of flour, insert egg, milk, and oil. Whisk\n' +
            '    until no flour clump remains\n' +
            '3. Heat pan on medium-low heat, insert a small amount of pancake\n' +
            '    mix. After no bubbles remain, flip pancake. Repeat until both sides\n' +
            '    are cooked brown.\n' +
            '4. Repeat until all pancake mix is used.\n' +
            '5. Add toppings, and consume while warm.',
        images: [pancake],
        rating: 4.8,
        time: {
            prep: 5,
            cook: 15,
        },
        servings: 8,
    },
    {
        name: 'Pancake',
        author: 'Albert Salim',
        ingredients: '1 cup flour\n' +
            '2 tbsp sugar\n' +
            '2 tsp baking powder\n' +
            '1/2 tsp salt\n' +
            '1 cup milk\n' +
            '1  egg\n' +
            '2 tbsp oil',
        instructions: '1. Put flour, sugar, baking powder, and salt in a bowl. Mix until even.\n' +
            '2. Make a curve in middle of flour, insert egg, milk, and oil. Whisk\n' +
            '    until no flour clump remains\n' +
            '3. Heat pan on medium-low heat, insert a small amount of pancake\n' +
            '    mix. After no bubbles remain, flip pancake. Repeat until both sides\n' +
            '    are cooked brown.\n' +
            '4. Repeat until all pancake mix is used.\n' +
            '5. Add toppings, and consume while warm.',
        images: [pancake],
        rating: 4.8,
        time: {
            prep: 5,
            cook: 15,
        },
        servings: 8,
    },
    {
        name: 'Pancake',
        author: 'Albert Salim',
        ingredients: '1 cup flour\n' +
            '2 tbsp sugar\n' +
            '2 tsp baking powder\n' +
            '1/2 tsp salt\n' +
            '1 cup milk\n' +
            '1  egg\n' +
            '2 tbsp oil',
        instructions: '1. Put flour, sugar, baking powder, and salt in a bowl. Mix until even.\n' +
            '2. Make a curve in middle of flour, insert egg, milk, and oil. Whisk\n' +
            '    until no flour clump remains\n' +
            '3. Heat pan on medium-low heat, insert a small amount of pancake\n' +
            '    mix. After no bubbles remain, flip pancake. Repeat until both sides\n' +
            '    are cooked brown.\n' +
            '4. Repeat until all pancake mix is used.\n' +
            '5. Add toppings, and consume while warm.',
        images: [pancake],
        rating: 4.8,
        time: {
            prep: 5,
            cook: 15,
        },
        servings: 8,
    },
    {
        name: 'Pancake',
        author: 'Albert Salim',
        ingredients: '1 cup flour\n' +
            '2 tbsp sugar\n' +
            '2 tsp baking powder\n' +
            '1/2 tsp salt\n' +
            '1 cup milk\n' +
            '1  egg\n' +
            '2 tbsp oil',
        instructions: '1. Put flour, sugar, baking powder, and salt in a bowl. Mix until even.\n' +
            '2. Make a curve in middle of flour, insert egg, milk, and oil. Whisk\n' +
            '    until no flour clump remains\n' +
            '3. Heat pan on medium-low heat, insert a small amount of pancake\n' +
            '    mix. After no bubbles remain, flip pancake. Repeat until both sides\n' +
            '    are cooked brown.\n' +
            '4. Repeat until all pancake mix is used.\n' +
            '5. Add toppings, and consume while warm.',
        images: [pancake],
        rating: 4.8,
        time: {
            prep: 5,
            cook: 15,
        },
        servings: 8,
    },
    {
        name: 'Pancake',
        author: 'Albert Salim',
        ingredients: '1 cup flour\n' +
            '2 tbsp sugar\n' +
            '2 tsp baking powder\n' +
            '1/2 tsp salt\n' +
            '1 cup milk\n' +
            '1  egg\n' +
            '2 tbsp oil',
        instructions: '1. Put flour, sugar, baking powder, and salt in a bowl. Mix until even.\n' +
            '2. Make a curve in middle of flour, insert egg, milk, and oil. Whisk\n' +
            '    until no flour clump remains\n' +
            '3. Heat pan on medium-low heat, insert a small amount of pancake\n' +
            '    mix. After no bubbles remain, flip pancake. Repeat until both sides\n' +
            '    are cooked brown.\n' +
            '4. Repeat until all pancake mix is used.\n' +
            '5. Add toppings, and consume while warm.',
        images: [pancake],
        rating: 4.8,
        time: {
            prep: 5,
            cook: 15,
        },
        servings: 8,
    },
]

const CatalogueContent = props => {
    return (
        <div className={styles.catalogueContentWrapper}>
            { recipes.map(recipes => {
                return (
                    <CatalogueContentCard
                        name={recipes.name}
                        author={recipes.author}
                        ingredients={recipes.ingredients}
                        instructions={recipes.instructions}
                        images={recipes.images}
                        rating={recipes.rating}
                        time={recipes.time}
                        servings={recipes.servings}
                        appNavi={props.appNavi}
                        setNavi={props.setNavi}
                        selectedProduct={props.selectedProduct}
                        setProduct={props.setProduct}
                    />
                )
            }) }
        </div>
    );
};

export default CatalogueContent;