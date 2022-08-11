import React, { useState } from "react";
import { Table, Tag, Space, Drawer, Modal, notification } from "antd";
import users from "../../assets/data/users.json";
import ViewUser from "./viewUser";

const UserTable = () => {
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [userSelected, setUserSelected] = useState({});
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstname",
      key: "firstname",
      render: (text) => <a>{text.split(" ")[0]}</a>,
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
      render: (text) => <a>{text.split(" ")[0]}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      render: (text) => (
        <Tag color={text ? "green" : "red"}>{text.toString()}</Tag>
      ),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Activate</a>
          <a
            onClick={() => {
              setUserSelected(record);
              setVisibleModal(true);
              
            }}
          >
            Delete
          </a>
          <a
            onClick={() => {
              setUserSelected(record);
              setVisibleDrawer(true);
            }}
          >
            View
          </a>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Modal
        visible={visibleModal}
        okText='Yes'
        cancelText='Exit'
        onOk={() => {
          setVisibleModal(false);
          notification.success({
            message: "User has been deleted successfully.",
          });
        }}
        onCancel={() => {
          setVisibleModal(false);
          notification.warn({ message: "You have canceled your user delete" });
        }}
      >
        <h3>Are you sure you want to delete? {userSelected.name}</h3>
      </Modal>
      <Drawer
        visible={visibleDrawer}
        onClose={() => {
          setVisibleDrawer(false);
        }}
      >
        <ViewUser>data={userSelected}</ViewUser>
      </Drawer>
      <Table columns={columns} dataSource={users}></Table>
    </>
  );
};

export default UserTable;
