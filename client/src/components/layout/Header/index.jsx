import React from "react";
import "./index.scss";
import Basket from "../../../pages/Basket";
import Add from "../../../pages/Add";
import Detail from "../../../pages/Detail";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar_logo">
            <h1>EATWELL</h1>
          </div>
          <div className="navbar_right">
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/add"}>Add Page</Link></li>
            <li><Link to={"/basket"}>Basket</Link></li>
            <li><Link to={"/wishlist"}>Wishlist</Link></li>
          </ul>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Header;
