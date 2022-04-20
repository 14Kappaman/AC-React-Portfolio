import { Link } from "react-router-dom";
import { setCurrentPage } from "./App";

let currentPage = "about"

function SwitchTo(page) {
    document.getElementById(currentPage).hidden = true;

    document.getElementById(page).hidden = false;

    currentPage = page;
}

export function Navigation(props) {
    return (
        <header className='App-header'>
        <h1>Welcome to My Portfolio </h1>
        <nav>
            <button onClick={() => {setCurrentPage("about")}}>About</button>
            <button onClick={() => {setCurrentPage("contact")}}>Contact</button>
            <button onClick={() => {setCurrentPage("resume")}}>Resume</button>
            <button onClick={() => {setCurrentPage("work")}}>Work</button>
        </nav>
    </header>
    )
}

//<a href="/about-me">About Me</a>
//<a href="./assests/AubreyCrookResume2021.pdf" target="_blank">Resume</a>

/*

            <a href="/AC-React-Portfolio">Home</a>
            <a href="/AC-React-Portfolio/work">Portfolio</a>
            <a href="/AC-React-Portfolio/resume">Resume</a>
            <a href="/AC-React-Portfolio/contact">Contact</a>


            <Link to='/'>Home</Link>
            <Link to='work'>Portfolio</Link>
            <Link to='resume'>Resume</Link>
            <Link to='contact'>Contact</Link>

*/