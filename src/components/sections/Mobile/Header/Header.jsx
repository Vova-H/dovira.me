import React, {useContext, useEffect, useState} from 'react';
import classes from './header.module.css';
import Logo from "../../../../assets/images/banner/logo.svg";
import Burger from "../../../../assets/images/banner/mobile/burger menu.svg";
import FaceBook from "../../../../assets/images/footer/facebook.svg";
import Instagram from "../../../../assets/images/footer/instagram.svg";
import LinkedIn from "../../../../assets/images/footer/linkedin.svg";
import closeIcon from "../../../../assets/images/banner/mobile/cross.svg";
import {LanguageContext} from "../../../../context/LanguageProvider";
import {useTranslation} from "react-i18next";
import arrowImg from "../../../../assets/images/header/arrow.png";


const Header = ({scrollTo, refs}) => {


    const [openedMenu, setOpenedMenu] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const services = refs.ourServicesRef;
    const whyChooseUs = refs.whyChooseUsRef
    const priorities = refs.ourPrioritiesRef
    const downloadApp = refs.downloadAppRef
    const contactUs = refs.contactUsRef

    const {changeLanguage} = useContext(LanguageContext);
    const {t, i18n} = useTranslation();

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
        setDropdownOpen(false);
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
            <img src={openedMenu ? closeIcon : Burger}
                alt={openedMenu ? "Close menu" : "Burger menu"}
                className={classes.burger}
                onClick={handleOpenMenu}
            />
            <div className={`${classes.menu} ${openedMenu ? classes.menuOpen : ''}`}>
                <nav className={classes.nav}>

                    <div className={classes.navigationItem} onClick={toggleDropdown}>
                        <div className={classes.navigationItemChangeLang}>
                            {t(`header.language.${i18n.language}`)}
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
                        </div>
                    </div>


                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(services)}>
                        {t("header.ourServices")}
                    </p>
                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(whyChooseUs)}>
                        {t("header.whyChooseUs")}
                    </p>
                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(priorities)}>
                        {t("header.webVersion")}
                    </p>
                    <p className={classes.navigationItem}
                       onClick={() => handleNavigationClick(downloadApp)}>
                        {t("header.downloadApp")}
                    </p>
                    <p className={classes.navigationItem} onClick={() => handleNavigationClick(contactUs)}>
                        {t("header.contactUs")}
                    </p>
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
