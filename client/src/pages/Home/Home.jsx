import React from "react";
import "./Home.scss";
import Cards from "../../components/Cards";
const Home = () => {
  return (
    <main>
      <section className="first_section">
        <div className="first_main">
          <h1>Welcome To EatWell</h1>
          <p>Come and eat well with our delicious & healthy foods.</p>
          <button>Reservation</button>
        </div>
      </section>
      <section className="second_section">
        <div className="second_main">
          <div className="second_title">
            <p>OUR STORY</p>
            <br />
            <h1>Welcome</h1>
            <p>
              <br />
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <br />
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <br />
            <button>Learn About us</button>
          </div>
          <div className="second_picture">
            <img
              src="https://preview.colorlib.com/theme/eatwell/images/about_img_1.jpg.webp"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="third_section">
        <div className="third_container">
          <div className="third_main">
            <p>OUR OFFERS</p>
            <h1>Our Offer This Summer</h1>
            <p>Far far away, behind the word mountains, far from the countries</p>
            <p>Vokalia and Consonantia, there live the blind texts.</p>
          </div>
          <div>
          
            
          </div>
        </div>
        
      </section>
      <Cards/>
    </main>
  );
};

export default Home;
