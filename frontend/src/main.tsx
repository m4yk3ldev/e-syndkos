import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    BrowserRouter,
} from "react-router-dom";
import App from './App';
import FiltersProvider from './context/filter';
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <FiltersProvider>
                    <App/>
                </FiltersProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
