import { useEffect, useState } from "react"
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
    return (  
<>
<h1 className="text-center text-info">Maybelline Collections</h1>
<div className="container-fluid mx-2">
    <div className="row mt-5 mx-2">
        <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4">All</button>           
            <button className="btn btn-warning w-100 mb-4">Foundation</button>
            <button className="btn btn-warning w-100 mb-4">Lipstick</button>
            <button className="btn btn-warning w-100 mb-4">Bronzer</button>
            <button className="btn btn-warning w-100 mb-4">Blush</button>
            <button className="btn btn-warning w-100 mb-4">Eyeshadow</button>
            <button className="btn btn-warning w-100 mb-4">Eyeliner</button>
            <button className="btn btn-warning w-100 mb-4">Nail Polish</button>
            <button className="btn btn-warning w-100 ">Mascara</button>
        </div>
        <div className="col-md-9">
        <section>
   
   {/* <div class="heading">
       <h1>Maybelline Products</h1>
     
   </div> */}
   
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
 
export default Makeup;