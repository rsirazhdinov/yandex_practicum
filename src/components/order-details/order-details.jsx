import React from "react";

import orderDetailsStyles from './order-details.module.css'
import done_img from '../../images/done.png'
import PropTypes from 'prop-types';


export default function OrderDetails() {
    return (
        <div className={orderDetailsStyles.order_details_box}>
            <p className="mb-8 text text_type_digits-large">034536</p>
            <p className="mb-15 text text_type_main-medium">
                идентификатор заказа
            </p>
            <img className={` mb-15 ${orderDetailsStyles.done_img}`} src={done_img} alt=''/>
            <p className="mb-2 text text_type_main-default">
                Ваш заказ начали готовить
            </p>
            <p className="mb-30 text text_type_main-default text_color_inactive">
                Дождитесь готовности на орбитальной станции</p>
        </div>
    )
}


OrderDetails.propTyeps = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}