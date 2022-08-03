import React from "react";
import {
  InstagramOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
  PhoneOutlined,
  MailOutlined,
  CommentOutlined,
  SendOutlined ,
  
} from "@ant-design/icons";

import "./footer.css";

const Footer = () => {
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
            <div><CommentOutlined /></div>
            <div> <a href="">Reach out on us</a></div>
          </div>
          <div className="logo4">
            <div><SendOutlined /></div>
            <div>IRO Kakiru, KG ... Avenue</div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
