import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
// import breakfasts from "../assets/data/breakfs.json";
import VideoCard from "../components/videoCard";
import LessonServices from "../services/LessonService";

const Breakfast = () => {
  const [Lesson, setLesson] = useState([]);

  useEffect(() => {
    LessonServices.getAllLessons().then((res) => {
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
              <VideoCard Lesson={lesson} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Breakfast;
