import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import macbook from "../../../assets/images/priorities/macbook.png"
import {useTranslation} from "react-i18next";

const Priorities = forwardRef((props, ref) => {

    const {t} = useTranslation()

    return (
        <div className={classes.extraContainer} ref={ref} data-aos="fade-out" data-aos-duration="2000">
            <div className={classes.container}>
                <div className={classes.title}>{t("priorities.title")}</div>
                <div className={classes.description}>
                    {t("priorities.description")}
                </div>
                <img src={macbook} alt="doctor" className={classes.image}/>
                <a href="///" className={classes.button} data-aos="fade-up" data-aos-delay="400">
                    {t("priorities.button")}
                </a>

            </div>
        </div>
    );
});

export default Priorities;
