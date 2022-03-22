import React from "react";
import Nav from './Nav'
import Footer from "./Footer";
import '../index.css'
//import './src/index.csss';


const Home = () => {
    return(
        <>
        <Nav />

    <div id="slideshow">
        <div className="slide-wrapper">

            <div className="slide">
                <div className="sale">Slappy's: Any skateboard grind done without an ollie, a great place for skaters to
                    start. </div>

                <p className="slide-number"></p>
            </div>

            <div className="slide">
                <div className="new">Check out our new products!</div>

                <p className="slide-number"></p>
            </div>

            <div className="slide">
                <div className="team">Welcome to the team,Torey Pudwill!</div>

                <p className="slide-number"></p>
            </div>
        </div>
    </div>

    <div className="container2">

        <div className="about">
            <h3>"About Us" <br />Slappy's was founded with the idea that everyone is Welcome to skate even if you are new.
                We make sure everyone has the must need tools and tips to get started. We even partner with skate parks
                and Pros to host events and competions for our customers!</h3>
        </div>

    </div>
    <Footer />
    </>
    )
}
export default Home;