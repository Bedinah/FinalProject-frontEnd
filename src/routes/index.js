import React from 'react';
import { Routes, Route } from "react-router-dom";
import HomeLayout from '../components/homelayout';
import Home from '../views/home'
import About from '../views/about';
import Prepare from '../views/prepare';
import Nutrition from '../views/nutrition';

const Index = () => {
  return (
    
    <HomeLayout>
    <Routes>
    <Route exact path="/" element={<Home />}></Route>
    <Route exact path="about" element={<About />}></Route>
    <Route exact path="prepare" element={<Prepare />}></Route>
    <Route exact path="nutrition" element={<Nutrition />}></Route>
    </Routes>
    </HomeLayout>
    
  )
}

export default Index;
