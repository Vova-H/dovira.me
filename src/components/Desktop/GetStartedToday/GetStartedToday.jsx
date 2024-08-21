import React, {forwardRef} from 'react';

import classes from './getStartedTodat.module.css';
import phoneImage from "../../../assets/images/getStartedToday/phone.png"
import apple from "../../../assets/images/getStartedToday/apple.png"
import android from "../../../assets/images/getStartedToday/android.png"
import circle1 from "../../../assets/images/getStartedToday/1.png"
import circle2 from "../../../assets/images/getStartedToday/2.png"
import circle3 from "../../../assets/images/getStartedToday/3.png"
import {useTranslation} from "react-i18next";
import i18n from "../../../i18n";
import phoneImageUa from "../../../assets/images/getStartedToday/phoneUa.png";
import phoneImagePl from "../../../assets/images/getStartedToday/phonePl.png";
import appleUa from "../../../assets/images/getStartedToday/appleUa.png";
import androidUa from "../../../assets/images/getStartedToday/androidUa.png";
import applePl from "../../../assets/images/getStartedToday/applePl.png";
import androidPl from "../../../assets/images/getStartedToday/androidPl.png";

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
                <div className={classes.title} data-aos="fade-left">{t("getStarted.title")}</div>
                <div className={classes.description} data-aos="fade-left">
                    {t("getStarted.description")}
                </div>
                {
                    lang === "en" ? (
                        <div className={classes.links}>
                            <a href="https://apps.apple.com/" data-aos="fade-up"
                               data-aos-duration="2000"
                               data-aos-anchor-placement="top-center">
                                <img src={apple} alt="Apple Sotore" className={classes.linkImage}/>
                            </a>
                            <a href="https://play.google.com/" data-aos="fade-up"
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
            </div>
        </div>
    );
});

export default GetStartedToday;
