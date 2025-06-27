import React from 'react';
import classes from "./banner.module.css";
import pictureDoctor from "../../../../assets/images/banner/picture of doctor.png";
import facebook from "../../../../assets/images/banner/facebook.svg";
import instagram from "../../../../assets/images/banner/instagram.svg";
import linkedIn from "../../../../assets/images/banner/linkedin.svg";
import smallCard from "../../../../assets/images/banner/smallCard.png";
import card from "../../../../assets/images/banner/card.png";
import { useTranslation } from "react-i18next";
import i18n from "../../../../i18n";
import LazyImage from "../../../ui/LazyImage";
import smallCardUa from "../../../../assets/images/banner/smallCardUa.png";
import smallCardPl from "../../../../assets/images/banner/smallCardPl.png";
import cardUa from "../../../../assets/images/banner/cardUa.png";
import cardPl from "../../../../assets/images/banner/cardPl.png";
import Button from "../../../ui/button/Button";

import { useModal } from "../../../../context/ModalContext";

const Banner = () => {
    const { t } = useTranslation();
    const lang = i18n.language;

    const { openModal } = useModal();

    return (
        <div className={classes.bannerWrapper}>
            <div className={classes.socialLinksWrapper}>
                <div className={classes.socialLinkItemWrapper}>
                    <a href="https://www.facebook.com/D0VIRA.me" data-aos="fade-right" data-aos-delay="300">
                        <LazyImage src={facebook} alt="Facebook" className={classes.socialLinkItem} />
                    </a>
                    <a href="https://www.linkedin.com/company/dovira-me/" data-aos-delay="300" data-aos="fade-right">
                        <LazyImage src={linkedIn} alt="Linked In" className={classes.socialLinkItem} />
                    </a>
                    <a
                        href="https://www.instagram.com/dovira.me?igsh=MWc1ODFqbDV6aGppeg%3D%3D&utm_source=qr"
                        data-aos="fade-right"
                        data-aos-delay="300"
                    >
                        <LazyImage src={instagram} alt="Instagram" className={classes.socialLinkItem} />
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

                    <Button
                        text={t(`banner.button`)}
                        onClick={openModal}
                        data-aos="fade-up"
                        data-aos-delay="400"
                        styles={{ marginBottom: "80px", padding: "17px 77px" }}
                    />

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

                <div className={classes.bannerRightSide}>
                    <LazyImage
                        src={pictureDoctor}
                        alt="Doctor"
                        className={classes.doctorImg}
                        data-aos-delay="200"
                        data-aos="fade-in"
                        data-aos-duration={1000}
                    />

                    <div className={classes.smallCardWrapper} data-aos="fade-right" data-aos-duration={2000}>
                        {lang === "en" ? (
                            <LazyImage src={smallCard} alt="Small card" className={classes.smallCard} />
                        ) : lang === "ua" ? (
                            <LazyImage src={smallCardUa} alt="Small card" className={classes.smallCard} />
                        ) : (
                            <LazyImage src={smallCardPl} alt="Small card" className={classes.smallCard} />
                        )}
                    </div>

                    <div className={classes.cardWrapper} data-aos="fade-left" data-aos-duration={2000}>
                        {lang === "en" ? (
                            <LazyImage src={card} alt="Card" className={classes.card} />
                        ) : lang === "ua" ? (
                            <LazyImage src={cardUa} alt="Card" className={classes.card} />
                        ) : (
                            <LazyImage src={cardPl} alt="Card" className={classes.card} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
