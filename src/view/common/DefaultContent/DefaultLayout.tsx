import React from 'react';
import NavBar from "../Navbar/NavBar";
import Home from '../../pages/HomeScreen/Home';

export default function DefaultLayout() {
    return (
        <>
            <NavBar/>
            <Home/>
        </>
    );
}