import React from 'react';
import classes from "./banner.module.css"
import doctor from "../../../assets/images/banner/mobile/picture of doctor.png"
import doctorUa from "../../../assets/images/banner/mobile/picture of doctorUa.png"
import doctorPl from "../../../assets/images/banner/mobile/picture of doctorPl.png"
import {useTranslation} from "react-i18next";
import i18n from "../../../i18n";

const Banner = ({scrollTo, refs}) => {
    const {t} = useTranslation();
    const lang = i18n.language

    const handleNavigationClick = (ref) => {
        scrollTo(ref);
    };

    return (
        <div className={classes.bannerWrapper}>
            <h1 className={classes.title} data-aos="fade-left" data-aos-delay="200">
                {t(`banner.title`)}
            </h1>
            <p className={classes.subtitle} data-aos="fade-left" data-aos-delay="200">
                {t(`banner.subtitle`)}
            </p>
            <button className={classes.button}
                    data-aos="fade"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    onClick={() => handleNavigationClick(refs.ourPrioritiesRef)}
            >
                {t(`banner.button`)}
            </button>
            <div className={classes.statistic}>
                <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-delay="200">
                    <p className={classes.statisticItemTextBefore}>{t(`banner.comingSoon`)}</p>
                    <p className={classes.statisticItemCount}>{t(`banner.count`)}</p>
                    <div className={classes.statisticItemText}>{t(`banner.patients`)}</div>
                </div>
                <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-delay="400">
                    <p className={classes.statisticItemTextBefore}>{t(`banner.comingSoon`)}</p>
                    <p className={classes.statisticItemCount}>100+</p>
                    <div className={classes.statisticItemText}>{t(`banner.expertDoctors`)}</div>
                </div>
                <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-delay="600">
                    <p className={classes.statisticItemTextBefore}>{t(`banner.comingSoon`)}</p>
                    <p className={classes.statisticItemCount}>100+</p>
                    <div className={classes.statisticItemText}>{t(`banner.expertVeterinarians`)}</div>
                </div>
            </div>
            {
                lang === "en" ? (
                    <img src={doctor} alt="Doctor" className={classes.doctor} data-aos="fade" data-aos-delay="200"/>
                ) : lang === "ua" ? (
                    <img src={doctorUa} alt="Doctor" className={classes.doctor} data-aos="fade" data-aos-delay="200"/>
                ) : (
                    <img src={doctorPl} alt="Doctor" className={classes.doctor} data-aos="fade" data-aos-delay="200"/>
                )
            }
        </div>
    );
};

export default Banner;
