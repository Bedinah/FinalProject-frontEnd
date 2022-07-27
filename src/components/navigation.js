import React, { useRef, useState } from "react";
import { Divider, Button, Modal,Dropdown, Menu} from "antd";
import { UserOutlined, UserAddOutlined} from "@ant-design/icons";
import Draggable from "react-draggable";
import "antd/dist/antd.css";
import logo from "../assets/images/logoimg.png";
import "../components/navigation.css";
import SignUp from "./signUp";
import LogIn from "./logIn";

const Navigation = () => {

  // FOR SIGNUP MODAL
  const [visible, setVisible] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });
  const draggleRef = useRef(null);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setVisible(false);
  };

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();

    if (!targetRect) {
      return;
    }

    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };


  // FOR LOGIN MODAL
  const [modal1Visible, setModal1Visible] = useState(false);

  // 1st DROPDOWN
  const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            BREAKFAFST
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            LUNCH
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            DINNER
          </a>
        ),
      },
    ]}
  />
  )
  // END OF 1st DROPDOWN

  // SECOND DROPDOWN

  const menuone = (
    <Menu
      items={[
        {
          key: '1',
          type: 'group',
          label: 'Group title',
          children: [
            {
              key: '1-1',
              label: '1st menu item',
            },
            {
              key: '1-2',
              label: '2nd menu item',
            },
          ],
        },
        {
          key: '2',
          label: 'sub menu',
          children: [
            {
              key: '2-1',
              label: '3rd menu item',
            },
            {
              key: '2-2',
              label: '4th menu item',
            },
          ],
        },
        
      ]}
    />
  )

  return (
    <div className="nav-bar">
      <div className="logo-title">
        <img src={logo} alt="logoImage" className="logo-img" />
        <div className="title">
          <i>ADEQUATE NUTRITION </i>
        </div>
      </div>

       {/* START SIGNUP MODAL */}
      <div className="modals">
        <Button type="text" icon={<UserAddOutlined />} onClick={showModal}>
          Sign Up
        </Button>
        <Modal
          title={
            <div
              style={{
                width: "100%",
                cursor: "move",
              }}
              onMouseOver={() => {
                if (disabled) {
                  setDisabled(false);
                }
              }}
              onMouseOut={() => {
                setDisabled(true);
              }} // fix eslintjsx-a11y/mouse-events-have-key-events
              // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
              onFocus={() => {}}
              onBlur={() => {}} // end
            >
              Create Account
            </div>
          }
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          modalRender={(modal) => (
            <Draggable
              disabled={disabled}
              bounds={bounds}
              onStart={(event, uiData) => onStart(event, uiData)}
            >
              <div ref={draggleRef}>{modal}</div>
            </Draggable>
          )}
        >
          <SignUp></SignUp>
        </Modal>
    {/* END SIGNUP MODAL */}

        <Divider type="vertical" />



        
     {/* START LOGIN MODAL */}
        <Button
          type="text"
          icon={<UserOutlined />}
          onClick={() => setModal1Visible(true)}
        >
          Log In
        </Button>
        <Modal
          title="Log-in Here"
          style={{
            top: 20,
          }}
          visible={modal1Visible}
          onOk={() => setModal1Visible(false)}
          onCancel={() => setModal1Visible(false)}
        >
          <LogIn></LogIn>
        </Modal>


        {/* END LOGIN MODAL */}

      </div>

      <ul className="nav-links">
        <li className="nav-link">HOME</li>
        <li className="nav-link">ABOUT</li>
        <li className="nav-link">
        <Dropdown overlay={menu} placement="bottom">
        <Button>HOW TO PREPARE FOOD</Button>
      </Dropdown>
        </li>
        <li className="nav-link">
        <Dropdown overlay={menuone} placement="bottom">
   
      <Button>DIET AND NUTRITION</Button>
        
  </Dropdown>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
