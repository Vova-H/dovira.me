import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import macbook from "../../../../assets/images/priorities/macbook.png"
import macbookUa from "../../../../assets/images/priorities/macbookUa.png"
import macbookPl from "../../../../assets/images/priorities/macbookPl.png"
import {useTranslation} from "react-i18next";
import i18n from "../../../../i18n";
import LazyImage from "../../../ui/LazyImage";
import Button from "../../../ui/button/Button";
import {useModal} from "../../../../context/ModalContext";

const Priorities = forwardRef((props, ref) => {

    const {t} = useTranslation()
    const lang = i18n.language
    const {openModal} = useModal()
    return (
        <section className={classes.extraContainer} ref={ref}
             data-aos="fade-out" data-aos-duration="2000" data-aos-anchor-placement="top-center">
            <div className={classes.container}>
                <div className={classes.title}>{t("priorities.title")}</div>
                <div className={classes.description}>
                    {t("priorities.description")}
                </div>
                <div className={classes.description}>
                    {t("priorities.description2")}
                </div>
                <Button
                    text={t("priorities.button")}
                    className={classes.button}
                    onClick={openModal}
                />

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
        </section>
    );
});

export default Priorities;
