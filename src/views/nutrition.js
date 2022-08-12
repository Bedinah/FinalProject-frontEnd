import React from "react";
import "../views/nutrition.css";

import { Typography} from "antd";

const { Title} = Typography;

const Nutrition = () => {
  return (
    <>
      <div className="nutrition-main">
        <Title
          style={{ color: "black", fontSize: "7rem", marginBottom: "10rem" }}
        >
          {" "}
          HEALTH AND NUTRITION
        </Title>
      </div>
    </>
  );
};

export default Nutrition;
