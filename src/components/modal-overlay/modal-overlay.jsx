import React from "react";
import modalOverlayStyles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

export default function ModalOverlay({children, onClick}) {
    return (
        <div className={modalOverlayStyles.modalOverlay} onClick={onClick}>
            {children}
        </div>
    )
}

ModalOverlay.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func.isRequired
}
