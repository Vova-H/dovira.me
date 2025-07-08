import React from 'react';
import classes from './modal.module.css';
import Button from '../../ui/button/Button';
import {useTranslation} from "react-i18next";


const Modal = ({isOpen, onClose, onSelect, selectedRole}) => {

    const {t} = useTranslation();

    if (!isOpen) return null;

    const handleSubmitButtonClick = () => {
        if (selectedRole === 'doctor') {
            window.location.href = 'https://google.com';
        } else if (selectedRole === 'patient') {
            window.location.href = 'https://google.com';
        } else {
            alert(t("modal.message"));
        }
    };

    return (
        <div className={classes.overlay}>
            <div className={classes.modal}>
                <button className={classes.closeBtn} onClick={onClose}>×</button>

                <h2 className={classes.title}>{t("modal.title")}</h2>

                <div className={classes.radioGroup}>
                    <div className={classes.radioGroupInner}>
                        <label className={classes.radioOption}>
                            <input
                                type="radio"
                                name="role"
                                value="doctor"
                                checked={selectedRole === 'doctor'}
                                onChange={() => onSelect('doctor')}
                            />
                            <span className={classes.customRadio}></span>
                            {t("modal.choice1")}
                        </label>

                        <label className={classes.radioOption}>
                            <input
                                type="radio"
                                name="role"
                                value="patient"
                                checked={selectedRole === 'patient'}
                                onChange={() => onSelect('patient')}
                            />
                            <span className={classes.customRadio}></span>
                            {t("modal.choice2")}
                        </label>
                    </div>
                </div>

                <Button text={t("modal.button")} onClick={handleSubmitButtonClick}
                        className={classes.button}
                />
            </div>
        </div>
    );
};

export default Modal;
