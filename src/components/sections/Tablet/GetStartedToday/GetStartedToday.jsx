import React, {forwardRef} from 'react';

import classes from './getStartedToday.module.css';
import {useTranslation} from "react-i18next";


const GetStartedToday = forwardRef((props, ref) => {
    const {t} = useTranslation();

    return (
        <div className={classes.container} ref={ref}>
            <div className={classes.title} data-aos="fade-left" data-aos-delay="200">{t("getStarted.title")}</div>
            <div className={classes.description} data-aos="fade-right" data-aos-delay="200">
                {t("getStarted.description")}
            </div>
            <a href="///" className={classes.button} data-aos="fade-up" data-aos-delay="400">
                {t("getStarted.button")}
            </a>
        </div>
    );
});

export default GetStartedToday;
