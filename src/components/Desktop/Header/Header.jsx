import React from 'react';
import classes from './header.module.css';
import Logo from "../../../assets/images/banner/logo.svg";

const Header = ({ scrollTo, refs }) => {
    const handleNavigationClick = (ref) => {
        scrollTo(ref);
    };

    return (
        <header className={classes.headerContainer}>
            <div className={classes.header}>
                <img className={classes.logo} src={Logo} alt="Logo" />
                <div className={classes.navigation}>
                    <div className={classes.navigationItem} onClick={() => handleNavigationClick(refs.ourServicesRef)}>
                        Our services
                    </div>
                    <div className={classes.navigationItem} onClick={() => handleNavigationClick(refs.whyChooseUsRef)}>
                        Why choose us
                    </div>
                    <div className={classes.navigationItem} onClick={() => handleNavigationClick(refs.ourPrioritiesRef)}>
                        Our priorities
                    </div>
                    <div className={classes.navigationItem} onClick={() => handleNavigationClick(refs.downloadAppRef)}>
                        Download the app
                    </div>
                    <div className={classes.navigationItem} onClick={() => handleNavigationClick(refs.contactUsRef)}>
                        Contact us
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
