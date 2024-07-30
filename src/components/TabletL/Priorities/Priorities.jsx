import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import macbook from "../../../assets/images/priorities/macbook.png"
import {useTranslation} from "react-i18next";

const Priorities = forwardRef((props, ref) => {

    const {t} = useTranslation()

    return (
        <div ref={ref} data-aos="fade-out" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
            <div className={classes.container}>
                <div className={classes.title}>{t("priorities.title")}</div>
                <div className={classes.description}>
                    {t("priorities.description")}
                </div>
                <a href="///" className={classes.button}>
                    {t("priorities.button")}
                </a>
                <img src={macbook} alt="macbook" className={classes.image}/>
            </div>
        </div>
    );
});

export default Priorities;
