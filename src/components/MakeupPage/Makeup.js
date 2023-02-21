import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar"
import './Makeup.css'

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productType, setProductType] = useState("");

  useEffect(() => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFilterChange = (event) => {
    setProductType(event.target.value);
    const filtered = products.filter((product) => product.product_type === event.target.value);
    setFilteredProducts(filtered);
  };

  return (
    <div>
        <Navbar />
        <h1>Maybelline Products</h1>
        <label htmlFor="productTypeFilter">Filter by product type:</label>
        <select id="productTypeFilter" value={productType} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="blush">Blush</option>
            <option value="bronzer">Bronzer</option>
            <option value="eyebrow">Eyebrow</option>
            <option value="eyeliner">Eyeliner</option>
            <option value="eyeshadow">Eyeshadow</option>
            <option value="foundation">Foundation</option>
            <option value="lipstick">Lipstick</option>
            <option value="mascara">Mascara</option>
        </select>
        <section>   
            <div class="container">
                {filteredProducts.map((product) => {
                const {id, name, product_link, product_type, price, image_link} = product
                return (       
                <div class="box" key={product.id}>
                    <a href={product_link}>
                    <img src={image_link} />
                    </a>
                    <h2>{product.name}</h2>
                    <h2>{product_type}</h2>
                    <span>${price}</span>
                
                <div class="options">
                    <a href="#">Favorite</a>
                    <a href="#">Delete</a>
                </div>
                </div>
                )})}
            </div>
        </section>  
    </div>
  );
}

export default App;




