import { useEffect, useState } from "react"
import './Makeup.css'
// import { API_URL } from "../API"
import { useAppContext } from "../context/appContext"
import Modal from "../Modal/Modal"
import ReactReadMoreReadLess from "react-read-more-read-less";


const Makeup = () => {
    const [makeup, setMakeup] = useState([])
    const [product_type, setProduct_type] = useState()

// add to favorite
const {favorites, addToFavorites,removeFromFavorites} = useAppContext()
console.log('favorites are ', favorites)


const favoritesChecker = (id) => {
    const boolean = favorites.some((makeup) => makeup.id === id)
    return boolean
}


    useEffect(()=>{
        fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
        .then((response) => response.json())
        .then((data) =>{
            console.log(data)
            setMakeup(data)
            setProduct_type(data)
        })
    })

   
//filter method
const filterResult = (categoryItem) =>{
const updatedItem = product_type.filter((currentData)=>{
   return currentData.product_type === categoryItem;
});
setMakeup(updatedItem)
}



    return (  
<>
{/* <h1 className="text-center">Maybelline Collections</h1> */}
<div className="container-fluid mx-2">
    <div className="row mt-5 mx-2">
        <div className="col-md-3">
            <div className="container"></div>

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
   
   <div className="container">
    
       {makeup.map((product) => {
         const {id, name, product_link, price, image_link} = product
          return (
           
    <div class="box" key={id}>
     
     <a href={product_link}>
      <img src={image_link} />


     </a>
<h2>


     <ReactReadMoreReadLess
                    charLimit={22}
                    readMoreText={"▼"}
                    readLessText={"▲"}
                    style={{"color": "blue"}}
                    >
                    {name}
                </ReactReadMoreReadLess>
                    
       </h2>
       <span>${price}</span>
       
<div className="options">

     {/* we will remove it if its already inside our favorite array */}

            {favoritesChecker(product.id) ? ( 
             <button onClick={()=> removeFromFavorites(product.id)}>
              Remove from Favorite
             </button>
 
            )  : (
                <button onClick={()=> addToFavorites(product)}>
                Add to Favorite
                </button>

            )}

            
            {/* modal button */}

            <Modal name={product.name} description={product.description} />
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