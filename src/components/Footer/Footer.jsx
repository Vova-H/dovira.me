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
                    <a href=" https://www.facebook.com">
                        <img src={facebook} alt="Facebook" className={classes.socialLinkItem}/>
                    </a>
                    <a href="https://www.linkedin.com">
                        <img src={linkedIn} alt="Linked In" className={classes.socialLinkItem}/>
                    </a>
                    <a href="https://www.instagram.com/">
                        <img src={instagram} alt="Instagram" className={classes.socialLinkItem}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
