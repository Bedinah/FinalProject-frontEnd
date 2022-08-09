import React from 'react'
import {Card,Space,Carousel,Affix} from "antd";
import "../views/nutrition.css";
import babyimg from "../assets/images/babyimg.jpg";
  //import dietimg from "../assets/images/dietimg.webp";
import photo1 from "../assets/images/buildbody.png";
import photo2 from "../assets/images/1.png"
import photo3 from "../assets/images/fruit.webp"
import photo4 from "../assets/images/fruit1.webp"
const Nutrition = () => {
  return (
    <Card.Grid style={{width:"100%",Height:"60%"}} className="Nutrition-bg">
    
        <h1 style={{textAlign:"center"}}><b> Diet and Nutrition</b></h1>
  
    <div style={{width:"100%",minHeight:"40%", alignItems:"center"}}>
       
        <Card style={{}}>
        <h2>In a world that gets more hectic each day, we are constantly looking for a quick energy boost, which is why many have turned to natural energy supplements.</h2>
         <Carousel autoplay>
         <img src={photo1} alt='buildbody' style={{width:"100%",minHeight:"20%"}}/>
         <img src={photo3} alt='fruit' style={{width:"100%",minHeight:"20%"}}/>
         <img src={photo4} alt='fruit1' style={{width:"100%",minHeight:"20%"}}/>
         </Carousel>
         <Affix>
         <img src={photo2} alt='1' style={{width:"100%",minHeight:"20%"}}/>
         </Affix>
        
         
         </Card>
        
       
       </div>

   </Card.Grid>
 
  );
};
export default Nutrition
