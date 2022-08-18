import React from "react";
import "../views/prepare.css";

import { Card, Space, Typography, Col, Row } from "antd";

const { Title, Text } = Typography;

const Prepare = () => {
  return (
    <>
      <div className="prepare-main">
        <Title
          style={{ color: "white" ,fontSize: "5rem",textAlign:"center" }}
        >
          {" "}
          LEARN HOW TO COOK
        </Title>

        <div className="cards" style={{ marginLeft: "15rem" }}>
          <div className="site-card-wrapper">
            <Row gutter={14}>
              <Col span={7}>
                <Card style={{ marginRight: "5rem" }}>
                  <Space
                    direction="vertical"
                    size="small"
                    style={{
                      display: "flex",
                    }}
                  >
                    <Title level={4}>BREAKFAST RECIPES</Title>

                    <Text
                      type="secondary"
                      italic
                      style={{ fontSize: "1.3rem", fontWeight: "500" }}
                    >
                      We believe in ingredients that dance on the tongue –
                      edamame, quinoa, pico de gallo. We believe that part of
                      what makes us human is our ability to transform those
                      elements into something beautiful – meals that fill our
                      senses and nourish our bodies. We believe that food can
                      and should taste amazing while still keeping us healthy.
                      Food should feel good. We believe that food isn’t the
                      enemy. Food is what fuels us. Food is part of what makes
                      us who we are.
                    </Text>
                  </Space>
                </Card>
              </Col>
              <Col span={7}>
                <Card style={{ marginRight: "5rem" }}>
                  <Space
                    direction="vertical"
                    size="small"
                    style={{
                      display: "flex",
                    }}
                  >
                    <Title level={4}>LUNCH RECIPES</Title>

                    <Text
                      type="secondary"
                      italic
                      style={{ fontSize: "1.3rem", fontWeight: "500" }}
                    >
                      We believe in ingredients that dance on the tongue –
                      edamame, quinoa, pico de gallo. We believe that part of
                      what makes us human is our ability to transform those
                      elements into something beautiful – meals that fill our
                      senses and nourish our bodies. We believe that food can
                      and should taste amazing while still keeping us healthy.
                      Food should feel good. We believe that food isn’t the
                      enemy. Food is what fuels us. Food is part of what makes
                      us who we are.
                    </Text>
                  </Space>
                </Card>
              </Col>
              <Col span={7}>
                <Card style={{ marginRight: "5rem" }}>
                  <Space
                    direction="vertical"
                    size="small"
                    style={{
                      display: "flex",
                    }}
                  >
                    <Title level={4}>DINNER RECIPES</Title>

                    <Text
                      type="secondary"
                      italic
                      style={{ fontSize: "1.3rem", fontWeight: "500" }}
                    >
                      We believe in ingredients that dance on the tongue –
                      edamame, quinoa, pico de gallo. We believe that part of
                      what makes us human is our ability to transform those
                      elements into something beautiful – meals that fill our
                      senses and nourish our bodies. We believe that food can
                      and should taste amazing while still keeping us healthy.
                      Food should feel good. We believe that food isn’t the
                      enemy. Food is what fuels us. Food is part of what makes
                      us who we are.
                    </Text>
                  </Space>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prepare;
