import React from 'react';
import classes from "./footer.module.css"
import facebook from "../../assets/images/footer/facebook.svg"
import linkedIn from "../../assets/images/footer/linkedin.svg"
import instagram from "../../assets/images/footer/instagram.svg"

const Footer = () => {
    return (
        <footer className={classes.container}>
            <div className={classes.content}>
                <div className={classes.copyright}>© 2024 MediVisit. All rights reserved.</div>
                <div className={classes.socialLinks}>
                    <img src={facebook} alt="Facebook" className={classes.socialLinkItem}/>
                    <img src={linkedIn} alt="LinkedIn" className={classes.socialLinkItem}/>
                    <img src={instagram} alt="Instagram" className={classes.socialLinkItem}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
