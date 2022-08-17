import React from "react";
import Button from '@mui/material/Button';
import "../views/home.css";
import { Carousel, Card, Typography } from "antd";
import Foto1 from "../assets/images/homeimg1.jpg";
import Foto2 from "../assets/images/homeimg2.jpg";
import Foto3 from "../assets/images/homeimg3.jpg";
import Foto4 from "../assets/images/homeimg4.jpg";
import Foto5 from "../assets/images/img2.jpg";

const { Text, Title } = Typography;
const Home = () => {
  return (
    <>
      <div className="carsoulImg">
        <Carousel autoplay>
          <img src={Foto1} alt="homeimg1" />
          <img src={Foto2} alt="homeimg2" />
          <img src={Foto3} alt="homeimg3" />
          <img src={Foto4} alt="homeimg4" />
          <img src={Foto5} alt="homeimg5" />
        </Carousel>
      </div>

      <div style={{ display: "flex" ,margin:"0 10rem" , marginTop:"5rem"}}>
        <img
          src="https://sabriulkerfoundation.org/EN/img/icerik/taze_sebze.png"
          alt=""
          className="otherImages"
          style={{width:"40rem"}}
        />

        <div className="site-card-border-less-wrapper">
          <Card
            bordered={false}
            style={{
              width: 700,
              height: 200,
              // marginTop: "10rem",
              // marginRight: "10rem",
              // position: "relative"
            }}
          >
            <Title level={3} style={{ color: "green" }}>
              {" "}
              <i> EAT VEGETABLES BOOST YOUR IMMUNE SYSTEM </i>{" "}
            </Title>
            <Text type="Large" italic>
              A diet rich in vegetables and fruits can lower blood pressure,
              reduce the risk of heart disease and stroke, prevent some types of
              cancer, lower risk of eye and digestive problems, and have a
              positive effect upon blood sugar, which can help keep appetite in
              check.
            </Text>
            <Button style={{margin:"1rem 20rem", color:"green", padding:"1rem 2rem", fontSize:"1.7rem"}}  variant="outlined"><a href="nutrition">Explore more</a></Button>
          </Card>
         
        </div>
      </div>

      <div style={{ display: "flex",margin:"0 15rem"}} >
        <div className="site-card-border-less-wrapper">
          <Card
            bordered={false}
            style={{
              width: 700,
              height: 200,
              marginTop: "10rem",
              // marginRight: "5rem",
            }}
          >
            <Title level={3} style={{ color: "green" }}>
              {" "}
              <i> PYSICAL ACTIVITIES </i>{" "}
            </Title>
            <Text type="Large" italic>
              A diet rich in vegetables and fruits can lower blood pressure,
              reduce the risk of heart disease and stroke, prevent some types of
              cancer, lower risk of eye and digestive problems, and have a
              positive effect upon blood sugar, which can help keep appetite in
              check.
            </Text>
          </Card>
          <Button style={{margin:"1rem 20rem", color:"green", padding:"1rem 2rem", fontSize:"1.7rem"}}  variant="outlined"><a href="nutrition">Explore more</a></Button>
        </div>
        <img
          src="https://sabriulkerfoundation.org/EN/img/icerik/fizikselactivity.png"
          alt=""
          className="otherImage"
          style={{width:"40rem"}}
        />
      </div>

      <div style={{ display: "flex" ,margin:" 0 15rem"}}>
        <img
          src="https://sabriulkerfoundation.org/EN/img/icerik/mangalsite.jpg"
          alt=""
          className="otherImages"
          style={{width:"40rem"}}
        />

        <div className="site-card-border-less-wrapper">
          <Card
            bordered={false}
            style={{
              width: 700,
              height: 200,
              marginTop: "10rem",
              marginRight: "10rem",
            }}
          >
            <Title level={3} style={{ color: "green" }}>
              {" "}
              <i> DO NOT CHAR YOUR MEAT</i>{" "}
            </Title>
            <Text type="Large" italic>
              A diet rich in vegetables and fruits can lower blood pressure,
              reduce the risk of heart disease and stroke, prevent some types of
              cancer, lower risk of eye and digestive problems, and have a
              positive effect upon blood sugar, which can help keep appetite in
              check.
            </Text>
          </Card>
          <Button style={{margin:"1rem 20rem", color:"green", padding:"1rem 2rem", fontSize:"1.7rem"}}  variant="outlined"><a href="nutrition">Explore more</a></Button>
        </div>
      </div>

    </>
  );
};

export default Home;
