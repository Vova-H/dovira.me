import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import macbook from "../../../assets/images/priorities/macbook.png"

const Priorities = forwardRef((props, ref) => {
    return (
        <div className={classes.extraContainer} ref={ref} data-aos="flip-left" data-aos-delay="600" data-aos-duration="1500" data-aos-anchor-placement="top-center">
            <div className={classes.container}>
                <div className={classes.title}>Try our web version</div>
                <div className={classes.description}>
                    At DOVIRA, your health and well-being are our top priorities. We are committed to providing you and
                    your loved ones with convenient, reliable, and compassionate medical care whenever you need it.
                </div>
                <a href="///" className={classes.button} data-aos="fade-up" data-aos-delay="400">
                    Visit now
                </a>
                <img src={macbook} alt="macbook" className={classes.image}/>
            </div>
        </div>
    );
});

export default Priorities;
