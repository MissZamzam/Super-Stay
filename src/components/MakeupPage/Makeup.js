import { useEffect, useState } from "react"
import Navbar from "../Navbar/Navbar"
import './Makeup.css'
import { API_URL } from "../API"
import Footer from "../Footer/Footer"
import { useAppContext } from "../context/appContext"
import Modal from "../Modal/Modal"

const Makeup = () => {
    const [makeup, setMakeup] = useState([])
    const [product_type, setProduct_type] = useState(API_URL)
    const [popup, setPopup] = useState([])

// add to favorite
const {favorites, addToFavorites,removeFromFavorites} = useAppContext()
console.log('favorites are ', favorites)


const favoritesChecker = (id) => {
    const boolean = favorites.some((makeup) => makeup.id === id)
    return boolean
}

// modal function for description
const changeContent = (product) => {
    setPopup([product])

}

    useEffect(()=>{
        fetch(API_URL)
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

            <Modal description={product.description} />
        </div>
        
        {/* <div className="pop_up_container">
            <div className="pop_up_body"> 
              <div className="pop_up_header">
                <button>X</button>
            </div>
            <div className="pop_up_content">
                {popup.map((pop)=>{
                    return(
                        <div className="pop_card">
                            <img src={product.image_link} />
                            <p>{product.description}</p>
                        </div>
                    )
                })}
            </div>
            </div>
          
           
        </div> */}

       
      
       
   </div>

     
          );
       })}
 </div>
</section>  
        </div>
    </div>
</div>


{/* <Footer /> */}
</>



    );
}
 
export default Makeup;