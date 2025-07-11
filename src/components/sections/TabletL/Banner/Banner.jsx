import React from 'react';
import classes from "./banner.module.css"
import pictureDoctor from "../../../../assets/images/banner/picture of doctor.png"
import facebook from "../../../../assets/images/banner/facebook.svg"
import instagram from "../../../../assets/images/banner/instagram.svg"
import linkedIn from "../../../../assets/images/banner/linkedin.svg"
import smallCard from "../../../../assets/images/banner/smallCard.png"
import card from "../../../../assets/images/banner/card.png"
import smallCardUa from "../../../../assets/images/banner/smallCardUa.png"
import cardUa from "../../../../assets/images/banner/cardUa.png"
import smallCardPl from "../../../../assets/images/banner/smallCardPl.png"
import cardPl from "../../../../assets/images/banner/cardPl.png"
import {useTranslation} from "react-i18next";
import i18n from "../../../../i18n";
import {useModal} from "../../../../context/ModalContext";
import Button from "../../../ui/button/Button";


const Banner = () => {

    const {t} = useTranslation();
    const lang = i18n.language
    const {openModal} = useModal();


    return (
        <section className={classes.bannerWrapper}>
            <div className={classes.socialLinksWrapper}>
                <div className={classes.socialLinkItemWrapper}>
                    <a href="https://www.facebook.com/D0VIRA.me" data-aos="fade-right" data-aos-delay="300">
                        <img src={facebook} alt="Facebook" className={classes.socialLinkItem}/>
                    </a>
                    <a href="https://www.linkedin.com/company/dovira-me/"
                       data-aos-delay="300" data-aos="fade-right">
                        <img src={linkedIn} alt="Linked In" className={classes.socialLinkItem}/>
                    </a>
                    <a href="https://www.instagram.com/dovira.me?igsh=MWc1ODFqbDV6aGppeg%3D%3D&utm_source=qr"
                       data-aos="fade-right" data-aos-delay="300">
                        <img src={instagram} alt="Instagram" className={classes.socialLinkItem}/>
                    </a>
                </div>
            </div>
            <div className={classes.bannerContent}>
                <div className={classes.bannerLeftSide}>
                    <h1 className={classes.title} data-aos="fade-up" data-aos-delay="400">
                        {t(`banner.title`)}
                    </h1>
                    <p className={classes.subtitle} data-aos="fade-up" data-aos-delay="400">
                        {t(`banner.subtitle`)}
                    </p>
                    <Button data-aos="fade-up" data-aos-delay="400"
                            onClick={openModal}
                            text={t(`banner.button`)}
                            styles={{maxWidth: "320px", fontSize: "18px", marginBottom:"20px"}}
                    />

                </div>
                <div className={classes.bannerRightSide}>
                    <div className={classes.doctorImgWrapper} data-aos-delay="200" data-aos="fade-in"
                         data-aos-duration={1000}>
                        <img src={pictureDoctor} alt="Doctor" className={classes.doctorImg}/>
                    </div>

                    {
                        lang === "en" ? (
                            <img src={smallCard} alt="Small card" className={classes.smallCard} data-aos="fade-up"/>
                        ) : lang === "ua" ? (
                            <img src={smallCardUa} alt="Small card" className={classes.smallCard} data-aos="fade-up"/>
                        ) : (
                            <img src={smallCardPl} alt="Small card" className={classes.smallCard} data-aos="fade-up"/>
                        )
                    }

                    {
                        lang === "en" ? (
                            <img src={card} alt="Card" className={classes.card} data-aos="fade-down"/>
                        ) : lang === "ua" ? (
                            <img src={cardUa} alt="Card" className={classes.card} data-aos="fade-down"/>
                        ) : (
                            <img src={cardPl} alt="Card" className={classes.card} data-aos="fade-down"/>
                        )
                    }

                </div>
                <div className={classes.statistic}>
                    <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-duration={2000}>
                        <p className={classes.upperStatisticItemText}>{t(`banner.comingSoon`)}</p>
                        <p className={classes.statisticItemCount}>{t(`banner.count`)}</p>
                        <div className={classes.statisticItemText}>{t(`banner.patients`)}</div>
                    </div>
                    <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-duration={2000}>
                        <p className={classes.upperStatisticItemText}>{t(`banner.comingSoon`)}</p>
                        <p className={classes.statisticItemCount}>100+</p>
                        <div className={classes.statisticItemText}>{t(`banner.expertDoctors`)}</div>
                    </div>
                    <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-duration={2000}>
                        <p className={classes.upperStatisticItemText}>{t(`banner.comingSoon`)}</p>
                        <p className={classes.statisticItemCount}>100+</p>
                        <div className={classes.statisticItemText}>{t(`banner.expertVeterinarians`)}</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;

