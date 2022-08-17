import React from "react";
import Navigation from "./navigation";
import Footer from "./footer";

const HomeLayout=({children})=>{
    return(
<>
<Navigation/>
<div style={{ minHeight:"50vh",width:"100%", padding: '1.5rem 5rem'}}>{children}</div>
<Footer/>
</>
    );
}
export default HomeLayout;