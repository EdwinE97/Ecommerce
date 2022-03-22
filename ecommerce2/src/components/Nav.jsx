import React from "react";
import { Outlet } from "react-router-dom";
import '../index.css'

const Nav = () => {
    return(
        <>
        <h1 className="site"> Slappy's</h1>

    <header>

        <nav>
            <ul>
                
                <li><a href="/">Home</a></li>
                <li><a href="/Products">Products</a></li>
                <li><a href="/Contact">Contact</a></li>
            </ul>

        </nav>
        <Outlet></Outlet>
    </header>
    
    </>
    )
}

export default Nav;