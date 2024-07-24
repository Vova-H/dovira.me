import React, {useEffect, useState} from 'react';
import classes from './header.module.css';
import Logo from "../../../assets/images/banner/logo.svg";
import Burger from "../../../assets/images/banner/mobile/burger menu.svg";
import FaceBook from "../../../assets/images/footer/facebook.svg";
import Instagram from "../../../assets/images/footer/instagram.svg";
import LinkedIn from "../../../assets/images/footer/linkedin.svg";
import closeIcon from "../../../assets/images/banner/mobile/cross.svg";


const Header = ({scrollTo, refs}) => {


    const [openedMenu, setOpenedMenu] = useState(false);
    const services = refs.ourServicesRef;
    const whyChooseUs = refs.whyChooseUsRef
    const priorities = refs.ourPrioritiesRef
    const downloadApp = refs.downloadAppRef
    const contactUs = refs.contactUsRef

    const handleOpenMenu = () => {
        setOpenedMenu(prevState => !prevState);
    };

    const handleNavigationClick = (ref) => {
        scrollTo(ref);
        setOpenedMenu(false);
    };

    useEffect(() => {
        if (openedMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openedMenu]);

    return (
        <header className={classes.header}>
            <img className={classes.logo} src={Logo} alt="Logo"/>
            <img
                src={openedMenu ? closeIcon : Burger}
                alt={openedMenu ? "Close menu" : "Burger menu"}
                className={classes.burger}
                onClick={handleOpenMenu}
            />
            <div className={`${classes.menu} ${openedMenu ? classes.menuOpen : ''}`}>
                <nav className={classes.nav}>
                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(services)}>
                        Our
                        services</p>
                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(whyChooseUs)}>
                        Why
                        choose us</p>
                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(priorities)}>
                        Web version
                    </p>
                    <p className={classes.navigationItem}
                       onClick={() => handleNavigationClick(downloadApp)}>Download the app
                    </p>
                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(contactUs)}>
                        Contact us
                    </p>
                </nav>
                <div className={classes.socials}>
                    <a href="https://www.facebook.com/MediVisit.dr">
                        <img src={FaceBook} alt="Facebook" className={classes.socialItem}/>
                    </a>
                    <a href="https://www.linkedin.com/company/medivisit-dr/about/?viewAsMember=true">
                        <img src={LinkedIn} alt="LinkedIn" className={classes.socialItem}/>
                    </a>
                    <a href="https://www.instagram.com/dovira.me?igsh=MWc1ODFqbDV6aGppeg%3D%3D&utm_source=qr">
                        <img src={Instagram} alt="Instagram" className={classes.socialItem}/>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
