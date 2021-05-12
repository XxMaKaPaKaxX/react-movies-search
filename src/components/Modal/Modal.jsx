import React, { useEffect, useRef, useContext } from 'react';
import ReactDOM from 'react-dom';
import { StoreContext } from '../../store/StoreProvider';
import './Modal.scss';
import ItemInfo from '../ItemInfo';


const Modal = () => {
    const { isModalOpen, selectedItemData, setIsModalOpen } = useContext(StoreContext);

    const handleOnClose = () => {
        setIsModalOpen(false);
    }

    const modalRef = useRef(null);

    useEffect(() => {
        const { current: modal } = modalRef;
        if (isModalOpen) {
            modal.showModal();
        } else if (!isModalOpen) {
            modal.close();
        }
    }, [isModalOpen]);

    return ReactDOM.createPortal((
        <dialog
            className='modal-info'
            ref={modalRef}
        >
            <ItemInfo handleOnClose={handleOnClose} />
        </dialog>
    ), document.body);
}

export default Modal;