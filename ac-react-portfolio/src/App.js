import logo from './logo.svg';
import './App.css';
import { Footer } from './footer';
import {Navigation} from "./navigation";
import { Header } from './header';
import { Project } from './project';

function App() {
  return (
    <div>
       
    <Navigation/>

    <section className="hero"></section>

    <main className="main-wrapper"> 

        <section id="about-me" className="page-section">
            <Header name="Home" value="About Aubrey"/>
            <div>
                <img className="profilepic" src="./../images/mypic.jpg"></img>

                <p>Aubrey Crook is the Director of STEM Programs for the Georgia Youth Science & Technology Center, Inc.
                    (GYSTC) at Kennesaw State University. He is a highly effective educator in the fields of science and
                    technology that brings new light and innovation to the classroom and student programs that he
                    creates.</p>
                <p>In his role with GYSTC, he is committed to promoting student interest and achievement in math and
                    science. As a leader he provides quality professional learning for teachers of STEM subjects that
                    improve the teaching and learning process at the kindergarten through eighth-grade levels, serves as
                    a teacher mentor and implements the programs he develops throughout the state.</p>
                <p>Aubrey attributes much of his success as an educator to the implementation of technology and his
                    engaging approach to learning. Aubrey is a graduate of The University of Alabama at Birmingham,
                    Cambridge College and Georgia College & State University.</p>
            </div>
        </section>

        <section id="resume" className="page-section">
        <Header name="Resume" value="Resume"/> <div>
        <a href='./../images/AubreyCrookResume2021 (1).pdf'>Resume</a>
        <h3>Proficiencies</h3>
<ul> 
<li>
HTML
</li>
<li>
CSS
</li>
<li>
JavaScript
</li>


</ul>

        </div>

      

            </section>

        <section id="portfolio" className="page-section">
            <Header name="Work" value="Work"/>
            <div id="portfolioitems">
                <Project link="https://14kappaman.github.io/CheapDate/" 
                name="Cheap Date" 
                image="cheap"
                languages="JavaScript/HTML/bulma"/>

                <Project link="https://14kappaman.github.io/WeatherDashboard/" 
                name="Weather App" 
                image="led"
                languages="Javascript/HTML"/>

                <Project link="https://14kappaman.github.io/DailyWorkCalendar/" 
                name="Work Calendar" 
                image="calc"
                languages="Bootstrap/Jquery/HTML"/>

                <Project link="#" 
                name="Pro Event Planning" 
                image="proeventplanning"
                languages="Javascript/Handlebars"/>

                <Project link="https://watch.screencastify.com/v/MjbQ383q7lo4uTzcufvv" 
                name="Employee Management System" 
                image="employeemanagementsystem"
                languages="Javascript/MySQL"/>

                <Project link="https://warm-tor-69006.herokuapp.com/" 
                name="Tech Blog" 
                image="tech_blog"
                languages="JavaScript/Handlebars/CSS"/>

            </div>

        </section>


        <section id="contact" className="page-section">
            <Header name="Contact" value="Contact"/>
            <address>
                <div>
                <strong>Phone </strong>
                <a href='tel:5555551234'>555-555-1234</a>
                </div>
                    <div>
                    <strong>Email </strong>
                    
                <a href="mailto:aubrey.crook@gmail.com">aubrey.crook@gmail.com </a>

                    </div>
                <a href="https://github.com/14Kappaman">
                    
            <img className='addressimg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
          
                    </a>
                <a href="https://www.linkedin.com/in/aubrey-c-88443058/">
                    
            <img className='addressimg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
          
                    </a>
            
            <a href='./../images/AubreyCrookResume2021 (1).pdf'>Resume</a>
            </address>
        </section>


    </main>

    <Footer/>

    </div>
  );
}

export default App;
