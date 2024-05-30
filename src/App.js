import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import "./styles/variables.css"
import React, {useEffect, useRef, useState} from "react";
import Desktop from "./Layouts/Desktop";
import Mobile from "./Layouts/Mobile";
import Tablet from "./Layouts/Tablet";
import TabletL from "./Layouts/TabletL";

function App() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);
    const [isTablet, setIsTablet] = useState(window.innerWidth > 450 && window.innerWidth <= 768);
    const [isTabletL, setIsTabletL] = useState(window.innerWidth > 768 && window.innerWidth < 1024);

    const ourServicesRef = useRef(null);
    const whyChooseUsRef = useRef(null);
    const ourPrioritiesRef = useRef(null);
    const downloadAppRef = useRef(null);
    const contactUsRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 450);
            setIsTablet(window.innerWidth > 450 && window.innerWidth <= 768);
            setIsTabletL(window.innerWidth > 768 && window.innerWidth < 1024)
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const scrollTo = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return (
        <div>
            {isMobile && <Mobile scrollTo={scrollTo} ourServicesRef={ourServicesRef} whyChooseUsRef={whyChooseUsRef}
                                 ourPrioritiesRef={ourPrioritiesRef} downloadAppRef={downloadAppRef}
                                 contactUsRef={contactUsRef}/>}
            {isTablet && <Tablet scrollTo={scrollTo} ourServicesRef={ourServicesRef} whyChooseUsRef={whyChooseUsRef}
                                 ourPrioritiesRef={ourPrioritiesRef} downloadAppRef={downloadAppRef}
                                 contactUsRef={contactUsRef}/>}
            {isTabletL && <TabletL/>}
            {!isTablet && !isMobile && !isTabletL &&
                <Desktop scrollTo={scrollTo} ourServicesRef={ourServicesRef} whyChooseUsRef={whyChooseUsRef}
                         ourPrioritiesRef={ourPrioritiesRef} downloadAppRef={downloadAppRef}
                         contactUsRef={contactUsRef}
                />}
        </div>)
}

export default App;
