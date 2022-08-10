import React from "react";
import "./Product.css";
import { useStateValue } from "./Stateprovider";
function Product({ id, title, image, price, rating }) {

  
    const [{ basket }, dispatch] = useStateValue();
    //  console.log("this is the basket", basket);
    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

// "https://m.media-amazon.com/images/I/71D2SKzEnPL._AC_UL1200_.jpg";FOXER Women Genuine Leather Handbag Tote Purse Top Handle Satchel Shoulder Bag $119


// "https://m.media-amazon.com/images/S/abs-image-upload-na/f/AmazonStores/ATVPDKIKX0DER/6a6d505720d4936732925cd81024fb17.w1500.h300._CR0%2C0%2C1500%2C300_SX1500_.png"



// "https://m.media-amazon.com/images/I/51BB8XkwE0L._AC_SL1500_.jpg";Womens Silicone Swim Cap for Long Hair,3D Ergonomic Design Silicone Swimming Caps for Women Kids Men Adults Boys Girls with Ear Plug and Nose Clip
// 4.3 out of 5 stars 7,366
// $15.99

// "https://m.media-amazon.com/images/I/61Tz1mFW+tL._AC_UL1500_.jpg";


// "https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/e/AmazonStores/ATVPDKIKX0DER/3f69ae78778ac64649a0523f1c10368b.w3000.h600._CR0%2C0%2C3000%2C600_SX1500_.jpg" $49:28

//  "https://m.media-amazon.com/images/I/71c-Vr+G8SL._AC_SX679_.jpg";
// Odoland 5-in-1 Snorkeling Packages, Full Face Snorkel Mask with Adjustable Swim Fins, Lightweight Backpack and Waterproof Case, Anti-Fog Anti-Leak Snorkeling Masks Gear for Men Women Adult
// Visit the Odoland Store
// 4.2 out of 5 stars    1,012 ratings | 26 answered questions
// -20% $52.99