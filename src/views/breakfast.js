import React from "react";
import Grid from "@mui/material/Grid";
import breakfasts from "../assets/data/breakfs.json";
import VideoCard from "../components/videoCard";


const Breakfast = () => {
 
  return (
    <>
      <div style={{ width: "100%", height: "auto", paddingLeft: "10px" }}>
        <Grid style={{gridTemplateColumns:"50% ,50%"}}>
          {breakfasts.map((Breakfast) => (
            <VideoCard Breakfast={Breakfast} />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Breakfast;
