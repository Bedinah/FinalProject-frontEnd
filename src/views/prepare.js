import React from "react";
import "../views/prepare.css";

import { Card, Space, Typography, Col, Row } from "antd";

const { Title, Text } = Typography;

const Prepare = () => {
  return (
    <>
      <div className="prepare-main">
        <h1 className="heading"> LEARN HOW TO COOK</h1>

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
                      Breakfast is often called ‘the most important meal of the
                      day’, and for good reason. As the name suggests, breakfast
                      breaks the overnight fasting period. It replenishes your
                      supply of glucose to boost your energy levels and
                      alertness, while also providing other essential nutrients
                      required for good health. Many studies have shown the
                      health benefits of eating breakfast. It improves your
                      energy levels and ability to concentrate in the short
                      term, and can help with better weight management, reduced
                      risk of type 2 diabetes and heart disease in the long
                      term.
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
                      Eating lunch raises your blood sugar level in the middle
                      of the day, which gives you the energy you need for the
                      rest of the day. It also enables you to focus and
                      concentrate on the rest of the afternoon. According to
                      Live Strong, if you are feeling sluggish, eating even a
                      small lunch can renew your energy and help you feel
                      refreshed and ready to take on the next several hours. For
                      kids, lunch is crucial because this is when they get their
                      nutrients and vitamins for the day. A balanced lunch can
                      improve three channels: physical development, cognition,
                      and behavior.
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
                      The time you eat dinner is just as important as what you
                      eat. Many a time people eat dinner very late and then
                      struggle with poor quality sleep, disturbed digestion and
                      volatile dreams. Remember that your digestion gets weaker
                      the more you move past sunset. The closer your
                      dinner is to sunset the lighter it is on your body. Eating
                      your dinner before seven and going to be within two to
                      three hours of it is the best way to stay light, healthy
                      and have great sleep. When you sleep well after a good
                      dinner, you ensure that you will make the right choices
                      with all your meals the next day.
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
