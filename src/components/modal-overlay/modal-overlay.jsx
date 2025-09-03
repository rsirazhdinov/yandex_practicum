import React from "react";
import modalOverlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

export default function ModalOverlay({children}){
    return (
        <div className={modalOverlayStyles.modalOverlay}>
            {children}
        </div>
    )
}

ModalOverlay.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
