import React from "react";
import "../views/about.css";
import { Card , Typography} from "antd";
import Abawuti from "../assets/images/aboutimg.webp";



const { Title } = Typography;
const About = () => {
  return (
    <div className="main-content">
      <div about-img>
        <Card
          hoverable
          style={{
            width: 500,
          }}
          cover={<img alt="aboutimg" src={Abawuti} />}
        >
          {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        </Card>
      </div>
      <div className="site-card-border-less-wrapper">

      <Title style={{marginLeft:"2.5rem"}}>WELCOME</Title>
        <Card
         
          bordered={false}
          style={{
            width: 500,
          }}
        >
          <p>
            ADEQUATE NUTRITION brings solution to the world. We are on a mission
            to democratise workplace learning. We believe all teams, no matter
            their size, budget, industry or location; should have access to
            quality learning that is engaging, convenient and, most importantly,
            effective.{" "}
          </p>
          <p>
            {" "}
            Our free online training platform enables thousands of teams around
            the world to rapidly upskill each day, with our unique microlearning
            format making it easier than ever to stay motivated and effectively
            retain knowledge.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
