import React, {useState} from "react";
import {ConstructorElement, Button, CurrencyIcon, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './burger-constructor.module.css'
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import {ingredientTypeArray} from "../../utils/burger-types";
export default function BurgerConstructor({
                                              ingredients
                                          }) {
    const [orderDetailsModalVisible, setOrderDetailsModalVisible] = useState(false);

    const handleOpenOrderDetailsModal = () => {
        setOrderDetailsModalVisible(true);
    }

    const handleCloseOrderDetailsModal = () => {
        setOrderDetailsModalVisible(false);
    }

    let bun = ingredients.filter(item => item.type === 'bun')[0];

    const burgerConstructorIngredients = ingredients.filter(item => item.type !== 'bun')

    return (
        <section>
            <div className={` mb-4 ml-10 ${styles.constructor_element_box}`}>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={`${bun?.name} (вверх)`}
                    price={bun?.price}
                    thumbnail={bun?.image}/>
            </div>
            <ul className={styles.burger_constructor_box}>
                {burgerConstructorIngredients.map((item, i) => {
                    return (
                        <li key={i} className={styles.element_row_box}>
                            <DragIcon/>
                            <div className={styles.constructor_element_box}>
                                <ConstructorElement
                                    isLocked={false}
                                    text={item?.name}
                                    price={item?.price}
                                    thumbnail={item?.image}
                                />
                            </div>
                        </li>
                    )
                })}
            </ul>
            <div className={` mt-4 ml-10 ${styles.constructor_element_box}`}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text={`${bun?.name} (низ)`}
                    price={bun?.price}
                    thumbnail={bun?.image}
                />
            </div>
            <div className={`mt-10 ${styles.btn_box}`}>
                <div className={styles.count_box}><p
                    className="text text_type_digits-medium mr-1">{234234234}</p>
                    <CurrencyIcon className={styles.count_icon} type="primary"/></div>
                <Button htmlType="button" type="primary" size="medium" onClick={handleOpenOrderDetailsModal}>
                    Оформить Заказ
                </Button>
            </div>
            {
                orderDetailsModalVisible && <Modal onClose={handleCloseOrderDetailsModal}>
                    <OrderDetails/>
                </Modal>
            }
        </section>


    )
}



BurgerConstructor.propType = {
    ingredients: ingredientTypeArray
};