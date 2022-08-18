import React from "react";
import { Card, Image, Space, Typography } from "antd";
import "../views/nutrition.css";
import foods from "../assets/data/food.json";

const { Title, Text } = Typography;

const Nutrition = () => {
  return (
    <>
      <div className="nutrition-main">
        <h1 className="heading"
        >
          {" "}
          HEALTH AND NUTRITION
        </h1>

        <Title level={3} style={{ color: "green" }}>
          {" "}
          FIVE FOOD GROUPS:
        </Title>
      </div>

      <div style={{ width: "100%", height: "auto", padding: "10px" }}>
        <Card>
          {foods.map((Nutrition) => (
            <Card.Grid style={{ width: "50%", miniHeight: "30rem" }}>
              <Space direction="vertical">
                <Title level={4} style={{ color: "rgb(130, 118, 4)" }}>
                  {Nutrition.titlo.toUpperCase()}
                </Title>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Image
                    preview={true}
                    src={Nutrition.picture}
                    style={{ width: "35rem", height: "30rem" }}
                  />
                  <Text type="secondary" italic>
                    {Nutrition.explanation}
                  </Text>{" "}
                </div>
                <Title level={4}>{Nutrition.titl}</Title>
                {Nutrition.explanation2.split("#").map((exp)=>(<p>{exp}</p>))}
              
              </Space>
            </Card.Grid>
          ))}
        </Card>
      </div>
    </>
  );
};

export default Nutrition;
