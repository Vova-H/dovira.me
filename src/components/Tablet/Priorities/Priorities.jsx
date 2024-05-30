import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import doctor from "../../../assets/images/priorities/man.png"

const Priorities = forwardRef((props, ref) => {
    return (
        <div className={classes.extraContainer} ref={ref} data-aos="flip-left" data-aos-delay="600" data-aos-duration="1500" data-aos-anchor-placement="top-center">
            <div className={classes.container}>
                <div className={classes.title}>Your health, our priority</div>
                <div className={classes.description}>At Medivisit, your health and well-being are our top priorities. We
                    are committed to providing you and your loved ones with convenient, reliable, and compassionate
                    medical care whenever you need it.
                </div>
                <img src={doctor} alt="doctor" className={classes.image}/>
            </div>
        </div>
    );
});

export default Priorities;
