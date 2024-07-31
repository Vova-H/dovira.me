import React, {forwardRef} from 'react';

import classes from './getStartedToday.module.css';
import phone from "../../../assets/images/getStartedToday/mobile/phone.png"
import apple from "../../../assets/images/getStartedToday/mobile/button.svg"
import android from "../../../assets/images/getStartedToday/mobile/button2.svg"
import {useTranslation} from "react-i18next";


const GetStartedToday = forwardRef((props, ref) => {
    const {t} = useTranslation();
    return (
        <div className={classes.container} ref={ref}>
            <div className={classes.title} data-aos="fade-left" data-aos-delay="200">{t("getStarted.title")}</div>
            <div className={classes.description} data-aos="fade-right" data-aos-delay="200">
                {t("getStarted.description")}
            </div>
            <div className={classes.links}>
                <a href="https://apps.apple.com/" className={classes.link} data-aos="fade-up" data-aos-duration="2000"
                   data-aos-anchor-placement="top-center">
                    <img src={apple} alt="Apple Sotore" className={classes.linkImage}/>
                </a>
                <a href="https://play.google.com/" className={classes.link} data-aos="fade-up" data-aos-duration="2000"
                   data-aos-anchor-placement="top-center">
                    <img src={android} alt="Play market" className={classes.linkImage}/>
                </a>
            </div>
            <img src={phone} className={classes.image} alt="Phone" data-aos="fade" data-aos-duration="3000"
                 data-aos-anchor-placement="top-center"/>
        </div>
    );
});

export default GetStartedToday;
