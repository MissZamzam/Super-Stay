import React from "react";
import { Link } from "react-router-dom";

// import { SubHeading } from "../../components";
// import { images } from "../../constants";
import "./Home.css";

const Home = () => (
  <div className="home">
  {/* <header>
    <h2><a href="#">Life is a party!</a></h2>
    <nav>
      <li><a href="#">Tours</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </nav>
  </header> */}

  <section class="hero">
    <div class="background-image"></div>
    <div class="hero-content-area">
      <h1>Super Stay App!</h1>
      <h3>Unmissable Adventure with Maybelline Makeup Collection</h3>
  <Link to='./product'>
        <a href="#" class="btn">Maybelline</a>

  </Link>

    </div>
  </section>

  {/* <section class="destinations">
    <h3 class="title">Some of our products:</h3>
    <p>Tired of getting all Maybelline products in one place? Do you struggle with budgeting?Do you want to know how each product is rated globally? Come along with us on one of our unusual adventures of discovering Maybelline collections.</p>
    <hr></hr>

    <ul class="grid">
      <li class="small image-1"></li>
      <li class="large image-2"></li>
      <li class="large image-3"></li>
      <li class="small image-4"></li>
    </ul>
  </section> */}

  <section class="packages">
    <h3 class="title">Why Super Stay App</h3>
    <p>Tired of getting all Maybelline products in one place? Do you struggle with budgeting?Do you want to know how each product is rated globally? Come along with us on one of our unusual adventures of discovering Maybelline collections.</p>
    <hr></hr>

    <ul class="grid">
      <li>
        <i class="fa fa-compass fa-4x"></i>
        <h4>Product Knowledge</h4>
        <p>Looking for the complete product description before purchasing? Click on the product description button and get all the information regarding the product.You will learn secrets that you're likely to miss otherwise.</p>
      </li>
      <li>
        <i class="fa fa-camera-retro fa-4x"></i>
        <h4>Global Ratings</h4>
        <p>Want to experience the most rated Maybelline products without going through all the annoying searching exercise? <em>Super Stay App</em> provides the real global rating of each Maybelline product.</p>
      </li>
      <li>
        <i class="fa fa-bicycle fa-4x"></i>
        <h4>Budgeting</h4>
        <p>If bicycles are more your speed, consider taking a tour through one of our mountain or city bike paths. We'll provide the bikes, and lunch too!</p>
      </li>
      <li>
        <i class="fa fa-flag-checkered fa-4x"></i>
        <h4>Favorite Page</h4>
        <p>Got a competitive spirit? Sign up for one of our challenge-based marathons! Try to reach the summit before any other group.</p>
      </li>
    </ul>
  </section>

  <section class="testimonials">
    <h3 class="title">Testimonials from our adventurers:</h3>
    <hr></hr>
    <p class="quote">Wow! This tour made me realize how much I love being outside with my friends. After going on one of these tours, I can safely say that beer pong is my favorite game all time, also the cultural programs were really interesting!</p>
    <p class="author">- Albert Herter</p>
    <p class="quote">Wow, this really blew my mind. We had so much fun at the beach, and also some hidden secrets revealed. Come on, I'm living in this city for 5 years. Amazing!</p>
    <p class="author">- Sharon Rosenberg</p>
    <p class="quote">If you want to understand your friends better, head to the mountains. I mean, seriously. It's like sitting next to a campfire and just talk in the sunset, woah. You know? It's like that.</p>
    <p class="author">- Luis Mendoza</p>
  </section>

  {/* <section class="contact">
    <h3 class="title">Learn more</h3>
    <p>Want to know about our upcoming events, or come to one of our mixers? Just sign up for our mailing list. No spam from us, we promise! Except for the spam we give you to keep up your energy while you're having fun with your friends. Have a blast! We have tons of that.</p>
    <hr></hr>
    <form>
      <input type="email" placeholder="Email" />
      <a href="#" class="btn">Subscribe now</a>
    </form>
  </section> */}

  <footer>
    <p>Images courtesy of <a href="http://unsplash.com/">unsplash</a>.</p>
    <p>Why are you even reading this?! There's never anything interesting in the footer!</p>
    <ul>
      <li><a href="#"><i class="fa fa-twitter-square fa-2x"></i></a></li>
      <li><a href="#"><i class="fa fa-facebook-square fa-2x"></i></a></li>
      <li><a href="#"><i class="fa fa-snapchat-square fa-2x"></i></a></li>
    </ul>
  </footer>

  </div>
);

export default Home;