import React, {useState, useEffect} from "react";
import Grid from "@mui/material/Grid";
import dinner from "../assets/data/lunch.json";
import VideoCard2 from "../components/videoCard2";
import Lesson2Services from "../services/lesson2Service";


const Dinner = () => {

  const [Lesson, setLesson] = useState([]);

  useEffect(() => {
    Lesson2Services.getAllLessons().then((res) => {
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
             <VideoCard2 Lesson={lesson} />
           </Grid>
            
          ))}
        </Grid>
      </div>
    </>
  );
};

export default Dinner;

