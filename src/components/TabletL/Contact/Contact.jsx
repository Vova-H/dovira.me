import React, {forwardRef} from 'react';
import email from "../../../assets/images/contact/email.png"
import classes from "./contact.module.css"

const Contact = forwardRef((props, ref) => {


    return (
        <div className={classes.container} ref={ref} data-aos="flip-right">
            <img src={email} alt="Email" className={classes.image}/>
            <div className={classes.title}>If you have any questions you can contact us by email and we will write
                you.
            </div>
            <div className={classes.description}>
                Our email:
                <a href="mailto:startup4@smgbuilder.com" className={classes.email}> startup4@smgbuilder.com
                </a>
            </div>
        </div>
    );
});

export default Contact;
