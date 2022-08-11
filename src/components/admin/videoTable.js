import React from 'react';
import { Table, Tag, Space } from 'antd';
import videos from "../../assets/data/video.json";

const columns = [
    {
        title: "Type",
        dataIndex: "type",
        key: "type",
        render: (text) => <a>{text.split(" ")[0]}</a>,
      },

      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text.split(" ")[0]}</a>,
      },

      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>Activate</a>
            <a>Delete</a>
            
          </Space>
        ),
      },
     
 
]



const VideoTable=()=> {
    return <Table columns={columns} dataSource={videos}></Table>;
}

export default VideoTable;
