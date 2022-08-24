import React from "react";
import Grid from "@mui/material/Grid";
import dinner from "../assets/data/lunch.json";
import VideoCard2 from "../components/videoCard2";


const Dinner = () => {
 
  return (
    <>
      <div style={{ width: "100%" }}>
        <Grid container justifyContent="center" alignItems="center">
          {dinner.map((Dinner) => (
             <Grid
             item
             xs={6}
             justifyContent="center"
             alignItems="center"
             sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               padding: "1rem",
             }}
           >
             <VideoCard2 Dinner={Dinner} />
           </Grid>
            
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Dinner;

