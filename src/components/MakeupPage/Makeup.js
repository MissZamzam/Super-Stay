import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar"
import './Makeup.css'

const Makeup = () => {
    const [makeup, setMakeup] = useState([])

    useEffect(()=>{
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setMakeup(data)
        })
    })


   //  const [category, setCategory] =useState('')

const filterResult = (categoryItem) =>{
const updatedItem = product_type.filter((currentData)=>{
   return currentData.product_type === categoryItem;
});
setMakeup(updatedItem)
}

  const handleFilterChange = (event) => {
    setProductType(event.target.value);
    const filtered = products.filter((product) => product.product_type === event.target.value);
    setFilteredProducts(filtered);
  };

    return (  
<>
<Navbar />
{/* <h1 className="text-center">Maybelline Collections</h1> */}
<div className="container-fluid mx-2">
    <div className="row mt-5 mx-2">
        <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('All')}>All</button>           
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Foundation')}>Foundation</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Lipstick')}>Lipstick</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Lipstick')}>Bronzer</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Lipstick')}>Blush</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Lipstick')}>Eyeshadow</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Lipstick')}>Eyeliner</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Lipstick')}>Nail Polish</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('Lipstick')}>Mascara</button>
        </div>
        <div className="col-md-9">
        <section>
   
   {/* <div class="heading">
       <h1>Maybelline Products</h1>
     
   </div> */}
   
   <div class="container">
    
       {makeup.map((product) => {
         const {id, name, product_link, product_type, price, image_link} = product
          return (
           
    <div class="box" key={id}>
     
     <a href={product_link}>
      <img src={image_link} />

     </a>
       <h2>{name}</h2>
       <h2>{product_type}</h2>
       <span>${price}</span>
      
       <div class="options">
           <a href="#">Favorite</a>
           <a href="#">Delete</a>
       </div>
   </div>

     
          );
       })}
 </div>
</section>  
        </div>
    </div>
</div>



</>



    );
}

export default App;




