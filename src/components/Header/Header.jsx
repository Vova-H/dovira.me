import React from 'react';
import classes from './header.module.css';
import Logo from "../../assets/images/logo.svg";


const Header = () => {

    return (
        <div className={classes.headerContainer}>
            <div className={classes.header}>
                <img className={classes.logo} src={Logo} alt="Logo"/>
                <div className={classes.navigation}>
                    <div className={classes.navigationItem}>Our services</div>
                    <div className={classes.navigationItem}>Why choose us</div>
                    <div className={classes.navigationItem}>Our priorities</div>
                    <div className={classes.navigationItem}>Download the app</div>
                    <div className={classes.navigationItem}>Contact us</div>
                </div>
            </div>

        </div>
    );
};

export default Header;
