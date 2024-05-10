import React from 'react';
import classes from "./priorities.module.css"
import doctor from "../../assets/images/priorities/man.png"

const Priorities = () => {
    return (
        <div className={classes.container}>
            <div className={classes.leftSide}>
                <div className={classes.title}>Your health, our priority</div>
                <div className={classes.description}>At Medivisit, your health and well-being are our top priorities. We
                    are committed to providing you and your loved ones with convenient, reliable, and compassionate
                    medical care whenever you need it.
                </div>
            </div>
            <div className={classes.rightSide}>
                <img src={doctor} alt="doctor" className={classes.image}/>
            </div>
        </div>
    );
};

export default Priorities;
