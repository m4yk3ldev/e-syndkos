import { FC } from 'react'
import './App.css'
import HomePage from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./pages/Product";
import NavBar from "./components/NavBar/NavBar";
import LoginPage from "./pages/Login";
import Error404Page from "./pages/Error404";
import { IS_DEVELOPMENT } from './config';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/cart';

const App: FC = () => {
    return (
        <>
            <CartProvider>
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="*" element={<Error404Page />} />
                </Routes>
                {IS_DEVELOPMENT && <Footer />}
            </CartProvider>
        </>
    )
}

export default App
