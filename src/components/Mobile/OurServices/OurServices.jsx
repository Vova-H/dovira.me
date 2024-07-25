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

                <div className={classes.service} data-aos="fade-up">
                    <img src={doctor} alt="doctor" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>Video consultations</div>
                    <div className={classes.serviceDescription}>
                        Connect with qualified doctors through high-quality video calls. Get medical advice and
                        consultations from the comfort of your home.
                    </div>
                </div>

                <div className={classes.service} data-aos="fade-up" data-aos-delay="200">
                    <img src={prescriptions} alt="prescriptions" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>Prescription services</div>
                    <div className={classes.serviceDescription}>
                        With DOVIRA, get prescriptions from our online doctors
                        directly in the app. Download them for easy access whenever necessary.
                    </div>
                </div>

                <div className={classes.service} data-aos="fade-up" data-aos-delay="400">
                    <img src={videoConsultation} alt="video consultation" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>Chat with doctor</div>
                    <div className={classes.serviceDescription}>
                        Have a question or need medical advice? Use our chat
                        service to get prompt responses from experienced doctors.
                    </div>
                </div>

                <div className={classes.service} data-aos="fade-up" data-aos-delay="600">
                    <img src={veterinaryCare} alt="veterinary care" className={classes.serviceImage}/>
                    <div className={classes.serviceName}>Veterinary care</div>
                    <div className={classes.serviceDescription}>
                        DOVIRA cares for your pets too! Request a vet house call
                        or schedule a video consultation to ensure your furry friends get the medical attention they
                        need.
                    </div>
                </div>
            </div>
        </div>
    );
});

export default OurServices;
