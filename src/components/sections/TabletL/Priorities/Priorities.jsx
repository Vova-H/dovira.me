import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import macbook from "../../../../assets/images/priorities/macbook.png"
import macbookUa from "../../../../assets/images/priorities/macbookUa.png";
import macbookPl from "../../../../assets/images/priorities/macbookPl.png";
import {useTranslation} from "react-i18next";
import i18n from "../../../../i18n";
import Button from "../../../ui/button/Button";
import {useModal} from "../../../../context/ModalContext";
import LazyImage from "../../../ui/LazyImage";

const Priorities = forwardRef((props, ref) => {

    const {t} = useTranslation()
    const {openModal} = useModal();
    const lang = i18n.language
    return (
        <div ref={ref} data-aos="fade-out" data-aos-duration="2000" data-aos-anchor-placement="top-bottom">
            <div className={classes.container}>
                <div className={classes.title}>{t("priorities.title")}</div>
                <div className={classes.description}>
                    {t("priorities.description")}
                </div>
                <Button text={t("priorities.button")}
                        onClick={openModal}
                        styles={{marginBottom: "40px", padding: "15px 55px"}}
                />
                {
                    lang === "en" ? (
                        <LazyImage src={macbook} alt="mackbook" className={classes.image}/>
                    ) : lang === "ua" ? (
                        <LazyImage src={macbookUa} alt="mackbook" className={classes.image}/>
                    ) : (
                        <LazyImage src={macbookPl} alt="mackbook" className={classes.image}/>
                    )
                }
            </div>
        </div>
    );
});

export default Priorities;
