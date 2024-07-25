import React from 'react';
import classes from "./banner.module.css"
import doctor from "../../../assets/images/banner/mobile/picture of doctor.png"

const Banner = ({scrollTo, refs}) => {

    const handleNavigationClick = (ref) => {
        scrollTo(ref);
    };

    return (
        <div className={classes.bannerWrapper}>
            <h1 className={classes.title} data-aos="fade-left" data-aos-delay="200">
                Are you tired of queues in hospitals?
            </h1>
            <p className={classes.subtitle} data-aos="fade-left" data-aos-delay="200">
                Get quality doctor visits from home with DOVIRA.
            </p>
            <button className={classes.button}
                    data-aos="fade"
                    data-aos-delay="200"
                    data-aos-duration="2000"
                    onClick={() => handleNavigationClick(refs.ourPrioritiesRef)}
            >Try our web version
            </button>
            <div className={classes.statistic}>
                <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-delay="200">
                    <p className={classes.statisticItemTextBefore}>Coming soon</p>
                    <p className={classes.statisticItemCount}>150k</p>
                    <div className={classes.statisticItemText}>Patients</div>
                </div>
                <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-delay="400">
                    <p className={classes.statisticItemTextBefore}>Coming soon</p>
                    <p className={classes.statisticItemCount}>100+</p>
                    <div className={classes.statisticItemText}>Expert doctors</div>
                </div>
                <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-delay="600">
                    <p className={classes.statisticItemTextBefore}>Coming soon</p>
                    <p className={classes.statisticItemCount}>100+</p>
                    <div className={classes.statisticItemText}>Expert veterinarians</div>
                </div>
            </div>
            <img src={doctor} alt="Doctor" className={classes.doctor} data-aos="fade" data-aos-delay="200"/>
        </div>
    );
};

export default Banner;
