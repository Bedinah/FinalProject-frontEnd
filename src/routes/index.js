import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomeLayout from '../components/homelayout';
import Home from '../views/home'
import About from '../views/about';
import Prepare from '../views/prepare';
import Nutrition from '../views/nutrition';
import Breakfast from '../views/breakfast';
import Lunch from '../views/lunch';
import Dinner from '../views/dinner';
import Childone from '../views/childone';
import Childtwo from '../views/childtwo';
import Adult from '../views/adult';
import Diet from '../views/diet';

const Index = () => {
  return (
    
    <HomeLayout>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="about" element={<About />}></Route>
    <Route exact path="prepare" element={<Prepare />}></Route>
    <Route exact path="nutrition" element={<Nutrition />}></Route>
    <Route exact path="/breakfast" element={<Breakfast />}></Route>
    <Route exact path="/lunch" element={<Lunch/>}></Route>
    <Route exact path="/dinner" element={<Dinner/>}></Route>
    <Route exact path="/childone" element={<Childone/>}></Route>
    <Route exact path="/childtwo" element={<Childtwo/>}></Route>
    <Route exact path="/adult" element={<Adult/>}></Route>
    <Route exact path="/diet" element={<Diet/>}></Route>
    </Routes>
    </HomeLayout>
    
  )
}

export default Index;
