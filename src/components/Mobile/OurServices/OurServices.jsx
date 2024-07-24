import React, {forwardRef} from 'react';
import classes from "./ourServices.module.css";
import doctor from "../../../assets/images/ourServices/doctor.svg"
import prescriptions from "../../../assets/images/ourServices/prescription.svg"
import videoConsultation from "../../../assets/images/ourServices/video consultation.svg"
import veterinaryCare from "../../../assets/images/ourServices/paw.svg"
import 'aos/dist/aos.css'

const OurServices = forwardRef((props, ref) => {

    return (
        <div className={classes.container} ref={ref}>
            <div className={classes.title} data-aos="fade-down" data-aos-delay="200">Our services</div>
            <div className={classes.serviceWrapper}>

                <div className={classes.service} data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
                    <img src={doctor} alt="doctor" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>Doctor house calls</div>
                    <div className={classes.serviceDescription}>
                        Get a doctor at your door! Use our app to request a
                        house call, and a qualified professional will come to you, ready to diagnose and treat various
                        conditions.
                    </div>
                </div>

                <div className={classes.service} data-aos="fade-left" data-aos-delay="150" data-aos-duration="1500">
                    <img src={prescriptions} alt="prescriptions" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>Prescription services</div>
                    <div className={classes.serviceDescription}>With DOVIRA, get prescriptions from our online
                        doctors directly in the app. Download them for easy access whenever necessary.
                    </div>
                </div>

                <div className={classes.service} data-aos="fade-left" data-aos-delay="200" data-aos-duration="1500">
                    <img src={videoConsultation} alt="video consultaion" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>Video consultations</div>
                    <div className={classes.serviceDescription}>Talk to your doctor from anywhere, perfect for busy
                        schedules or urgent needs.
                    </div>
                </div>

                <div className={classes.service} data-aos="fade-left" data-aos-delay="250" data-aos-duration="1500">
                    <img src={veterinaryCare} alt="veterinary care" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>Veterinary care</div>
                    <div className={classes.serviceDescription}>DOVIRA cares for your pets too! Request a vet house
                        call or schedule a video consultation to ensure your furry friends get the medical attention
                        they need.
                    </div>
                </div>
            </div>
        </div>
    );
});

export default OurServices;
