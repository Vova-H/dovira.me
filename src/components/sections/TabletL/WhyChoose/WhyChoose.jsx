import React, {forwardRef} from 'react';
import classes from "./whyChoose.module.css"
import doctor from "../../../../assets/images/whyChoose/picture.png"
import doctorUa from "../../../../assets/images/whyChoose/pictureUa.png"
import doctorPl from "../../../../assets/images/whyChoose/picturePl.png"
import check from "../../../../assets/images/whyChoose/check.svg"
import {useTranslation} from "react-i18next";
import i18n from "../../../../i18n";
import LazyImage from "../../../ui/LazyImage";



const WhyChoose = forwardRef((props, ref) => {

    const {t} = useTranslation();
    const lang = i18n.language;
    return (
        <div className={classes.container} ref={ref}>
            <div className={classes.leftSide}>
                {
                    lang === "en" ? (
                        <LazyImage src={doctor} alt="Doctor" className={classes.doctorImage} data-aos="fade" data-aos-delay="200"
                             data-aos-duration="1500"/>
                    ) : lang === "ua" ? (
                        <LazyImage src={doctorUa} alt="Doctor" className={classes.doctorImage} data-aos="fade" data-aos-delay="200"
                             data-aos-duration="1500"/>
                    ) : (
                        <LazyImage src={doctorPl} alt="Doctor" className={classes.doctorImage} data-aos="fade" data-aos-delay="200"
                             data-aos-duration="1500"/>
                    )
                }
            </div>
            <div className={classes.rightSide}>
                <div className={classes.title} data-aos="fade-down">{t("whyChoose.whyChoose")}</div>

                <div className={classes.reason} data-aos="fade-right" data-aos-delay="200">
                    <div className={classes.reasonNameWrapper}>
                        <img src={check} alt="check" className={classes.check}/>
                        <div className={classes.reasonName}>{t("whyChoose.title1")}</div>
                    </div>
                    <div className={classes.reasonDescription}>
                        {t("whyChoose.description1")}
                    </div>
                </div>

                <div className={classes.reason} data-aos="fade-right" data-aos-delay="400">
                    <div className={classes.reasonNameWrapper}>
                        <img src={check} alt="check" className={classes.check}/>
                        <div className={classes.reasonName}>{t("whyChoose.title2")}</div>
                    </div>
                    <div className={classes.reasonDescription}>
                        {t("whyChoose.description2")}
                    </div>
                </div>

                <div className={classes.reason} data-aos="fade-right" data-aos-delay="600">
                    <div className={classes.reasonNameWrapper}>
                        <img src={check} alt="check" className={classes.check}/>
                        <div className={classes.reasonName}>{t("whyChoose.title3")}</div>
                    </div>
                    <div className={classes.reasonDescription}>
                        {t("whyChoose.description3")}
                    </div>
                </div>

                <div className={classes.reason} data-aos="fade-right" data-aos-delay="800">
                    <div className={classes.reasonNameWrapper}>
                        <img src={check} alt="check" className={classes.check}/>
                        <div className={classes.reasonName}>{t("whyChoose.title4")}</div>
                    </div>
                    <div className={classes.reasonDescription}>
                        {t("whyChoose.description4")}
                    </div>
                </div>
            </div>
        </div>
    );
});

export default WhyChoose;
