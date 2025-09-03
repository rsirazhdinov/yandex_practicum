import React from "react";
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './ingredient.module.css'
import {ingredientType} from "../../utils/burger-types";
import PropTypes from 'prop-types';
export default function BurgerIngredient({ingredient, count, onClick}) {
    const {image, price, name} = ingredient;
    return (
        <article className={styles.container} onClick={() => onClick(ingredient)}>
            {count > 0 && <Counter count={count} size="default" extraClass="m-1"/>}
            <img className={`ml-4 mr-4 mb-1 ${styles.img}`} src={image} alt="Картинка ингредиента"/>
            <div className={`mt-1 ${styles.price}`}><p
                className="mr-1 text text_type_digits-default">{price}</p> <CurrencyIcon type="primary"/>
            </div>
            <div className={`mt-1 ${styles.name}`}><p className="text text_type_main-default">
                {name}
            </p></div>
        </article>
    )
}

BurgerIngredient.propTypes = {
    ingredient: ingredientType,
    count: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}