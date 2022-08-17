import React from "react";
import Grid from "@mui/material/Grid";
import dinner from "../assets/data/lunch.json";
import VideoCard2 from "../components/videoCard2";


const Dinner = () => {
 
  return (
    <>
      <div style={{ width: "100%", height: "auto", paddingLeft: "10px" }}>
        <Grid>
          {dinner.map((Dinner) => (
            <VideoCard2 Dinner={Dinner} />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Dinner;

