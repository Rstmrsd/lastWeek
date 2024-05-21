import React, { useContext } from "react";
import mainContext from "../context/Context";

const WishList = () => {
  const { fav, deleteWishList } = useContext(mainContext);
  return (
    <div className="container">
      <div className="row">
        {fav.map((item, index) => {
          return (
            <div class="card" style={{ width: "18rem;" }}>
              <img
                src={item.img}
                style={{ width: "100px" }}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <button onClick={()=>{
                    deleteWishList(item)
                }}>delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WishList;
