import React, { useState } from "react";
import { Button, Col, Drawer, Form, Input, Row, Space } from "antd";
import {
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  PhoneOutlined,
  MailOutlined,
  CommentOutlined,
  SendOutlined,
} from "@ant-design/icons";
import "./footer.css";

const Footer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  const date = new Date();
  let year = date.getFullYear();
  return (
    <div className="main-foota">
      <div className="icons">
        <WhatsAppOutlined />
        <TwitterOutlined />
        <LinkedinOutlined />
        <InstagramOutlined />
      </div>

      <p className="copyright"> {year} &copy; BUN SQUAD. ALL RIGHT RESERVED.</p>

      <div className="fcontacts">
        <p>CONTACT US</p>
        <div className="logo1">
          <div>
            <PhoneOutlined />
          </div>
          <div>Toll Free : 9707</div>
        </div>
        <div className="logo2">
          <div>
            <MailOutlined />
          </div>
          <div>bernabazubagira@gmail.com</div>
        </div>
        <div className="logo3">
          <div>
            <CommentOutlined />
          </div>
          <div>
            {" "}
            <Button
              type="text"
              onClick={showDrawer}
              style={{ color: "white", fontWeight: "500" }}
            >
              Contact-Us
            </Button>
            <Drawer
              title="REACH OUT ON US"
              width={600}
              onClose={onClose}
              visible={visible}
              bodyStyle={{
                paddingBottom: 80,
              }}
              extra={
                <Space>
                  <Button onClick={onClose}>Cancel</Button>
                  <Button
                    onClick={onClose}
                    type="secondary"
                    style={{ color: "black" }}
                  >
                    SEND
                  </Button>
                </Space>
              }
            >
              <Form layout="vertical" hideRequiredMark>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="name"
                      label="Name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your name",
                        },
                      ]}
                    >
                      <Input placeholder="Please enter your name" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your email",
                        },
                      ]}
                    >
                      <Input placeholder="Please enter your email" />
                    </Form.Item>
                  </Col>
                </Row>

                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      name="phone"
                      label="Phone"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Phone",
                        },
                      ]}
                    >
                      <Input placeholder="Please enter your phone" />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={18}>
                    <Form.Item
                      name="message"
                      label="Message"
                      rules={[
                        {
                          required: true,
                          message: "please enter message",
                        },
                      ]}
                    >
                      <Input.TextArea
                        rows={4}
                        placeholder="please enter message"
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Drawer>
            {/* <a href="contacts">Reach out on us</a> */}
          </div>
        </div>
        <div className="logo4">
          <div>
            <SendOutlined />
          </div>
          <div>IRO Kakiru, KG ... Avenue</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
