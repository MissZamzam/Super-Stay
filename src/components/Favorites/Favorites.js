import React from "react";
import "./Favorites.css";
import { useAppContext } from "../context/appContext";
import ReactReadMoreReadLess from "react-read-more-read-less";
import StarRating from "../StartRating/Starrating";

const Favorites = () => {
  // copied from makeup.js
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  console.log("favorites are ", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((product) => product.id === id);
    return boolean;
  };

  return (
    <section>
      <div className="container">
        {favorites.length > 0 ? (
          favorites.map((product) => {
            const { id, name, price, image_link, rating } = product;
            return (
              <div class="box" key={id}>
                <img src={image_link} />
                <h2>
                  <ReactReadMoreReadLess
                    charLimit={22}
                    readMoreText={"▼"}
                    readLessText={"▲"}
                    style={{ color: "blue" }}
                  >
                    {name}
                  </ReactReadMoreReadLess>
                </h2>{" "}
                {/* <h2>{product_type}</h2> */}
                <span>${price}</span>
                <StarRating rating={rating} />
                <div className="options">
                  {/* we will remove it if its already inside our favorite array */}

                  {favoritesChecker(product.id) ? (
                    <button onClick={() => removeFromFavorites(product.id)}>
                      Remove from Favorites
                    </button>
                  ) : (
                    <button onClick={() => addToFavorites(product)}>
                      Add to Favorites
                    </button>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <h3 className="dont_exist">
            You don't have any favorites yet... 
            <br></br>
            Add some of your favourite
            Maybelline products...
          </h3>
        )}
      </div>
    </section>
  );
};

export default Favorites;
