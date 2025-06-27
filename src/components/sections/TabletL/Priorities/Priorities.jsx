import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import macbook from "../../../../assets/images/priorities/macbook.png"
import macbookUa from "../../../../assets/images/priorities/macbookUa.png";
import macbookPl from "../../../../assets/images/priorities/macbookPl.png";
import {useTranslation} from "react-i18next";
import i18n from "../../../../i18n";

const Priorities = forwardRef((props, ref) => {

    const {t} = useTranslation()
    const lang = i18n.language
    return (
        <div ref={ref} data-aos="fade-out" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
            <div className={classes.container}>
                <div className={classes.title}>{t("priorities.title")}</div>
                <div className={classes.description}>
                    {t("priorities.description")}
                </div>
                <a href="///" className={classes.button}>
                    {t("priorities.button")}
                </a>
                {
                    lang === "en" ? (
                        <img src={macbook} alt="mackbook" className={classes.image}/>
                    ) : lang === "ua" ? (
                        <img src={macbookUa} alt="mackbook" className={classes.image}/>
                    ) : (
                        <img src={macbookPl} alt="mackbook" className={classes.image}/>
                    )
                }
            </div>
        </div>
    );
});

export default Priorities;
