import React, {useEffect} from 'react';
import classes from "./banner.module.css"
import pictureDoctor from "../../../assets/images/banner/picture of doctor.png"
import facebook from "../../../assets/images/banner/facebook.svg"
import instagram from "../../../assets/images/banner/instagram.svg"
import linkedIn from "../../../assets/images/banner/linkedin.svg"
import smallCard from "../../../assets/images/banner/smallCard.png"
import card from "../../../assets/images/banner/card.png"
import 'aos/dist/aos.css'
import AOS from "aos";

const Banner = ({scrollTo, refs}) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    }, []);

    const handleNavigationClick = (ref) => {
        scrollTo(ref);
    };

    return (
        <div className={classes.bannerWrapper}>
            <div className={classes.socialLinksWrapper}>
                <div className={classes.socialLinkItemWrapper}>
                    <a href="https://www.facebook.com/MediVisit.dr" data-aos="fade-right">
                        <img src={facebook} alt="Facebook" className={classes.socialLinkItem}/>
                    </a>
                    <a href="https://www.linkedin.com/in/medivisit-admin/" style={{textDecoration: "none"}}
                       data-aos="fade-right">
                        <img src={linkedIn} alt="Linked In" className={classes.socialLinkItem}/>
                    </a>
                    <a href="https://www.instagram.com/medivisit.dr_/" data-aos="fade-right">
                        <img src={instagram} alt="Instagram" className={classes.socialLinkItem}/>
                    </a>
                </div>
            </div>
            <div className={classes.bannerContent}>
                <div className={classes.bannerLeftSide}>
                    <h1 className={classes.title} data-aos="fade-up" data-aos-delay="300">Are you tired of queues in hospitals?</h1>
                    <p className={classes.subtitle} data-aos="fade-up" data-aos-delay="300">Get quality doctor visits
                        from home with Medivisit.</p>
                    <button className={classes.button} data-aos="fade-up" data-aos-delay="400"
                            onClick={() => handleNavigationClick(refs.downloadAppRef)}>Download app
                    </button>
                    <div className={classes.statistic}>
                        <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-duration={2000}>
                            <p className={classes.upperStatisticItemText}>coming soon</p>
                            <p className={classes.statisticItemCount}>150k</p>
                            <div className={classes.statisticItemText}>Patients</div>
                        </div>
                        <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-duration={2000}>
                            <p className={classes.upperStatisticItemText}>coming soon</p>
                            <p className={classes.statisticItemCount}>100+</p>
                            <div className={classes.statisticItemText}>Expert doctors</div>
                        </div>
                        <div className={classes.statisticItemWrapper} data-aos="fade-up" data-aos-duration={2000}>
                            <p className={classes.upperStatisticItemText}>coming soon</p>
                            <p className={classes.statisticItemCount}>100+</p>
                            <div className={classes.statisticItemText}>Expert veterinarians</div>
                        </div>
                    </div>
                </div>
                <div className={classes.bannerRightSide}>
                    <div className={classes.doctorImgWrapper} data-aos-delay="200"  data-aos="fade-in" data-aos-duration={1000}>
                        <img src={pictureDoctor} alt="Doctor" className={classes.doctorImg}/>
                    </div>
                    <div className={classes.smallCardWrapper} data-aos="fade-right" data-aos-duration={1000}>
                        <img src={smallCard} alt="Small card" className={classes.smallCard}/>
                    </div>
                    <div className={classes.cardWrapper} data-aos="fade-left" data-aos-duration={1000}>
                        <img src={card} alt="Card" className={classes.card}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

