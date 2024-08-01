import React, {forwardRef} from 'react';

import classes from './getStartedToday.module.css';
import phone from "../../../assets/images/getStartedToday/mobile/phone.png"
import apple from "../../../assets/images/getStartedToday/apple.png"
import android from "../../../assets/images/getStartedToday/android.png"
import {useTranslation} from "react-i18next";
import appleUa from "../../../assets/images/getStartedToday/appleUa.png";
import androidUa from "../../../assets/images/getStartedToday/androidUa.png";
import applePl from "../../../assets/images/getStartedToday/applePl.png";
import androidPl from "../../../assets/images/getStartedToday/androidPl.png";
import phoneUa from "../../../assets/images/getStartedToday/mobile/phoneUa.png";
import phonePl from "../../../assets/images/getStartedToday/mobile/phonePl.png";
import i18n from "../../../i18n";


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
                    <div className={classes.links}>
                        <a href="https://apps.apple.com/" className={classes.link} data-aos="fade-up"
                           data-aos-duration="2000"
                           data-aos-anchor-placement="top-center">
                            <img src={apple} alt="Apple Sotore" className={classes.linkImage}/>
                        </a>
                        <a href="https://play.google.com/" className={classes.link} data-aos="fade-up"
                           data-aos-duration="2000"
                           data-aos-anchor-placement="top-center">
                            <img src={android} alt="Play market" className={classes.linkImage}/>
                        </a>
                    </div>
                ) : lang === "ua" ? (
                    <div className={classes.links}>
                        <a href="https://apps.apple.com/" className={classes.link} data-aos="fade-up"
                           data-aos-duration="2000"
                           data-aos-anchor-placement="top-center">
                            <img src={appleUa} alt="Apple Sotore" className={classes.linkImage}/>
                        </a>
                        <a href="https://play.google.com/" className={classes.link} data-aos="fade-up"
                           data-aos-duration="2000"
                           data-aos-anchor-placement="top-center">
                            <img src={androidUa} alt="Play market" className={classes.linkImage}/>
                        </a>
                    </div>
                ) : (
                    <div className={classes.links}>
                        <a href="https://apps.apple.com/" className={classes.link} data-aos="fade-up"
                           data-aos-duration="2000"
                           data-aos-anchor-placement="top-center">
                            <img src={applePl} alt="Apple Sotore" className={classes.linkImage}/>
                        </a>
                        <a href="https://play.google.com/" className={classes.link} data-aos="fade-up"
                           data-aos-duration="2000"
                           data-aos-anchor-placement="top-center">
                            <img src={androidPl} alt="Play market" className={classes.linkImage}/>
                        </a>
                    </div>
                )
            }

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
