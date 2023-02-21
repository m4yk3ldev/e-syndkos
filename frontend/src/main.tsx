import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    BrowserRouter,
} from "react-router-dom";
import App from './App';
import FiltersProvider from './context/filter';

;
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <FiltersProvider>
                <App />
            </FiltersProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
