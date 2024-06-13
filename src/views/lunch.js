import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
// import lunch from "../assets/data/lunch.json";
import VideoCard1 from "../components/videoCard1";
import Lesson1Services from "../services/lesson1Service";

const Lunch = () => {
  const [Lesson, setLesson] = useState([]);

  useEffect(() => {
    Lesson1Services.getAllLessons().then((res) => {
      setLesson(res?.data);
    });
  }, []);

  return (
    <>
      <div style={{ width: "100%" }}>
        <Grid container justifyContent="center" alignItems="center">
          {Lesson?.map((lesson) => (
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
              <VideoCard1 Lesson={lesson} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Lunch;
