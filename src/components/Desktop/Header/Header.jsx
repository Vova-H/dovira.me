import React, {useContext, useState} from 'react';
import classes from './header.module.css';
import Logo from "../../../assets/images/banner/logo.svg";
import arrowImg from "../../../assets/images/header/arrow.png";
import {LanguageContext} from '../../../context/LanguageProvider';
import {useTranslation} from 'react-i18next';


const Header = ({scrollTo, refs}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [chosenLangCode, setChosenLangCode] = useState("en");

    const {changeLanguage} = useContext(LanguageContext);
    const {t} = useTranslation();


    const handleNavigationClick = (ref, offset = 0) => {
        scrollTo(ref, offset);
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
        <header className={classes.headerContainer}>
            <div className={classes.header}>
                <img className={classes.logo} src={Logo} alt="Logo" data-aos="fade-zoom-in" data-aos-delay="200"
                     data-aos-duration="2000"/>
                <div className={classes.navigation}>
                    <div className={classes.navigationItem}
                         onClick={() => handleNavigationClick(refs.ourServicesRef)}
                         data-aos="fade-down" data-aos-delay="200">
                        {t('header.ourServices')}
                    </div>
                    <div className={classes.navigationItem}
                         onClick={() => handleNavigationClick(refs.whyChooseUsRef)}
                         data-aos="fade-down" data-aos-delay="300">
                        {t('header.whyChooseUs')}
                    </div>
                    <div className={classes.navigationItem}
                         onClick={() => handleNavigationClick(refs.ourPrioritiesRef, -80)}
                         data-aos="fade-down" data-aos-delay="400">
                        {t('header.webVersion')}
                    </div>
                    <div className={classes.navigationItem}
                         onClick={() => handleNavigationClick(refs.downloadAppRef)}
                         data-aos="fade-down" data-aos-delay="500">
                        {t('header.downloadApp')}
                    </div>
                    <div className={classes.navigationItem}
                         onClick={() => handleNavigationClick(refs.contactUsRef)}
                         data-aos="fade-down" data-aos-delay="600">
                        {t('header.contactUs')}
                    </div>
                    <div className={classes.navigationItem} data-aos="fade-down" data-aos-delay="700"
                         onClick={toggleDropdown}
                    >
                        <p style={{display: "flex", alignItems: "center"}}>
                            {t(`header.language.${chosenLangCode}`)}
                            {dropdownOpen ?
                                <img className={classes.dropIcon} src={arrowImg} alt="arrow"/>
                                :
                                <img className={classes.dropIconOpened} src={arrowImg} alt="arrow"/>
                            }
                        </p>
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
            </div>
        </header>
    );
};

export default Header;
