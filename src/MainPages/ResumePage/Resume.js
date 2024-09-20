import "../ResumePage/Resume.css";
import Resumes from "../../Components/Resume/Resumes.pdf";
import ResumeImage from "../../Components/Images/ResumeImage.jpeg";

let Resume=()=>{

    return(
        <>
        <div className="SPACE"></div>
        <p style={{color:"red", textAlign: "center"}}>▄︻デ      <a href={Resumes} download="Resume.pdf" id="pdfButton"><span style={{color:"white"}}>Download CV</span></a> ══━一</p>   

        <div className="pdfViewer">
       {/* <embed
        src={Resumes} 
        type="application/pdf" 
        width="100%" 
        height="900px" 
      /> */}


      <img src={ResumeImage} alt="Resume-Image" id="resume"/>
        </div>

        <p style={{color:"red", textAlign: "center"}}>▄︻デ      <a href={Resumes} download="Resume.pdf" id="pdfButton"><span style={{color:"white"}}>Download CV</span></a> ══━一</p>
    
        <div style={{marginTop: "55px"}}></div>
        </>
    );
};

export default Resume;


