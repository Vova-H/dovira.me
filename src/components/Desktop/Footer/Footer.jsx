import React from 'react';
import classes from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={classes.container}>
            <div className={classes.content}>
                <div className={classes.copyright}>© 2024 DOVIRA. All rights reserved. </div>
            </div>
        </footer>
    );
};

export default Footer;
