import React from "react";
import "../HomePage/HomePage.css";
import SmileGif from "../../Components/Images/SmileGif.gif";
import Type from "./TypeWriter"; /*Must and should install it in your node package.*/
import typingGif from "../../Components/Images/typingGif.gif";
import image from "../../Components/Images/image.png";

let Home=()=>{

    return(
        <>
        <div className="Home">
            
            <div className="intro">
            <h1>Hi There! <span><img src={SmileGif} alt="smileImage" width="60px" height="60px" style={{background:"transparent", marginBottom:"-15px"}}/></span></h1>
            <h1>I'M <span style={{color:"red"}}>LAVORI PAVAN</span></h1>
            <h1><Type /></h1>
            <img src={typingGif} alt="homepage_Image" id="userDemo_Image1"/>
            </div>

            <div className="introDetails">
            <img src={image} alt="User-Avatar-Image" className="userImg" id="userDemo_Image2"/>
            <h1 id="h1Header4">LET ME <span style={{color:"red"}}>INTRODUCE</span> MYSELF</h1>
            <p>I fell in love with programming and I have at least learnt something, I think  🤷‍♂️</p>
            <p>I am fluent in classics like <span style={{color:"red"}}>Java</span> and <span style={{color:"red"}}>javaScript.</span></p>
            <p>My field of Interet's are building new <span style={{color:"red"}}> Web Technologies</span> and in <span style={{color:"red"}}>Products.</span></p>
            <p>Whenever possible, I also apply my passion for developing products with <span style={{color:"red"}}>Node.js</span> and modern <span style={{color:"red"}}>Javascript Library</span> and <span style={{color:"red"}}>Frameworks</span> like <span style={{color:"red"}}>React.js</span></p>
            </div>

            <div className="space"></div>

            <div className="socialLinks">
            <h1 style={{color:"green"}}>FIND ME ON</h1>
            <p>Feel free to <span style={{color:"red"}}>connect</span> with me.</p>
                <div className="Links">
                <ul className="Link">
                <li id="link1"><a href="https://github.com/pavannayak9502" alt="User_Git_page" target="_blank" rel="noreferrer" id="Link1"><i className="fa-brands fa-github"></i></a></li>
                <li id="link2"><a href="https://www.linkedin.com/in/lavori-pavan/" alt="User_LinkedIn_Page" target="_blank" rel="noreferrer" id="Link2"><i className="fa-brands fa-linkedin-in"></i></a></li>
                <li id="link3"><a href="https://x.com/pavan95021" alt="User_X_page" target="_blank" rel="noreferrer" id="Link3"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li id="link4"><a href="https://www.instagram.com/pavannayak1234/" alt="instagram_page" target="_blank" rel="noreferrer" id="Link4"><i className="fa-brands fa-instagram"></i></a></li>
                </ul>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;