import React, {createContext, useEffect, useMemo, useState} from 'react';
import i18n from '../i18n';


export const LanguageContext = createContext({
    language: 'en',
    changeLanguage: () => {
    },
});

const LS_KEY = 'lang';

const getInitialLang = () => {
    try {
        const saved = localStorage.getItem(LS_KEY)
        if (saved) return saved;
    } catch (e) {
        console.log(e)
    }
    const nav = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : '';
    if (nav.startsWith('uk')) return 'ua';
    if (nav.startsWith('pl')) return 'pl';
    return 'en';
};

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState(getInitialLang);

    useEffect(() => {
        if (i18n.language !== language) {
            i18n.changeLanguage(language);
        }
    }, [language]);


    const changeLanguage = useMemo(
        () => (lng) => {
            setLanguage(lng);
            try {
                localStorage.setItem(LS_KEY, lng);
            } catch (e) {
                console.log(e)
            }
        },
        []
    );


    useEffect(() => {
        const onStorage = (e) => {
            if (e.key === LS_KEY && e.newValue) {
                setLanguage(e.newValue);
            }
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;
