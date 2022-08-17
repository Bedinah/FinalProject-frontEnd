import React from "react";
import { Card, Image, Space, Typography } from "antd";
import "../views/nutrition.css";
import foods from "../assets/data/food.json";

const { Title, Text } = Typography;

const Nutrition = () => {
  return (
    <>
      <div className="nutrition-main">
        <div className="titlee">
        <Title>
          {" "}
          HEALTH AND NUTRITION
        </Title>
        </div>
      </div>

      <div style={{ width: "100%", height: "auto", padding: "10px" }}>
        <Card>
          {foods.map((Nutrition) => (
            <Card.Grid style={{ width: "33.3%", minHeight: "30rem" }}>
              <Space direction="vertical">
                <Image
                  preview={true}
                  src={Nutrition.picture}
                  style={{ width: "35rem", miHeight: "30rem" }}
                />
                <Title level={4} style={{ color: "rgb(130, 118, 4)" }}>
                  {Nutrition.titlo.toUpperCase()}
                </Title>
                <Text type="secondary" italic>
                  {Nutrition.explanation}
                </Text>
              </Space>
            </Card.Grid>
          ))}
        </Card>
      </div>
    </>
  );
};

export default Nutrition;
