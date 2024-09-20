import React from "react";
import "../ProjectPage/Project.css";
import Weather from "../../Components/Images/Weather.gif";
import Todo from "../../Components/Images/Todo.gif";
import Jokes from "../../Components/Images/Jokes.gif";
import CreditValidation from "../../Components/Images/CreditValidation.gif";




let Project=()=>{

    return(
        <>
        <div className="ForSpace"></div>
        <h1 id="head1">My <span style={{color:"red"}}>Recent</span> Work</h1>
        <p id="para1">Here are a few projects I've worked on recently.</p>

        <div className="projects">

        <div className="Project" id="project">
            <img src={Weather} alt="projectImage" id="projectImage"></img>

            <div id="description">
                <h4 id="head2">Weather Applications</h4>
                <p id="Para2">The application allows users to get information on various cities in real time. With the help of API, we are fetching the weather details of the city which is been searched by the user.</p>
                <a href="https://github.com/pavannayak9502/weatherApplication/tree/master" alt="GitHub_Page" target="_blank" rel="noreferrer" className="githubLink" style={{marginTop:"15px"}}>GitHub</a>
                <a href="https://pavannayak9502.github.io/weatherApplication/" alt="Live_Page" target="_blank" rel="noreferrer" className="githubLink">Live Page</a>
            </div>
        </div>



        <div className="Project" id="project">
            <img src={Todo} alt="projectImage" id="projectImage"></img>

            <div id="description">
                <h4 id="head2">Todo App</h4>
                <p id="Para2">The Application was based on class based components. This to-do list can add new tasks we can also delete the tasks by clicking on them. The logic is handled by a click event handler whenever the user clicks on a task it gets deleted from the list.</p>
                <a href="https://github.com/pavannayak9502/todoApplication/tree/master" alt="GitHub_Page" target="_blank" rel="noreferrer" className="githubLink" style={{marginTop:"15px"}}>GitHub</a>
                <a href="https://pavannayak9502.github.io/todoApplication/" alt="Live_Page" target="_blank" rel="noreferrer" className="githubLink">Live Page</a>
            </div>
        </div>


        <div className="Project" id="project">
            <img src={CreditValidation} alt="projectImage" id="projectImage"></img>

            <div id="description">
                <h4 id="head2">Card Number Validation</h4>
                <p id="Para2">Credit card validation is an important step in every application in order to authenticate the user’s credit card number so that the application can proceed to the payment process if needed. The application shows how to validate the user entered credit card number and check whether it is valid or not using the npm module in the ReactJS application.</p>
                <a href="https://github.com/pavannayak9502/creditCardValidator/tree/master" alt="GitHub_Page" target="_blank" rel="noreferrer" className="githubLink" style={{marginTop:"15px"}}>GitHub</a>
                <a href="https://pavannayak9502.github.io/creditCardValidator/" alt="Live_Page" target="_blank" rel="noreferrer" className="githubLink">Live Page</a>
            </div>
        </div>


        <div className="Project" id="project">
            <img src={Jokes} alt="projectImage" id="projectImage"></img>

            <div id="description">
                <h4 id="head2">Jokes Generator</h4>
                <p id="Para2">It's based on fetches data (joke) from an external API and displays it on the screen. Each time we reload the page and click the button, a new joke fetched and rendered on the screen by React. As we are using React for this project, we need not reload the page to display the fetched data.</p>
                <a href="https://github.com/pavannayak9502/jokesGenerator" alt="GitHub_Page" target="_blank" rel="noreferrer" className="githubLink" style={{marginTop:"15px"}}>GitHub</a>
                <a href="https://pavannayak9502.github.io/jokesGenerator/" alt="Live_Page" target="_blank" rel="noreferrer" className="githubLink">Live Page</a>
            </div>
        </div>


        </div>
        </>
    );

};
export default Project;