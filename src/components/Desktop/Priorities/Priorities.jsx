import React, {forwardRef, useEffect} from 'react';
import classes from "./priorities.module.css"
import doctor from "../../../assets/images/priorities/man.png"
import 'aos/dist/aos.css'
import AOS from "aos";

const Priorities = forwardRef((props, ref) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
            anchorPlacement: 'top-bottom',
        });
    }, []);
    return (
        <div className={classes.extraContainer} ref={ref} data-aos="flip-left">
            <div className={classes.container}>
                <div className={classes.leftSide}>
                    <div className={classes.title}>Your health, our priority</div>
                    <div className={classes.description}>At Medivisit, your health and well-being are our top
                        priorities. We
                        are committed to providing you and your loved ones with convenient, reliable, and compassionate
                        medical care whenever you need it.
                    </div>
                </div>
                <div className={classes.rightSide}>
                    <img src={doctor} alt="doctor" className={classes.image}/>
                </div>
            </div>
        </div>
    );
});

export default Priorities;
