import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "../views/home.css";
import { Carousel, Card, Typography } from "antd";
import Foto1 from "../assets/images/homeimg1.jpg";
import Foto2 from "../assets/images/homeimg2.jpg";
import Foto3 from "../assets/images/homeimg3.jpg";
import Foto4 from "../assets/images/homeimg4.jpg";
import Foto5 from "../assets/images/img2.jpg";
import HomeServices from "../services/homepageService";
// import Homepage from "../assets/data/home.json";

const { Text, Title } = Typography;
const Home = () => {
  const [Homepage, setHomepage] = useState([]);

  useEffect(() => {
    HomeServices.getAllHome().then((res) => {
      setHomepage(res?.data);
    });
  }, []);
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

      {Homepage?.map((Home) => (
        <div style={{ display: "flex", margin: "0 10rem", marginTop: "5rem" }}>
          <img
            src={Home?.image}
            alt=""
            className="otherImages"
            style={{ width: "40rem" }}
          />

          <div className="site-card-border-less-wrapper">
            <Card
              bordered={false}
              style={{
                width: 700,
                height: 200,
              }}
            >
              <Title level={3} style={{ color: "green" }}>
                {" "}
                <i>{Home?.title} </i>{" "}
              </Title>
              <Text type="Large" italic>
                {Home?.discription}
              </Text>
              <Button
                style={{
                  margin: "1rem 20rem",
                  color: "green",
                  padding: "1rem 2rem",
                  fontSize: "1.3rem",
                }}
                variant="outlined"
              >
                <a href="/nutrition">Explore more</a>
              </Button>
            </Card>
          </div>
        </div>
      ))}
    </>
  );
};

export default Home;
