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
import Button from "../../../ui/button/Button";
import {useModal} from "../../../../context/ModalContext";
import LazyImage from "../../../ui/LazyImage";


const GetStartedToday = forwardRef((props, ref) => {
    const {openModal} = useModal()
    const {t} = useTranslation();
    const lang = i18n.language
    return (
        <section className={classes.container} ref={ref}>
            <div className={classes.phoneWrapper}>
                {
                    lang === "en" ? (
                        <LazyImage src={phoneImage} className={classes.phoneImage} alt="phoneImage" data-aos="fade-up"/>
                    ) : lang === "ua" ? (
                        <LazyImage src={phoneImageUa} className={classes.phoneImage} alt="phoneImage" data-aos="fade"
                             data-aos-duration="3000"
                             data-aos-anchor-placement="top-center"/>
                    ) : (
                        <LazyImage src={phoneImagePl} className={classes.phoneImage} alt="phoneImage" data-aos="fade"
                             data-aos-duration="3000"
                             data-aos-anchor-placement="top-center"/>
                    )
                }
                <LazyImage src={circle1} className={classes.circle1} alt="Cirlce" data-aos="fade-up"/>
                <LazyImage src={circle2} className={classes.circle2} alt="Cirlce" data-aos="fade-right"/>
                <LazyImage src={circle3} className={classes.circle3} alt="Cirlce" data-aos="fade-left"/>
            </div>

            <div className={classes.rightSide}>
                <div className={classes.title} data-aos="fade-up">{t("getStarted.title")}</div>
                <div className={classes.description} data-aos="fade-up">
                    {t("getStarted.description")}
                </div>
                <Button text={t("getStarted.button")}
                        onClick={openModal}
                        data-aos="fade-up" data-aos-delay="400"
                        className={classes.button}
                />
            </div>
        </section>
    );
});

export default GetStartedToday;
