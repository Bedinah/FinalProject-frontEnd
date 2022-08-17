import React from "react";
import Grid from "@mui/material/Grid";
import breakfasts from "../assets/data/breakfs.json";
import VideoCard from "../components/videoCard";

const Breakfast = () => {
  return (
    <>
      <div style={{ width: "100%"}}>
        <Grid container justifyContent="center" alignItems="center">
          {breakfasts.map((Breakfast) => (
            <Grid item xs={6} justifyContent="center" alignItems="center" sx={{display: "flex",justifyContent: "center", alignItems: "center", padding: "1rem"}}>
              <VideoCard Breakfast={Breakfast} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Breakfast;
