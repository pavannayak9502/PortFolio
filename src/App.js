import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";  /*  npm install react-router-dom */
import "../src/App.css";
import Header from "../src/Components/Header/Header.js";
import Footer from "./Components/Footer/Footer.js";
import Home from "../src/MainPages/HomePage/Homepage.js";
import About from "./MainPages/AboutPage/AboutPage.js";
import Project from "./MainPages/ProjectPage/Project.js";
import Resume from "./MainPages/ResumePage/Resume.js";
import ScrollToTop from "../src/Components/Scroll/Scroll.js";


let App=()=>{

    return(
        <>
        <div>
            <Router>
                <Header />
                <ScrollToTop />

                <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/resume" element={< Resume />}  />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                </main>

                <Footer />
            </Router>
        </div>
        </>
    );
};

export default App;