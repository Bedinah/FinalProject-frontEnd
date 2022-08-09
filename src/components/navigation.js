import React, { useRef, useState } from "react";
import { Divider, Button, Modal, Dropdown, Menu, Input, Affix ,Space} from "antd";
import { UserOutlined, UserAddOutlined } from "@ant-design/icons";
import Draggable from "react-draggable";
import "antd/dist/antd.css";
import logo from "../assets/images/logoimg.png";
import "../components/navigation.css";
import SignUp from "./signUp";
import LogIn from "./logIn";
import { Link } from "react-router-dom";
import Prepare from "../views/prepare";
import Nutrition from "../views/nutrition";
// import Breakfast from "../views/breakfast";

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
          key: "1",
          label: (
            <Link to={"/breakfast"}>
        BREAKFAST
      </Link>
            
          ),
        },
        {
          key: "2",
          label: (
            <Link to={"/lunch"}>
            LUNCH
          </Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link to={"/dinner"}>
            DINNER
          </Link>
          ),
        },
      ]}
    />
  );
  // END OF 1st DROPDOWN

  // SECOND DROPDOWN

  const menuone = (
    <Menu
      items={[

        {
          key: "1",
          label: "CHILD",
          children: [
            {
              key: "1-1",
              label:(
                <Link to={"/childone"}>
                FIRST 1000 YEARS
              </Link>
              ),
            },
            {
              key: "1-2",
              label: (
                <Link to={"/childtwo"}>
                6MONTHS-5YEARS
              </Link>
              ),
            },
          ],
        },

        {
          key: "2",
          label: (
            <Link to={"/adult"}>
           ADULT
          </Link>
          ),
        },

        {
        key: "3",
        label: (
          <Link to={"/diet"}>
          DIET
        </Link>
        ),
        }



       
      ]}
    />
  );
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <Affix offsetTop={1}>
      <div className="nav-bar">
        <div className="logo-title">
          <img src={logo} alt="logoImage" className="logo-img" />
          <div className="title">
            <i>ADEQUATE NUTRITION </i>
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
        </div>
        <div className="nav-search">
          <ul className="nav-links">
            <li>
              {" "}
              <a href="/" className="nav-link">
                HOME{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="about" className="nav-link">
                ABOUT US{" "}
              </a>
            </li>
            <li>
              {" "}
              <a href="prepare" className="nav-link">
                {/* <Dropdown overlay={menu} placement="bottom">
                  <Button>HOW TO PREPARE</Button>
                </Dropdown>{" "} */}

              <Dropdown overlay={menu}>
    <a onClick={(e) => <Prepare></Prepare>}>
      <Space>
      HOW TO PREPARE FOOD
        
      </Space>
    </a>
  </Dropdown>
              </a>
            </li>
            <li>
              {" "}
              <a href="nutrition" className="nav-link">
                
<Dropdown overlay={menuone}>
    <a onClick={(e) => <Nutrition></Nutrition>}>
      <Space>
      DIET AND NUTRITION
        
      </Space>
    </a>
  </Dropdown>

              </a>
            </li>
          </ul>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </div>
      </div>
    </Affix>
  );
};

export default Navigation;
