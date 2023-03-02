import React from "react";
import '/Home.css'

import React from 'react'

const Home = () => {
  return (
    <div className="containter">

          <div class="header">
            <img src="images/logo.png" class="logo" />
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Community</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <button class="btn" id="btn1">Log In</button>
            <button class="btn" id="btn2">Sign Up</button>
        </div>


        <div class="content">
            <div class="text">
            <h1>Be Young, Have Fun, <br></br> <span>Drink Pepsi</span></h1>
            <p>Pepsi is a carbonated soft drink manufactured by PepsiCo. <br></br> Originally created and developed in 1893 by Caleb Bradham <br></br> and introduced as Brad's Drink, it was renamed as Pepsi-Cola in 1898, and then shortened to Pepsi in 1961.
            </p>
            <button class="btn3">Buy Now</button>
           </div>
        <div class="pepsi">
        <img src="images/pepsi.png" alt="" />
        </div>
       </div>

    </div>
  )
}

export default Home
