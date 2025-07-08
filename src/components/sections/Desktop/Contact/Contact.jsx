import React, {forwardRef} from 'react';
import email from "../../../../assets/images/contact/email.png"
import classes from "./contact.module.css"
import facebook from "../../../../assets/images/footer/facebook.svg";
import linkedIn from "../../../../assets/images/footer/linkedin.svg";
import instagram from "../../../../assets/images/footer/instagram.svg";
import {useTranslation} from "react-i18next";
import Button from "../../../ui/button/Button";
import {useModal} from "../../../../context/ModalContext";

const Contact = forwardRef((props, ref) => {

    const {t} = useTranslation();
    const {openModal} = useModal();
    return (
        <section className={classes.container} ref={ref} data-aos="fade-out" data-aos-duration="2000">
            <img src={email} alt="Email" className={classes.image}/>
            <div className={classes.title}>
                {t("contact.title")}
            </div>
            <div className={classes.description}>
                {t("contact.description")}
            </div>
            <Button text={t("contact.button")}
                styles={{marginBottom:"40px", padding: "17px 77px"}}
                    onClick={openModal}
            />
            <div className={classes.socialLinks}>
                <a href="https://www.facebook.com/D0VIRA.me">
                    <img src={facebook} alt="Facebook" className={classes.socialLinkItem}/>
                </a>
                <a href="https://www.linkedin.com/company/dovira-me/">
                    <img src={linkedIn} alt="Linked In" className={classes.socialLinkItem}/>
                </a>
                <a href="https://www.instagram.com/dovira.me?igsh=MWc1ODFqbDV6aGppeg%3D%3D&utm_source=qr">
                    <img src={instagram} alt="Instagram" className={classes.socialLinkItem}/>
                </a>
            </div>
        </section>
    );
});

export default Contact;
