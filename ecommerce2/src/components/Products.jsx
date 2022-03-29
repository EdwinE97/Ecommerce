import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import "../index.css";
import Axios from "axios";


const Products = () => {
  let [productData, setProductData] = useState([]);
  let [productIndex, setProductIndex] = useState(1);
  let [filters, setFilters] = useState('')
  
  const getData = () => {
    Axios.get("http://ec2-44-192-68-16.compute-1.amazonaws.com:4000/products")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((err) => {
        throw err;
      });
  };
  useEffect(() => {getData()},[]);
 
  

//   function filter() {
//     setProductData(productData.filter((item) => item.price > 60));
//   }
//   function filter1() {
//     setProductData(productData.filter((item) => item.price < 60));
//   }
//   function filter2() {
//     setProductData(productData.filter((item) => item.banner === "New!"));
//   }
  return (
    <>
      <Nav />

      <div className="decks">
        <h1>Decks</h1>
      </div>
      <div className="filterBtn">
        <button onClick={() => setFilters('high')}>Price 60 +</button>
        <button onClick={() => setFilters('new')}>New</button>
        <button onClick={() => setFilters('low')}>Price 60 -</button>
      </div>
      <div className="container">
        {productData.filter(index =>{
            if(filters === ''){
                return index;
            }
            else if(filters === 'high' && index.price > 60){
                return index;
            }
            else if(filters === 'low' && index.price < 60){
                return index;
            }
            else if(filters === 'new' && index.banner === 'New!'){
                return index;
            }
        }).map((product) => (
          <div
            className={`card card-${product.id}}`}
            style={{
              backgroundImage: `url(${product.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "norepeat",
            }}
          >
            <div className="new1">
              <p>{product.banner}</p>
            </div>

            <div className="desc">
              <p>{product.deck_size}''</p>
              <p>{product.brand}</p>
              <p>${product.price}</p>
              <button>ADD</button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Products;
