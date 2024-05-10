import React from 'react';
import classes from "./banner.module.css"
import pictureDoctor from "../../assets/images/picture of doctor.svg"
import smallCard from "../../assets/images/smallCard.png"
import card from "../../assets/images/card.png"
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import linkedIn from "../../assets/images/linkedin.png"

const Banner = () => {
    return (
        <div className={classes.bannerWrapper}>
            <div className={classes.socialLinksWrapper}>
                <div className={classes.socialLinkItemWrapper}>
                    <a href=" https://www.facebook.com">
                        <img src={facebook} alt="Facebook" className={classes.socialLinkItem}/>
                    </a>
                    <a href="https://www.linkedin.com" style={{textDecoration: "none"}}>
                        <img src={linkedIn} alt="Linked In" className={classes.socialLinkItem}/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={instagram} alt="Instagram" className={classes.socialLinkItem}/>
                    </a>
                </div>
            </div>
            <div className={classes.bannerContent}>
                <div className={classes.bannerLeftSide}>
                    <h1 className={classes.title}>Are you tired of queues in hospitals?</h1>
                    <p className={classes.subtitle}>Get quality doctor visits from home with Medivisit.</p>
                    <button className={classes.button}>Download app</button>
                    <div className={classes.statistic}>
                        <div className={classes.statisticItemWrapper}>
                            <p className={classes.statisticItemCount}>150k</p>
                            <div className={classes.statisticItemText}>Patients</div>
                        </div>
                        <div className={classes.statisticItemWrapper}>
                            <p className={classes.statisticItemCount}>100+</p>
                            <div className={classes.statisticItemText}>Expert doctors</div>
                        </div>
                        <div className={classes.statisticItemWrapper}>
                            <p className={classes.statisticItemCount}>100+</p>
                            <div className={classes.statisticItemText}>Expert veterinarians</div>
                        </div>
                    </div>
                </div>
                <div className={classes.bannerRightSide}>
                    <div className={classes.doctorImgWrapper}>
                        <img src={pictureDoctor} alt="Doctor" className={classes.doctorImg}/>
                    </div>
                    <div className={classes.smallCardWrapper}>
                        <img src={smallCard} alt="Small card" className={classes.smallCard}/>
                    </div>
                    <div className={classes.cardWrapper}>
                        <img src={card} alt="Card" className={classes.card}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
