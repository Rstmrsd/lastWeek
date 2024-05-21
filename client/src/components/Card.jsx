import React, { useContext } from "react";
import mainContext from "../context/Context";

const Card = ({ item }) => {
  const { addToBasket,addToWishlist } = useContext(mainContext);
  return (
    <div className="col-lg-3">
      <div className="third_cards">
        <div className="card_info">
          <img src={item.img} alt="" />
          <p>{item.price}</p>
          <h1>{item.title}</h1>
          <p>{item.detail}</p>
          <button onClick={()=>{
            addToBasket(item)
          }}>add basket</button>
          <button onClick={()=>{
            addToWishlist(item)
          }}>add to fav</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
