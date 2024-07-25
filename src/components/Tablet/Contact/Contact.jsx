import React, {forwardRef} from 'react';
import email from "../../../assets/images/contact/email.png"
import classes from "./contact.module.css"
import facebook from "../../../assets/images/footer/facebook.svg";
import linkedIn from "../../../assets/images/footer/linkedin.svg";
import instagram from "../../../assets/images/footer/instagram.svg";

const Contact = forwardRef((props, ref) => {
    return (
        <div className={classes.container} ref={ref} data-aos="fade-up" data-aos-duration="2500"
             data-aos-anchor-placement="top-bootom">
            <img src={email} alt="Email" className={classes.image}/>
            <div className={classes.title}>
                If you have any questions, please, feel free to contact us through social media and send us a message.
            </div>
            <div className={classes.socialLinks}>
                <a href="///Facebook">
                    <img src={facebook} alt="Facebook"/>
                </a>
                <a href="https://www.linkedin.com/company/dovira-me/">
                    <img src={linkedIn} alt="Linked In"/>
                </a>
                <a href="https://www.instagram.com/dovira.me?igsh=MWc1ODFqbDV6aGppeg%3D%3D&utm_source=qr">
                    <img src={instagram} alt="Instagram"/>
                </a>
            </div>
        </div>
    );
});

export default Contact;
