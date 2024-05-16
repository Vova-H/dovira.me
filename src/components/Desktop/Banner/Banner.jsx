import React from 'react';
import classes from "./banner.module.css"
import pictureDoctor from "../../../assets/images/banner/picture of doctor.png"
import smallCard from "../../../assets/images/banner/smallCard.png"
import card from "../../../assets/images/banner/card.png"
import facebook from "../../../assets/images/banner/facebook.svg"
import instagram from "../../../assets/images/banner/instagram.svg"
import linkedIn from "../../../assets/images/banner/linkedin.svg"

const Banner = () => {
    return (
        <div className={classes.bannerWrapper}>
            <div className={classes.socialLinksWrapper}>
                <div className={classes.socialLinkItemWrapper}>
                    <a href="https://www.facebook.com/MediVisit.dr">
                        <img src={facebook} alt="Facebook" className={classes.socialLinkItem}/>
                    </a>
                    <a href="https://www.linkedin.com/in/medivisit-admin/" style={{textDecoration: "none"}}>
                        <img src={linkedIn} alt="Linked In" className={classes.socialLinkItem}/>
                    </a>
                    <a href="https://www.instagram.com/medivisit.dr_/">
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
                            <p className={classes.upperStatisticItemText}>coming soon</p>
                            <p className={classes.statisticItemCount}>150k</p>
                            <div className={classes.statisticItemText}>Patients</div>
                        </div>
                        <div className={classes.statisticItemWrapper}>
                            <p className={classes.upperStatisticItemText}>coming soon</p>
                            <p className={classes.statisticItemCount}>100+</p>
                            <div className={classes.statisticItemText}>Expert doctors</div>
                        </div>
                        <div className={classes.statisticItemWrapper}>
                            <p className={classes.upperStatisticItemText}>coming soon</p>
                            <p className={classes.statisticItemCount}>100+</p>
                            <div className={classes.statisticItemText}>Expert veterinarians</div>
                        </div>
                    </div>
                </div>
                <div className={classes.bannerRightSide}>
                    <div className={classes.doctorImgWrapper}>
                        <img src={pictureDoctor} alt="Doctor" className={classes.doctorImg}/>
                    </div>
                    {/*<div className={classes.smallCardWrapper}>*/}
                    {/*    <img src={smallCard} alt="Small card" className={classes.smallCard}/>*/}
                    {/*</div>*/}
                    {/*<div className={classes.cardWrapper}>*/}
                    {/*    <img src={card} alt="Card" className={classes.card}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default Banner;
