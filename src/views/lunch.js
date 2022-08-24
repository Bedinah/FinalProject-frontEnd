import React from "react";
import Grid from "@mui/material/Grid";
import lunch from "../assets/data/lunch.json";
import VideoCard1 from "../components/videoCard1";

const Lunch = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <Grid container justifyContent="center" alignItems="center">
          {lunch.map((Lunch) => (
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
              <VideoCard1 Lunch={Lunch} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Lunch;
