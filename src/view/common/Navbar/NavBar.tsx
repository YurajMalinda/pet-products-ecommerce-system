import React from 'react';
import {Link} from "react-router-dom";
import paw from '../../../images/paw.png';
import shoppingCart from '../../../images/shopping-cart.png';


function NavBar() {
    return (
        // <div className= "p-3 bg-blue-400 flex">
        //     <h1 className="text-2xl text-amber-50">PawMart fluffy shop</h1>
        //
        // </div>

        <div className="p-4 bg-zinc-600 row flex items-center justify-between">
            <div className="flex items-center">
                <img className="h-5 w-5 ml-1 mr-1" src={paw} alt=""/>
                <h1 className="text-1x1 text-primary font-semibold font-sans">Pet Shop</h1>
            </div>

            <ul className="list-none space-x-20">
                <li className="inline-block text-[#e6f0e6] cursor-pointer hover:text-green-400"><Link to="/">HOME</Link>
                </li>
                <li className="inline-block text-[#e6f0e6] cursor-pointer hover:text-green-400"><Link to="/about">PET
                    SHOP</Link></li>
                <li className="inline-block text-[#e6f0e6] cursor-pointer hover:text-green-400"><Link
                    to="/contact">DOG</Link></li>
                <li className="inline-block text-[#e6f0e6] cursor-pointer hover:text-green-400"><Link
                    to="/shopping-cart">CAT</Link></li>
                <li className="inline-block text-[#e6f0e6] cursor-pointer hover:text-green-400"><Link
                    to="/shopping-cart">BIRD</Link></li>
            </ul>

            <div className="flex items-center">
                <button
                    className="text-[15px] text-primary bg-blue-400 pl-4 pr-4 pt-1 pb-1 rounded hover:text-black text-center shadow-white">
                    <Link to="/login">Sign In</Link>
                </button>
                <img className="h-8 w-8 ml-5" src={shoppingCart} alt=""/>
            </div>
        </div>
    );
}

export default NavBar;