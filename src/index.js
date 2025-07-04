import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import LanguageProvider from "./context/LanguageProvider";
import {ModalProvider} from "./context/ModalContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LanguageProvider>
            <ModalProvider>
                <App />
            </ModalProvider>
        </LanguageProvider>
    </React.StrictMode>
);

