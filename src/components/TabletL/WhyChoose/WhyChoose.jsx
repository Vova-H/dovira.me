import React, {forwardRef} from 'react';
import classes from "./whyChoose.module.css"
import doctor from "../../../assets/images/whyChoose/picture.png"
import check from "../../../assets/images/whyChoose/check.svg"
import {useTranslation} from "react-i18next";


const WhyChoose = forwardRef((props, ref) => {

    const {t} = useTranslation();

    return (
        <div className={classes.container} ref={ref}>
            <div className={classes.leftSide} data-aos="fade-right" data-aos-anchor-placement="top-bootom">
                <img src={doctor} alt="doctor" className={classes.doctorImage}/>
            </div>
            <div className={classes.rightSide}>
                <div className={classes.title} data-aos="fade-down">{t("whyChoose.whyChoose")}</div>

                <div className={classes.reason} data-aos="fade-left" data-aos-delay="200">
                    <div className={classes.reasonNameWrapper}>
                        <img src={check} alt="check" className={classes.check}/>
                        <div className={classes.reasonName}>{t("whyChoose.title1")}</div>
                    </div>
                    <div className={classes.reasonDescription}>
                        {t("whyChoose.description1")}
                    </div>
                </div>

                <div className={classes.reason} data-aos="fade-left" data-aos-delay="400">
                    <div className={classes.reasonNameWrapper}>
                        <img src={check} alt="check" className={classes.check}/>
                        <div className={classes.reasonName}>{t("whyChoose.title2")}</div>
                    </div>
                    <div className={classes.reasonDescription}>
                        {t("whyChoose.description2")}
                    </div>
                </div>

                <div className={classes.reason} data-aos="fade-left" data-aos-delay="600">
                    <div className={classes.reasonNameWrapper}>
                        <img src={check} alt="check" className={classes.check}/>
                        <div className={classes.reasonName}>{t("whyChoose.title3")}</div>
                    </div>
                    <div className={classes.reasonDescription}>
                        {t("whyChoose.description3")}
                    </div>
                </div>

                <div className={classes.reason} data-aos="fade-left" data-aos-delay="800">
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
