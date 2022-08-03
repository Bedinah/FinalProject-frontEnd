import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";

const HomeLayout=({children})=>{
    return(
<>
<Navigation/>
<div style={{ minheight:"100vh"}}>{children}</div>
<Footer/>
</>
    );
}
export default HomeLayout;