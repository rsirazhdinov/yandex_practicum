import React from 'react'
import styles from './burger-category.module.css'
import BurgerIngredient from "../ingredient/burger-ingredient";
import PropTypes from 'prop-types';
import {ingredientTypeArray} from "../../utils/burger-types";

export default function BurgerCategory({title, titleId, ingredients, handleOpenModal}) {
    return (
        <>
            <p id={titleId} className="text text_type_main-medium">
                {title}
            </p>
            <div className={styles.container}>
                {ingredients && ingredients.map((ingredient) =>
                    <BurgerIngredient
                    onClick={handleOpenModal} 
                    count={1}
                    className='ml-6' 
                    key={ingredient._id}
                    ingredient={ingredient}/>)}
            </div>
        </>
    )
}

BurgerCategory.propTypes = {
    title: PropTypes.string.isRequired,
    titleId: PropTypes.number.isRequired,
    ingredients: ingredientTypeArray,
    handleOpenModal: PropTypes.func.isRequired
}