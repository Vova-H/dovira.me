import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import macbook from "../../../../assets/images/priorities/macbook.png"
import {useTranslation} from "react-i18next";
import i18n from "../../../../i18n";
import macbookUa from "../../../../assets/images/priorities/macbookUa.png";
import macbookPl from "../../../../assets/images/priorities/macbookPl.png";
import Button from "../../../ui/button/Button";
import {useModal} from "../../../../context/ModalContext";
import LazyImage from "../../../ui/LazyImage";

const Priorities = forwardRef((props, ref) => {

    const { openModal } = useModal();
    const {t} = useTranslation()
    const lang = i18n.language

    return (
        <section className={classes.extraContainer} ref={ref} data-aos="fade-out" data-aos-duration="2000">
            <div className={classes.container} ref={ref}>
                <div className={classes.title}>{t("priorities.title")}</div>
                <div className={classes.description}>
                    {t("priorities.description")}
                </div>
                <div className={classes.description} style={{marginBottom: "40px"}}>
                    {t("priorities.description2")}
                </div>
                {
                    lang === "en" ? (
                        <LazyImage src={macbook} alt="doctor" className={classes.image}/>
                    ) : lang === "ua" ? (
                        <LazyImage src={macbookUa} alt="doctor" className={classes.image}/>
                    ) : (
                        <LazyImage src={macbookPl} alt="doctor" className={classes.image}/>
                    )
                }
                <Button text={t("priorities.button")} data-aos="fade-up" data-aos-delay="400"
                        styles={{alignSelf: "start", textAlign: "center", marginBottom: "60px"}}
                        onClick={openModal}
                />
            </div>
        </section>
    );
});

export default Priorities;
