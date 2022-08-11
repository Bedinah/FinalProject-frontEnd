import React from "react";

import { Typography, Card, Space, Image, Tabs } from "antd";
import "./childone.css";

const { Title } = Typography;

const { TabPane } = Tabs;

// const onChange = (key) => {
//   console.log(key);
// };
const Childone = () => {
  return (
    <>
      <div style={{ display: "flex" }}>
        <article>
          <Title
            style={{
              paddingTop: "3rem",
              paddingLeft: "3rem",
              fontWeight: "700",
              color: "green",
            }}
          >
            PROBIOTICS FOR THE FIRST 1000 DAYS
          </Title>
          <div className="backImage">
            <Title
              level={2}
              style={{
                color: "aliceblue",

                marginLeft: "22rem",
                textAlign: "end",
              }}
            >
              <i>
                Amazing things happen when we all unite to nourish the health of
                every mother, every child, everywhere.
              </i>
            </Title>
          </div>

          <Space
            direction="vertical"
            style={{ width: "90%", paddingLeft: "6rem", paddingTop:"3rem" }}
          >
            <Title level={3} >
              Breastfeeding
            </Title>
            
            The intestinal microbiome of infants requires a high proportion of
            Bifidobacteria during the first year of life to aid in the digestion
            of milk. Breast milk harbours a diverse microbiota, plus nutrients
            that encourage the proliferation of health-promoting bacteria. For
            example, prebiotic HMOs are specifically metabolised by bacteria in
            the infant gut, strongly favouring the proliferation of
            bifidobacteria.1 It has been estimated that 25–30% of the infant
            bacterial microbiota originates from breast milk.
            <Title level={3} >
              What is our microbiome?
            </Title>
            Our bodies provide a home for a vast range of micro-organisms,
            including bacteria, fungi an d viruses. Collectively, these are
            known as the human microbiota. Our microbiome is the collection of
            genomes from all the micro-organisms and are specific to each
            person. Some micro-organisms are disease-causing, and others only
            become detrimental to our health if they are able to proliferate.
            Others can be beneficial to the body in many ways. In a healthy
            person, these micro-organisms are balanced and coexist peacefully.
            <Title level={3} id="titoti">
              What is our microbiome?hskdjsadhv
            </Title>
            Our bodies provide a home for a vast range of micro-organisms,
            including bacteria, fungi an d viruses. Collectively, these are
            known as the human microbiota. Our microbiome is the collection of
            genomes from all the micro-organisms and are specific to each
            person. Some micro-organisms are disease-causing, and others only
            become detrimental to our health if they are able to proliferate.
            Others can be beneficial to the body in many ways. In a healthy
            person, these micro-organisms are balanced and coexist peacefully.
            <Title level={3} >
              What is our microbiome?
            </Title>
            Our bodies provide a home for a vast range of micro-organisms,
            including bacteria, fungi an d viruses. Collectively, these are
            known as the human microbiota. Our microbiome is the collection of
            genomes from all the micro-organisms and are specific to each
            person. Some micro-organisms are disease-causing, and others only
            become detrimental to our health if they are able to proliferate.
            Others can be beneficial to the body in many ways. In a healthy
            person, these micro-organisms are balanced and coexist peacefully.
          </Space>
        </article>
        <aside style={{ paddingTop: "4rem", paddingRight: "3rem" }}>
          {" "}
          <Card style={{ backgroundColor: "aliceblue" }}>



          <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Popular" key="1">
      <Space direction="vertical">
                  
                  <Image
                    src="https://images.pexels.com/photos/6168473/pexels-photo-6168473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    style={{ width: "30rem", miHeight: "20rem" }}
                  /> 


                  <a href="#titoti">njesfaskjdfkjsa</a>
                </Space>
      </TabPane>
      <TabPane tab="Related" key="2">
      <Space direction="vertical">
                  <h1>this is tab two</h1>
                </Space>
      </TabPane>
      </Tabs>
      </div>
          </Card>
        </aside>
      </div>
    </>
  );
};

export default Childone;
