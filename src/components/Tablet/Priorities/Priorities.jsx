import React, {forwardRef} from 'react';
import classes from "./priorities.module.css"
import macbook from "../../../assets/images/priorities/macbook.png"

const Priorities = forwardRef((props, ref) => {
    return (
        <div className={classes.extraContainer} ref={ref} data-aos="fade-out" data-aos-duration="2000"
             data-aos-anchor-placement="top-center">
            <div className={classes.container}>
                <div className={classes.title}>Try our web version</div>
                <div className={classes.description}>
                    Enjoy all the features of DOVIRA right from your browser. No downloads needed - just visit our
                    website and start your consultation today!
                </div>
                <a href="///" className={classes.button}>
                    Visit now
                </a>
                <img src={macbook} alt="macbook" className={classes.image}/>
            </div>
        </div>
    );
});

export default Priorities;
