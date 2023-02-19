import { useEffect, useState } from "react";

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

    return (
        <div className="posts-container">
        {makeup.map((product) => {
           return (
              <div className="post-card" key={product.id}>
                 <h2 className="post-title">{product.name}</h2>
                 <img src={product.image_link} />
                 <h2 className="post-title">${product.price}</h2>
                 <h2 className="post-title">{product.product_type}</h2>
                 <h2 className="post-title">rating {product.rating}</h2>
                 <a href={product.product_link} >Product link</a>


                 <div className="button">
                 <div className="delete-btn">Delete</div>
                 </div>
              </div>
           );
        })}
     </div>    )
}
 
export default MakeUp;