import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import macbook from "../../../assets/images/priorities/macbook.png"

const Priorities = forwardRef((props, ref) => {

    return (
        <div className={classes.extraContainer} ref={ref} data-aos="flip-left">
            <div className={classes.container}>
                <div className={classes.title}>Try our web version</div>
                <div className={classes.description}>
                    Enjoy all the features of DOVIRA right from your browser. No downloads needed - just visit our
                    website and start your consultation today!
                </div>
                <div className={classes.imageWrapper}>
                    <img src={macbook} alt="doctor" className={classes.image}/>
                </div>
                <a href="///" className={classes.button} data-aos="fade-up" data-aos-delay="400">
                    Visit now
                </a>

            </div>
        </div>
    );
});

export default Priorities;
