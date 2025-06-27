import React, {forwardRef} from 'react';

import classes from './getStartedToday.module.css';
import {useTranslation} from "react-i18next";
import phone from "../../../../assets/images/getStartedToday/mobile/phone.png";
import phoneUa from "../../../../assets/images/getStartedToday/mobile/phoneUa.png";
import phonePl from "../../../../assets/images/getStartedToday/mobile/phonePl.png";
import i18n from "../../../../i18n";


const GetStartedToday = forwardRef((props, ref) => {

    const {t} = useTranslation();
    const lang = i18n.language
    return (
        <div className={classes.container} ref={ref}>

            <div className={classes.title} data-aos="fade-left" data-aos-delay="200">{t("getStarted.title")}</div>
            <div className={classes.description} data-aos="fade-right" data-aos-delay="200">
                {t("getStarted.description")}
            </div>
            {
                lang === "en" ? (
                    <img src={phone} className={classes.image} alt="Phone" data-aos="fade" data-aos-duration="3000"
                         data-aos-anchor-placement="top-center"/>
                ) : lang === "ua" ? (
                    <img src={phoneUa} className={classes.image} alt="Phone" data-aos="fade" data-aos-duration="3000"
                         data-aos-anchor-placement="top-center"/>
                ) : (
                    <img src={phonePl} className={classes.image} alt="Phone" data-aos="fade" data-aos-duration="3000"
                         data-aos-anchor-placement="top-center"/>
                )
            }
        </div>
    );
});

export default GetStartedToday;
