import React from "react";
import "../Footer/Footer.css";

let Footer=()=>{
    let date = new Date();
    let year = date.getFullYear();

    return(
        <footer>
            <div className="footer">
            <h4>Designed by Developed by <span style={{color:"red"}}> ❤️‍🔥 Lavori Pavan</span></h4>
            <br></br>
            <p>Copyright © <span style={{color:"red"}}>{year}</span> LP</p>
            </div>
        </footer>
    );

};
export default Footer;