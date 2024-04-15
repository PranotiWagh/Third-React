import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    return createPortal(
        <>
            <h1>Hello, I am Modal</h1>
            <button onClick={closeModal}>Close Modal</button>
        </>,
        document.getElementById("portals") // Corrected this line from document.documentElementById to document.getElementById
    );
};

export default Modal;
