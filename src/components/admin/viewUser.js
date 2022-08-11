import React from "react";

const ViewUser=({ data }) =>{
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "80vh",
        background:"gray"
      }}
    >
        <img src="{data?.picture}" width="100%" style={{borderRadius:"50%"}}/>
        <h1>{data?.firstname}</h1>
        <h1>{data?.lastname}</h1>
        
    </div>
  );
}

export default ViewUser;
