import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../index.css";
import Filter from "./Filter";
import Data from '../Data.json'
//import './src/index.csss';

const Products = () => {
    let [productData, setProductData] = useState(Data);
    let [productIndex, setProductIndex]= useState(1);
   
        return(
            <>
            <Nav />

            <div className="decks">
        <h1>Decks</h1>
    </div>
    <div className="container">
     {productData.map((product) => (
                    
              
    // <div className="container">
   <div className={`card card-${productIndex++}`}>
        <div className="new1">NEW</div>
        <div className="desc">
          <p>{product.deckSize}</p>
          <p>{product.brand}</p>
          <img src={product.img}/>
          <p>{product.price}</p>
          <button> ADD</button>
        </div>
      </div>
    
     
     
))}
</div>
</>

)
};

export default Products;