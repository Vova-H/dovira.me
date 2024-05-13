import React from 'react';
import classes from './header.module.css';
import Logo from "../../../assets/images/banner/logo.svg";
import Burger from "../../../assets/images/banner/mobile/burger menu.svg";

const Header = ({scrollTo, refs}) => {

    const handleNavigationClick = (ref) => {
        scrollTo(ref);
    };

    return (
        <header className={classes.header}>
            <img className={classes.logo} src={Logo} alt="Logo"/>
            <img src={Burger} alt="Burger menu" className={classes.burger}/>
        </header>
    );
};

export default Header;
