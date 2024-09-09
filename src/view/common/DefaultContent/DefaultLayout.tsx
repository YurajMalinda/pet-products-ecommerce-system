import React from 'react';
import NavBar from "../Navbar/NavBar";
import Home from '../../pages/HomeScreen/Home';
import Footer from '../Footer/Footer';

export default function DefaultLayout() {
    return (
        <>
            <NavBar/>
            <Home/>
            <Footer/>
        </>
    );
}