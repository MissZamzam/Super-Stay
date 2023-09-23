import React from 'react'
import "./Trial.css";


const Trial = () => {
  return (
    <div>
      <h1>Trial</h1>
    <div class="product-card">
      <div class="card  z-depth-4">
        <div class="card-image">
          <a href="#" class="btn-floating btn-large price waves-effect waves-light brown darken-3">5 €</a>
          {/* <!-- alternative image links:
http://i58.photobucket.com/albums/g249/Landry_Bete/dessert14_zpsg6u4skv6.jpg
https://www.dropbox.com/s/15xhr85exkhusgi/dessert14.jpg?raw=1 --> */}
          <img src="https://res.cloudinary.com/landry-bete/image/upload/v1488769144/dessert14_trnhnj.jpg" alt="product-img" />
          <span class="card-title"><span>Macaron</span></span>
        </div>
        <ul class="card-action-buttons">
          <li><a href="https://www.facebook.com/sharer/sharer.php?u=https://codepen.io/lybete/full/jBMNzM/" target="_blank" class="btn-floating waves-effect waves-light white"><i class="material-icons grey-text text-darken-3">share</i></a>
          </li>
          <li><a class="btn-floating waves-effect waves-light red accent-2"><i class="material-icons like">favorite_border</i></a>
          </li>
          <li><a id="buy" class="btn-floating waves-effect waves-light blue"><i class="material-icons buy">add_shopping_cart</i></a>
          </li>
        </ul>
        <div class="card-content">
          <div class="row">
            <div class="col s12">
              <p>
                <strong>Description:</strong> <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare auctor metus vel mollis.
              </p>
            </div>

          </div>
          <div class="row">
            <div style="width: 95%; margin: auto;">
              <div class="chip">Dessert</div>
              <div class="chip">French</div>
              <div class="chip">Sweet</div>
              <div class="chip">Chocolate</div>
              <div class="chip"><a href="#">More...</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Trial
