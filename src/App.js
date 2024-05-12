import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import "./styles/variables.css"
import Banner from "./components/Banner/Banner";
import classes from "./app.module.css"
import Header from "./components/Header/Header";
import React, {useRef} from "react";
import OurServices from "./components/OurServices/OurServices";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Priorities from "./components/Priorities/Priorities";
import GetStartedToday from "./components/GetStartedToday/GetStartedToday";

function App() {

    const ourServicesRef = useRef(null);
    const whyChooseUsRef = useRef(null);
    const ourPrioritiesRef = useRef(null);
    const downloadAppRef = useRef(null);
    // const contactUsRef = useRef(null);

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }


    return (
        <div className={classes.container}>
            <div className={classes.bannerSection}>
                <Header scrollTo={scrollTo}
                        refs={{
                            ourServicesRef,
                            whyChooseUsRef,
                            ourPrioritiesRef,
                            downloadAppRef
                        }}
                />
                <Banner/>
            </div>
            <OurServices ref={ourServicesRef}/>
            <WhyChoose ref={whyChooseUsRef}/>
            <Priorities ref={ourPrioritiesRef}/>
            <GetStartedToday ref={downloadAppRef}/>
        </div>
    );
}

export default App;
