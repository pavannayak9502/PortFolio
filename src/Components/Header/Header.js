import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../Header/Header.css";

let Header =()=>{

    let handleMenu=()=>{
        let sidebar = document.querySelector(".sideBar");
        sidebar.style.display = "flex";
    };

    let hideSidebar=()=>{
        let hideBar = document.querySelector(".sideBar");
        hideBar.style.display = "none";
    };

    return(
        <div className="Header">
            <nav>
            <ul className="sideBar">
{/*Close Icon*/}    <li onClick={hideSidebar} className="closeIcon" ><a href="#close" style={{backgroundColor:"transparent"}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                    <li onClick={hideSidebar}><Link to="/home" className="Link">Home</Link></li>
                    <li onClick={hideSidebar}><Link to="/about" className="Link">About</Link></li>
                    <li onClick={hideSidebar}><Link to="/project" className="Link">Projects</Link></li>
                    <li onClick={hideSidebar}><Link to="/resume" className="Link">Resume</Link></li>
                    

                </ul>


                <ul className="bigScreen">

{/*Home Icon Page*/} <li  id="link"><Link to="/" className="Link"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg></Link></li>
                    <li className="hideOnMobile"><Link to="/home" className="Link">Home</Link></li>
                    <li className="hideOnMobile"><Link to="/about" className="Link">About</Link></li>
                    <li className="hideOnMobile"><Link to="/project" className="Link">Projects</Link></li>
                    <li className="hideOnMobile"><Link to="/resume" className="Link">Resume</Link></li>


{/*Menu Button*/}   <li onClick={handleMenu} className="menu-button"><a href="#menu"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a></li>

                </ul>

            </nav>
            <Outlet />
        </div>
    );
};
export default Header;