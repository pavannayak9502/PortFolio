import "../ResumePage/Resume.css";
import LavoriPavanResume from "../../Components/Resume/LavoriPavanResume.pdf";
import ResumeImage from "../../Components/Images/ResumeImage.png";

let Resume=()=>{

    return(
        <>
        <div className="SPACE"></div>
        <p style={{color:"red", textAlign: "center"}}>▄︻デ      <a href={LavoriPavanResume} download="Resume.pdf" id="pdfButton"><span style={{color:"white"}}>Download CV</span></a> ══━一</p>   

        <div className="pdfViewer">
        <iframe
        title="Resume"
        src={LavoriPavanResume}
        id="pdfFrame"
        style={{ width: '100%', height: '100vh', frameBorder: '0', background: "transparent"}}
      />


       <img src={ResumeImage} alt="Resume-Image" id="resume"/> 
        </div>

        <p style={{color:"red", textAlign: "center"}}>▄︻デ      <a href={LavoriPavanResume} download="Resume.pdf" id="pdfButton"><span style={{color:"white"}}>Download CV</span></a> ══━一</p>
    
        <div style={{marginTop: "55px"}}></div>
        </>
    );
};

export default Resume;


