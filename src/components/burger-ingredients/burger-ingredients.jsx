import React, {useEffect, useRef} from "react";
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import BurgerCategory from "../burger-category/burger-category";
import {ingredientTypeArray} from "../../utils/burger-types";
import PropTypes from 'prop-types';

export default function BurgerIngredients({ingredients, handleOpenModal}) {
    const [current, setCurrent] = React.useState('bun')

    const bun = ingredients.filter(item => item.type === 'bun')
    const sauce = ingredients.filter(item => item.type === 'sauce')
    const main = ingredients.filter(item => item.type === 'main')

    useEffect(() => {
        if (current) {
            document.getElementById(current).scrollIntoView();
        }
    }, [current])

    return (
        <section className={styles.container}>
            <p className=" mt-10 text text_type_main-large">
                Соберите бургер
            </p>
            <nav className={`mt-5 ${styles.nav_box}`}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </nav>
            <section className={`${styles.burger_category_box} mt-10 mb-6`}>
                <BurgerCategory key="bun" ingredients={bun} title='Булки' titleId='bun'
                                handleOpenModal={handleOpenModal}/>
                <BurgerCategory key="sauce" ingredients={sauce} title='Соусы' titleId='sauce'
                                handleOpenModal={handleOpenModal}/>
                <BurgerCategory key="main" ingredients={main} title='Начинки' titleId='main'
                                handleOpenModal={handleOpenModal}/>
            </section>
        </section>
    )
}


BurgerIngredients.propTypes = {
    ingredients: ingredientTypeArray,
    handleOpenModal: PropTypes.func.isRequired
}