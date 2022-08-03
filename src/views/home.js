import React from "react";
import "../views/home.css";
import { Carousel } from "antd";
import Foto1 from "../assets/images/homeimg1.jpg";
import Foto2 from "../assets/images/homeimg2.jpg";
import Foto3 from "../assets/images/homeimg3.jpg";
import Foto4 from "../assets/images/homeimg4.jpg";
import Foto5 from "../assets/images/homeimg5.jpg";

const Home = () => {
  return (
   
    <div className="carsoulImg">
      <Carousel autoplay>
        <img src={Foto1} alt="homeimg1" />
        <img src={Foto2} alt="homeimg2" />
        <img src={Foto3} alt="homeimg3" />
        <img src={Foto4} alt="homeimg4" />
        <img src={Foto5} alt="homeimg5" />
      </Carousel>
    </div>





  );
};

export default Home;
