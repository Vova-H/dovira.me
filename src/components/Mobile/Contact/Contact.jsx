import React, {forwardRef} from 'react';
import email from "../../../assets/images/contact/email.png"
import classes from "./contact.module.css"
import facebook from "../../../assets/images/footer/facebook.svg";
import linkedIn from "../../../assets/images/footer/linkedin.svg";
import instagram from "../../../assets/images/footer/instagram.svg";
import {useTranslation} from "react-i18next";

const Contact = forwardRef((props, ref) => {

    const {t} = useTranslation();

    return (
        <div className={classes.container} ref={ref} data-aos="fade-out" data-aos-duration="2000"
             data-aos-anchor-placement="top-center">
            <img src={email} alt="Email" className={classes.image}/>
            <div className={classes.title}>
                {t("contact.text")}
            </div>
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
        </div>
    );
});

export default Contact;
