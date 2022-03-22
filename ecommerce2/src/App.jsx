import React from 'react';
//import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Products from './components/Products'
import Contact from './components/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

//import 'ecommerce2/src/index.css'

const App = () =>{
  return(
    
    <Router>
      <>
      <Routes>
    
    <Route path = '/' element = {<Home />}/>
    <Route path = '/Products' element = {<Products />}/>
    <Route path = '/Contact' element = {<Contact />}/>
   
    </Routes>
    </>
    </Router>
    
  )
}
// class App extends Component {
//   render() {
//   return (
//     <div className="App">
//        <div className="Sitehead">
//         <h1 className="site"> Slappy's</h1>
//     </div>
//     <header>

//         <nav>
//             <ul>
//                 <li><a href="index.html">Home</a></li>
//                 <li><a href="Products.html">Products</a></li>
//                 <li><a href="Contact.html">Contact</a></li>
//             </ul>

//         </nav>
//     </header>

//     <div id="slideshow">
//         <div className="slide-wrapper">

//             <div className="slide">
//                 <div className="sale">Slappy's: Any skateboard grind done without an ollie, a great place for skaters to
//                     start. </div>

//                 <p className="slide-number"></p>
//             </div>

//             <div className="slide">
//                 <div className="new">Check out our new products!</div>

//                 <p className="slide-number"></p>
//             </div>

//             <div className="slide">
//                 <div className="team">Welcome to the team,Torey Pudwill!</div>

//                 <p className="slide-number"></p>
//             </div>
//         </div>
//     </div>

//     <div className="container2">

//         <div className="about">
//             <h3>"About Us" <br />Slappy's was founded with the idea that everyone is Welcome to skate even if you are new.
//                 We make sure everyone has the must need tools and tips to get started. We even partner with skate parks
//                 and Pros to host events and competions for our customers!</h3>
//         </div>

//     </div>


//     <footer id="footer">
//         <div className="footer-text">
//             <div className="copyright">
//                 <p>
//                     &copy; Don't worry. Do slappy's!
//                 </p>
//             </div>
//             <br />
//             <div className="footer-links">
//                 <a href="#"><span className="ti-twitter-alt"></span></a> 
//                 <a href="#"><span className="ti-facebook"></span></a>   
//                 <a href="#"><span className="ti-instagram"></span></a>  

//             </div>
//         </div>
//     </footer>

 


// <div className="decks">
//     <h1>Decks</h1>
// </div>

// <div className="container">


//     <div className="card card-1">
//         <div className="new1">NEW</div>
//         <div className="desc"><p>8.5" Carhartt Deck </p>
//             <p>$99.99</p><button> ADD</button>
//         </div>
//     </div>
//     <div className="card card-2">
//         <div className="new1">NEW</div>
//         <div className="desc"><p>8.0" Girl Deck</p>
//             <p>$55</p> <button> ADD</button>
//         </div>
//     </div>
//     <div className="card card-3">
//         <div className="desc"><p>8" Toy Machine Deck</p>
//             <p>$45</p> <button> ADD</button>
//         </div>
//     </div>
//     <div className="card card-4">
//         <div className="desc"><p>8" Enjoi Deck</p>
//             <p>$60</p> <button> ADD</button>
//         </div>
//     </div>
//     <div className="card card-5">
//         <div className="desc"><p>9.5"</p><p>Element Deck</p>
//             <p>$59.99</p> <button> ADD</button>
//         </div>
//     </div>
//     <div className="card card-6">
//         <div className="desc">
//             <p>7.5"" Krooked Deck</p>
//             <p>$60</p><button> ADD</button>
//         </div>
//     </div>
//     <div className="card card-7">
//         <div className="new1">NEW</div>
//         <div className="desc"><p>9.5" Real Deck</p>
//             <p>$40</p> <button> ADD</button>
//         </div>
//     </div>
//     <div className="card card-8">
//         <div className="desc"><p>9" </p><p>Baker Deck</p>
//             <p>$50</p><button> ADD</button>
//         </div>
//     </div>
//     <div className="card card-9">
//         <div className="desc"><p>8" Baker Deck</p>
//             <p>$55.99</p> <button> ADD</button>
//         </div>
//     </div>
//     <div className="card card-10">
//         <div className="new1">NEW</div>
//         <div className="desc"><p>8.5" Quasi Deck</p>
//             <p>$60</p><button> ADD</button>
//         </div>
//     </div>
//     <div className="card card-11">
//         <div className="desc"><p>8.5" Baker Deck</p>
//             <p>$55</p><button> ADD</button>
//         </div>
//     </div>
//     <div className="card card-12">
//         <div className="desc"><p>7.5" </p><p>Krooked Deck</p>
//             <p>$40</p><button> ADD</button>
//         </div>
//     </div>



// </div>
// </div>
//   );
// }
// }
export default App;
