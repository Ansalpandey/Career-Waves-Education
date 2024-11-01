import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"; 
import Feeter from "../components/Feeter";
import CoursesCards from "../components/Courses-Cards";

function Courses(){
    return(
        <div>
            <Header />
            <CoursesCards />
            <Footer />
            <Feeter />
        </div>
    )
}

export default Courses;