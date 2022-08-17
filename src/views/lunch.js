import React from "react";
import Grid from "@mui/material/Grid";
import lunch from "../assets/data/lunch.json";
import VideoCard1 from "../components/videoCard1";


const Lunch = () => {
 
  return (
    <>
      <div style={{ width: "100%", height: "auto", paddingLeft: "10px" }}>
        <Grid>
          {lunch.map((Lunch) => (
            <VideoCard1 Lunch={Lunch} />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Lunch;
