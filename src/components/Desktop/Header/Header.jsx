import React from 'react';
import classes from './header.module.css';
import Logo from "../../../assets/images/banner/logo.svg";


const Header = ({scrollTo, refs}) => {

    const handleNavigationClick = (ref) => {
        scrollTo(ref);
    };

    return (
        <header className={classes.headerContainer}>
            <div className={classes.header}>
                <img className={classes.logo} src={Logo} alt="Logo" data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="2000" />
                <div className={classes.navigation}>
                    <div className={classes.navigationItem}
                         onClick={() => handleNavigationClick(refs.ourServicesRef)}
                         data-aos="fade-down" data-aos-delay="200"
                    >
                        Our services
                    </div>
                    <div className={classes.navigationItem}
                         onClick={() => handleNavigationClick(refs.whyChooseUsRef)}
                         data-aos="fade-down" data-aos-delay="400"
                    >
                        Why choose us
                    </div>
                    <div className={classes.navigationItem}
                         onClick={() => handleNavigationClick(refs.ourPrioritiesRef)}
                         data-aos="fade-down" data-aos-delay="600"
                    >
                        Our priorities
                    </div>
                    <div className={classes.navigationItem}
                         onClick={() => handleNavigationClick(refs.downloadAppRef)}
                         data-aos="fade-down" data-aos-delay="800"
                    >
                        Download the app
                    </div>
                    <div className={classes.navigationItem}
                         onClick={() => handleNavigationClick(refs.contactUsRef)}
                         data-aos="fade-down" data-aos-delay="1000"
                    >
                        Contact us
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
