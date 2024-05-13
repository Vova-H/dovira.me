import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import "./styles/variables.css"
import React, {useEffect, useRef, useState} from "react";
import Desktop from "./Layouts/Desktop";
import Mobile from "./Layouts/Mobile";

function App() {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 450);

    const ourServicesRef = useRef(null);
    const whyChooseUsRef = useRef(null);
    const ourPrioritiesRef = useRef(null);
    const downloadAppRef = useRef(null);
    const contactUsRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 450);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const scrollTo = (ref) => {
        ref.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    return (
        isMobile ?
            <Mobile scrollTo={scrollTo} ourServicesRef={ourServicesRef} whyChooseUsRef={whyChooseUsRef}
                    ourPrioritiesRef={ourPrioritiesRef} downloadAppRef={downloadAppRef} contactUsRef={contactUsRef}/>
            :
            <Desktop scrollTo={scrollTo} ourServicesRef={ourServicesRef} whyChooseUsRef={whyChooseUsRef}
                     ourPrioritiesRef={ourPrioritiesRef} downloadAppRef={downloadAppRef} contactUsRef={contactUsRef}
            />

    )
}

export default App;
