import React from "react";
import "./index.scss";
import Basket from "../../../pages/Basket";
import Add from "../../../pages/Add";
import Detail from "../../../pages/Detail";

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar_logo">
            <h1>EATWELL</h1>
          </div>
          <div className="navbar_right">
            <h2>HOME</h2>
            <h2>CONTACT</h2>
            <h2>ABOUT</h2>
            <h2>BASKET</h2>
            <h2>ADD</h2>
          </div>
        </div>
        <section className="first_section">
          <div className="first_main">
            <h1>Welcome To EatWell</h1>
            <p>Come and eat well with our delicious & healthy foods.</p>
            <button>Reservation</button>
          </div>
        </section>
      </div>
      <section className="second_section">
        <div className="second_main">
          <div className="second_title">
            <p>OUR STORY</p>
            <br/>
            <h1>Welcome</h1>
            <p><br/>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p><br/>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p><br/>
            <button>Learn About us</button>
          </div>
          <div className="second_picture">
            <img src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg.webp" alt=""/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
