import React, {useState} from "react";

const ModalContext = React.createContext({
    isModal: false,
    type: 'edit-user',
    onHideModal: () => {},
    onShowModal: () => {}
});

export const ModalContextProvider = (props) => {
    const [isModal, setIsModal] = useState(false);

    const hideModalHandler = () => {
        setIsModal(false)
    }

    const showModalHandler = () => {
        setIsModal(true)
    }

    return (
        <ModalContext.Provider value={{
            isModal: false,
            type: 'edit-user',
            onHideModal: hideModalHandler,
            onShowModal: showModalHandler
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContext;