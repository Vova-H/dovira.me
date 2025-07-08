import React from 'react';
import classes from "./footer.module.css"
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t} = useTranslation()

    return (
        <section className={classes.container}>
            <div className={classes.content}>
                <div className={classes.copyright}>
                    {t("footer.text")}
                </div>
            </div>
        </section>
    );
};

export default Footer;
