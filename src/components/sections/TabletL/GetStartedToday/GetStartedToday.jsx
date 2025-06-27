import React, {forwardRef} from 'react';

import classes from './getStartedToday.module.css';
import phoneImage from "../../../../assets/images/getStartedToday/phone.png"
import phoneImageUa from "../../../../assets/images/getStartedToday/phoneUa.png"
import phoneImagePl from "../../../../assets/images/getStartedToday/phonePl.png"
import circle1 from "../../../../assets/images/getStartedToday/1.png"
import circle2 from "../../../../assets/images/getStartedToday/2.png"
import circle3 from "../../../../assets/images/getStartedToday/3.png"
import {useTranslation} from "react-i18next";
import i18n from "../../../../i18n";


const GetStartedToday = forwardRef((props, ref) => {
    const {t} = useTranslation();
    const lang = i18n.language
    return (
        <div className={classes.container} ref={ref}>
            <div className={classes.phoneWrapper}>
                {
                    lang === "en" ? (
                        <img src={phoneImage} className={classes.phoneImage} alt="phoneImage" data-aos="fade-up"/>
                    ) : lang === "ua" ? (
                        <img src={phoneImageUa} className={classes.phoneImage} alt="phoneImage" data-aos="fade"
                             data-aos-duration="3000"
                             data-aos-anchor-placement="top-center"/>
                    ) : (
                        <img src={phoneImagePl} className={classes.phoneImage} alt="phoneImage" data-aos="fade"
                             data-aos-duration="3000"
                             data-aos-anchor-placement="top-center"/>
                    )
                }
                <img src={circle1} className={classes.circle1} alt="Cirlce" data-aos="fade-up"/>
                <img src={circle2} className={classes.circle2} alt="Cirlce" data-aos="fade-right"/>
                <img src={circle3} className={classes.circle3} alt="Cirlce" data-aos="fade-left"/>
            </div>

            <div className={classes.rightSide}>
                <div className={classes.title} data-aos="fade-up">{t("getStarted.title")}</div>
                <div className={classes.description} data-aos="fade-up">
                    {t("getStarted.description")}
                </div>
                <a href="///" className={classes.button} data-aos="fade-up" data-aos-delay="400">
                    {t("getStarted.button")}
                </a>
            </div>
        </div>
    );
});

export default GetStartedToday;
