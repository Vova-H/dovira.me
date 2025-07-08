import React, {forwardRef} from 'react';
import classes from "./ourServices.module.css";
import videoConsultation from "../../../../assets/images/ourServices/video consultation.svg";
import prescriptions from "../../../../assets/images/ourServices/prescription.svg"
import sickLeave from "../../../../assets/images/ourServices/sickLeave.svg";
import veterinaryCare from "../../../../assets/images/ourServices/paw.svg"
import 'aos/dist/aos.css'
import {useTranslation} from "react-i18next";

const OurServices = forwardRef((props, ref) => {

    const {t} = useTranslation();

    return (
        <section className={classes.container} ref={ref}>
            <div className={classes.title} data-aos="fade-down" data-aos-delay="200">  {t(`ourServices.ourServices`)}</div>
            <div className={classes.serviceWrapper}>
                <div className={classes.service} data-aos="fade-up">
                    <img src={videoConsultation} alt="doctor" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>{t(`ourServices.title1`)}</div>
                    <div className={classes.serviceDescription}>
                        {t(`ourServices.description1`)}
                    </div>
                </div>

                <div className={classes.service} data-aos="fade-up" data-aos-delay="200">
                    <img src={prescriptions} alt="prescriptions" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>{t(`ourServices.title2`)}</div>
                    <div className={classes.serviceDescription}>
                        {t(`ourServices.description2`)}
                    </div>
                </div>

                <div className={classes.service} data-aos="fade-up" data-aos-delay="400">
                    <img src={sickLeave} alt="video consultation" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>{t(`ourServices.title3`)}</div>
                    <div className={classes.serviceDescription}>
                        {t(`ourServices.description3`)}
                    </div>
                </div>

                <div className={classes.service} data-aos="fade-up" data-aos-delay="600">
                    <img src={veterinaryCare} alt="veterinary care" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>{t(`ourServices.title4`)}</div>
                    <div className={classes.serviceDescription}>
                        {t(`ourServices.description4`)}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default OurServices;
