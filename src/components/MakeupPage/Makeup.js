import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import './Makeup.css'
import { API_URL } from "../API"
import Footer from "../Footer/Footer"

const Makeup = () => {
    const [makeup, setMakeup] = useState([])
    const [product_type, setProduct_type] = useState(API_URL)


    useEffect(()=>{
        fetch(API_URL)
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setMakeup(data)
            setProduct_type(data)
        })
    })



const filterResult = (categoryItem) =>{
const updatedItem = product_type.filter((currentData)=>{
   return currentData.product_type === categoryItem;
});
setMakeup(updatedItem)
}



    return (  
<>
<Navbar />
{/* <h1 className="text-center">Maybelline Collections</h1> */}
<div className="container-fluid mx-2">
    <div className="row mt-5 mx-2">
        <div className="col-md-3">
            <button className="btn btn-warning w-100 mb-4" onClick={()=>setProduct_type(product_type)}>All</button>           
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('foundation')}>Foundation</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('lipstick')}>Lipstick</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('bronzer')}>Bronzer</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('blush')}>Blush</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('eyeshadow')}>Eyeshadow</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('eyeliner')}>Eyeliner</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('nail_polish')}>Nail Polish</button>
            <button className="btn btn-warning w-100 mb-4" onClick={()=>filterResult('mascara')}>Mascara</button>
        </div>
        <div className="col-md-9">
        <section>
   
   {/* <div class="heading">
       <h1>Maybelline Products</h1>
     
   </div> */}
   
   <div className="container">
    
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
      
       <div className="options">
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


<Footer />
</>



    );
}
 
export default Makeup;