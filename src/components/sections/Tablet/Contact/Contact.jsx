import React, {forwardRef} from 'react';
import email from "../../../../assets/images/contact/email.png"
import classes from "./contact.module.css"
import facebook from "../../../../assets/images/footer/facebook.svg";
import linkedIn from "../../../../assets/images/footer/linkedin.svg";
import instagram from "../../../../assets/images/footer/instagram.svg";
import {useTranslation} from "react-i18next";
import LazyImage from "../../../ui/LazyImage";
import Button from "../../../ui/button/Button";
import {useModal} from "../../../../context/ModalContext";

const Contact = forwardRef((props, ref) => {

    const {openModal} = useModal();
    const {t} = useTranslation();

    return (
        <section className={classes.container} ref={ref} data-aos="fade-out" data-aos-duration="2000"
             data-aos-anchor-placement="top-bootom"
        >
            <LazyImage src={email} alt="Email" className={classes.image}/>
            <div className={classes.title}>
                {t("contact.title")}
            </div>
            <div className={classes.description}>
                {t("contact.description")}
            </div>
            <Button
                text={t("contact.button")}
                onClick={openModal}
                styles={{marginBottom: "40px", minWidth: "450px"}}

            />
            <div className={classes.socialLinks}>
                <a href="https://www.facebook.com/D0VIRA.me">
                    <img src={facebook} alt="Facebook"/>
                </a>
                <a href="https://www.linkedin.com/company/dovira-me/">
                    <img src={linkedIn} alt="Linked In"/>
                </a>
                <a href="https://www.instagram.com/dovira.me?igsh=MWc1ODFqbDV6aGppeg%3D%3D&utm_source=qr">
                    <img src={instagram} alt="Instagram"/>
                </a>
            </div>
        </section>
    );
});

export default Contact;
