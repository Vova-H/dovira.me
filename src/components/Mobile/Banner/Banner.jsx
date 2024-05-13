import React from 'react';
import classes from "./banner.module.css"
import doctor from "../../../assets/images/banner/mobile/picture of doctor.svg"

const Banner = () => {
    return (
        <div className={classes.bannerWrapper}>
                <h1 className={classes.title}>Are you tired of queues in hospitals?</h1>
                <p className={classes.subtitle}>Get quality doctor visits from home with Medivisit.</p>
                <button className={classes.button}>Download app</button>
                <div className={classes.statistic}>
                    <div className={classes.statisticItemWrapper}>
                        <p className={classes.statisticItemTextBefore}>Coming soon</p>
                        <p className={classes.statisticItemCount}>150k</p>
                        <div className={classes.statisticItemText}>Patients</div>
                    </div>
                    <div className={classes.statisticItemWrapper}>
                        <p className={classes.statisticItemTextBefore}>Coming soon</p>
                        <p className={classes.statisticItemCount}>100+</p>
                        <div className={classes.statisticItemText}>Expert doctors</div>
                    </div>
                    <div className={classes.statisticItemWrapper}>
                        <p className={classes.statisticItemTextBefore}>Coming soon</p>
                        <p className={classes.statisticItemCount}>100+</p>
                        <div className={classes.statisticItemText}>Expert veterinarians</div>
                    </div>
                </div>
                <img src={doctor} alt="Doctor" className={classes.doctor}/>
        </div>
    );
};

export default Banner;
