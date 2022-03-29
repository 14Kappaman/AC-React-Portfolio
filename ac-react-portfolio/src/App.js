import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
       <header className='App-header'>
        <h1>Welcome to My Portfolio </h1>

        <nav>

            <a href="#Home">Home</a>
            <a href="#about-me">About Me</a>
            <a href="#portfolio">Portfolio</a>
            <a href="./assests/AubreyCrookResume2021.pdf" target="_blank">Resume</a>
            <a href="#contact">Contact</a>

        </nav>
    </header>


    <section className="hero"></section>

    <main className="main-wrapper"> 

        <section id="about-me" className="page-section">
            <h2><a name="Home"></a> About Aubrey</h2>
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

        <section id="portfolio" className="page-section">
            <h2>Work</h2>
            <div id="portfolioitems">
                <a href="https://14kappaman.github.io/CheapDate/" className="application cheap">
                    <div>
                        <h3>Cheap Date</h3>
                        <span>javascript/html/bulma</span>
                    </div>
                </a>

                <a href="https://14kappaman.github.io/WeatherDashboard/" className="application led">
                    <div>
                        <h3>Weather App</h3>
                        <span>Javascript/HTML</span>
                    </div>
                </a>

                <a href="https://14kappaman.github.io/DailyWorkCalendar/" className="application calc">
                    <div>
                        <h3>Work Calendar</h3>
                        <span>Bootstrap/Jquery/HTML</span>
                    </div>
                </a>

                <a href="#" className="application proeventplanning ">
                    <div>
                        <h3>Pro Event Planning</h3>
                        <span>Javascript/Handlebars</span>
                    </div>
                </a>

                <a href="https://watch.screencastify.com/v/MjbQ383q7lo4uTzcufvv" className="application employeemanagementsystem">
                    <div>
                        <h3>Employee Management System</h3>
                        <span>Javascript/MySQL</span>
                       
                    </div>
                </a>

            </div>

        </section>


        <section id="contact" className="page-section">
            <h2><a name="Contact"></a>Contact</h2>
            <address>
                <p><strong>Phone </strong>: 555-555-1234</p>
                <a href="https://github.com/14Kappaman">Github</a>
                <a href="https://www.linkedin.com/in/aubrey-c-88443058/">LinkedIn</a>
                <a href="mailto:aubrey.crook@gmail.com">aubrey.crook@gmail.com </a>
            </address>


        </section>


    </main>

    <footer>
        <p>&copy; All Rights Reserved 2021</p>

    </footer>

    </div>
  );
}

export default App;
