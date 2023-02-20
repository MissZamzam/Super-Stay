import { useEffect, useState } from "react";
import './Makeup.css'

const MakeUp = () => {

    const [makeup, setMakeup] = useState([])

    useEffect(()=>{
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setMakeup(data)
        })
    })

    const deleteProduct = async (id) => {
      await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline/${id}`, {
         method: 'DELETE',
      }).then((response) => {
         if (response.status === 200) {
            setMakeup(
               makeup.filter((product) => {
                  return product.id !== id;
               })
            );
         } else {
            return;
         }
      });
      };

    return (
<section>
    <div class="heading">
        {/* <h1>Maybelline Products</h1> */}
       <div className="container-fluid mx-2">
         <button className="btn btn-warning w-100 mb-4">All</button>
         <button>Foundation</button>
         <button>LIpstick</button>
         <button>Bronzer</button>
         <button>Blush</button>
         <button>Eyeshadow</button>
         <button>Eyeliner</button>
         <button>Nail Polish</button>
         <button>Mascara</button>
         </div>
    </div>
    <div class="container">
     
        {makeup.map((product) => {
           return (
            
     <div class="box" key={product.id}>
      
      <a href={product.product_link}>
                 <img src={product.image_link} />

      </a>
        <h2>{product.name}</h2>
        <h2>{product.product_type}</h2>
        <span>${product.price}</span>
        <div class="rate">
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="filled fas fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <div class="options">
            <a href="#">Favorite</a>
            <a href="#" onClick={() => deleteProduct(product.id)}>Delete</a>
        </div>
    </div>

      
           );
        })}
  </div>
</section>      )
}
 
export default MakeUp;