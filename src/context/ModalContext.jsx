import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [role, setRole] = useState(null);

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false);
        setRole(null)
    }

    return (
        <ModalContext.Provider value={{
            isOpen,
            openModal,
            closeModal,
            selectedRole: role,
            setRole,
        }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
