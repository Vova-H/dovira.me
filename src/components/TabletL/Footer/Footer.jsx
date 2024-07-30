import React from 'react';
import classes from "./footer.module.css"
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation()

    return (
        <footer className={classes.container}>
            <div className={classes.copyright}>
                {t("footer.text")}
            </div>
        </footer>
    );
};

export default Footer;
