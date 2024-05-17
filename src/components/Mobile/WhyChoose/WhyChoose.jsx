import React, {forwardRef} from 'react';
import classes from "./whyChoose.module.css"
import doctor from "../../../assets/images/whyChoose/picture.png"
import check from "../../../assets/images/whyChoose/check.svg"

const WhyChoose = forwardRef((props, ref) => {
    return (
        <div className={classes.container} ref={ref}>
            <div className={classes.title} data-aos="fade-down" data-aos-delay="200" >Why choose Medivisit?</div>
            <div className={classes.reason} data-aos="fade-right" data-aos-delay="200" data-aos-duration="1500">
                <div className={classes.reasonNameWrapper}>
                    <img src={check} alt="check" className={classes.check}/>
                    <div className={classes.reasonName}>Convenience</div>
                </div>
                <div className={classes.reasonDescription}>
                    Access quality healthcare services without leaving your home, saving you time and hassle.
                </div>
            </div>
            <div className={classes.reason} data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500">
                <div className={classes.reasonNameWrapper}>
                    <img src={check} alt="check" className={classes.check}/>
                    <div className={classes.reasonName}>Comprehensive care</div>
                </div>
                <div className={classes.reasonDescription}>
                    From human health to veterinary care, Medivisit offers a wide range of medical services to meet
                    all your needs.
                </div>
            </div>

            <div className={classes.reason} data-aos="fade-right" data-aos-delay="400" data-aos-duration="1500">
                <div className={classes.reasonNameWrapper}>
                    <img src={check} alt="check" className={classes.check}/>
                    <div className={classes.reasonName}>Licensed professionals</div>
                </div>
                <div className={classes.reasonDescription}>
                    Our team consists of experienced and licensed medical professionals who provide compassionate
                    care tailored to your specific requirements.
                </div>
            </div>

            <div className={classes.reason} data-aos="fade-right" data-aos-delay="500" data-aos-duration="1500">
                <div className={classes.reasonNameWrapper}>
                    <img src={check} alt="check" className={classes.check}/>
                    <div className={classes.reasonName}>24/7 availability</div>
                </div>
                <div className={classes.reasonDescription}>
                    Medical emergencies can happen at any time. With Medivisit, help is just a tap away, day or
                    night.
                </div>
            </div>
            <img src={doctor} alt="Doctor" className={classes.doctorImage} data-aos="fade" data-aos-delay="200" data-aos-duration="1500"/>
        </div>
    );
});

export default WhyChoose;
