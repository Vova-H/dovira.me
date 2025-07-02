import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import macbook from "../../../../assets/images/priorities/macbook.png"
import {useTranslation} from "react-i18next";
import macbookUa from "../../../../assets/images/priorities/macbookUa.png";
import macbookPl from "../../../../assets/images/priorities/macbookPl.png";
import i18n from "../../../../i18n";
import Button from "../../../ui/button/Button";
import {useModal} from "../../../../context/ModalContext";
import LazyImage from "../../../ui/LazyImage";

const Priorities = forwardRef((props, ref) => {

    const {t} = useTranslation()
    const {openModal} = useModal()
    const lang = i18n.language
    return (
        <div ref={ref} data-aos="fade-out" data-aos-duration="2000"
             data-aos-anchor-placement="top-center">
            <div className={classes.container}>
                <div className={classes.title}>{t("priorities.title")}</div>
                <div className={classes.description}>
                    {t("priorities.description")}
                </div>
                <Button
                    text={t("priorities.button")}
                    className={classes.button}
                    onClick={openModal}
                    styles={{minWidth: "450px"}}
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
        </div>
    );
});

export default Priorities;
