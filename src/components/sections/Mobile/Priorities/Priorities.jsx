import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import macbook from "../../../../assets/images/priorities/macbook.png"
import macbookUa from "../../../../assets/images/priorities/macbookUa.png"
import macbookPl from "../../../../assets/images/priorities/macbookPl.png"
import {useTranslation} from "react-i18next";
import i18n from "../../../../i18n";
import LazyImage from "../../../ui/LazyImage";

const Priorities = forwardRef((props, ref) => {

    const {t} = useTranslation()
    const lang = i18n.language

    return (
        <div className={classes.extraContainer} ref={ref}
             data-aos="fade-out" data-aos-duration="2000" data-aos-anchor-placement="top-center">
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
                        <LazyImage src={macbook} alt="macbook" className={classes.image}/>
                    ) : lang === "ua" ? (
                        <LazyImage src={macbookUa} alt="macbook" className={classes.image}/>
                    ) : (
                        <LazyImage src={macbookPl} alt="macbook" className={classes.image}/>
                    )
                }

            </div>
        </div>
    );
});

export default Priorities;
