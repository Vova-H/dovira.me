import React, {forwardRef} from 'react';

import classes from './getStartedToday.module.css';
import {useTranslation} from "react-i18next";
import Button from "../../../ui/button/Button";
import {useModal} from "../../../../context/ModalContext";
import phone from "../../../../assets/images/getStartedToday/mobile/phone.png";
import phoneUa from "../../../../assets/images/getStartedToday/mobile/phoneUa.png";
import phonePl from "../../../../assets/images/getStartedToday/mobile/phonePl.png";
import i18n from "../../../../i18n";
import LazyImage from "../../../ui/LazyImage";


const GetStartedToday = forwardRef((props, ref) => {
    const {t} = useTranslation();
    const {openModal} = useModal()
    const lang = i18n.language
    return (
        <section className={classes.container} ref={ref}>
            <div className={classes.title} data-aos="fade-left" data-aos-delay="200">{t("getStarted.title")}</div>
            <div className={classes.description} style={{marginBottom: "20px"}} data-aos="fade-right"
                 data-aos-delay="200">
                {t("getStarted.description")}
            </div>
            <div className={classes.description} data-aos="fade-right" data-aos-delay="200">
                {t("getStarted.description2")}
            </div>
            <Button
                className={classes.button}
                text={t("getStarted.button")}
                data-aos="fade-in"
                data-aos-delay="400"
                onClick={openModal}
                styles={{minWidth: "450px"}}
            />
            {
                lang === "en" ? (
                    <LazyImage src={phone} className={classes.image} alt="Phone" data-aos="fade"
                               data-aos-duration="3000"
                               data-aos-anchor-placement="top-center"/>
                ) : lang === "ua" ? (
                    <LazyImage src={phoneUa} className={classes.image} alt="Phone" data-aos="fade"
                               data-aos-duration="3000"
                               data-aos-anchor-placement="top-center"/>
                ) : (
                    <LazyImage src={phonePl} className={classes.image} alt="Phone" data-aos="fade"
                               data-aos-duration="3000"
                               data-aos-anchor-placement="top-center"/>
                )
            }
        </section>
    );
});

export default GetStartedToday;
