import React, {useContext, useEffect, useState} from 'react';
import classes from './header.module.css';
import Logo from "../../../assets/images/banner/logo.svg";
import i18n from "../../../i18n";
import {LanguageContext} from "../../../context/LanguageProvider";
import {useTranslation} from "react-i18next";
import closeIcon from "../../../assets/images/banner/mobile/cross.svg";
import Burger from "../../../assets/images/banner/mobile/burger menu.svg";
import FaceBook from "../../../assets/images/footer/facebook.svg";
import LinkedIn from "../../../assets/images/footer/linkedin.svg";
import Instagram from "../../../assets/images/footer/instagram.svg";
import arrowImg from "../../../assets/images/header/arrow.png";


const Header = ({scrollTo, refs}) => {


    const [openedMenu, setOpenedMenu] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [chosenLangCode, setChosenLangCode] = useState(i18n.language);

    useEffect(() => {
        if (openedMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [openedMenu]);

    const services = refs.ourServicesRef;
    const whyChooseUs = refs.whyChooseUsRef
    const priorities = refs.ourPrioritiesRef
    const downloadApp = refs.downloadAppRef
    const contactUs = refs.contactUsRef

    const {changeLanguage} = useContext(LanguageContext);
    const {t} = useTranslation();

    const handleOpenMenu = () => {
        setOpenedMenu(prevState => !prevState);
    };


    const handleNavigationClick = (ref) => {
        scrollTo(ref);
        setOpenedMenu(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleChangeLanguage = (lang, langCode) => {
        changeLanguage(langCode)
        setChosenLangCode(langCode)
        setDropdownOpen(false);
    };

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
                        Our services
                    </p>
                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(whyChooseUs)}>
                        Why choose us
                    </p>
                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(priorities)}>
                        Web version
                    </p>
                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(downloadApp)}>
                        Download the app
                    </p>
                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(contactUs)}>
                        Contact us
                    </p>

                    <div className={classes.navigationItem} onClick={toggleDropdown}>
                        <p className={classes.navigationItemChangeLang}>
                            {t(`header.language.${chosenLangCode}`)}
                            {dropdownOpen ?
                                <img className={classes.dropIcon} src={arrowImg} alt="arrow"/>
                                :
                                <img className={classes.dropIconOpened} src={arrowImg} alt="arrow"/>
                            }
                            {dropdownOpen && (
                                <div className={classes.dropdownMenu}>
                                    <div className={classes.dropdownItem}
                                         onClick={() => handleChangeLanguage("Eng", "en")}>English
                                    </div>
                                    <div className={classes.dropdownItem}
                                         onClick={() => handleChangeLanguage("Українська", "ua")}>Українська
                                    </div>
                                    <div className={classes.dropdownItem}
                                         onClick={() => handleChangeLanguage("Polski", "pl")}>Polski
                                    </div>
                                </div>
                            )}
                        </p>

                    </div>


                </nav>
                <div className={classes.socials}>
                    <a href="https://www.facebook.com/D0VIRA.me">
                        <img src={FaceBook} alt="Facebook" className={classes.socialItem}/>
                    </a>
                    <a href="https://www.linkedin.com/company/dovira-me/">
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
