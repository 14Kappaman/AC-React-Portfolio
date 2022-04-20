import { Header } from "../header";
import { Project } from "../project";

export function Work(props) {
    return (
        <section id="work" className="page-section">
            <Header name="Work" value="Work"/>

            <div>
            <p>Please click below to access the repository of any of my projects.</p>
            <div id="portfolioitems">
                <Project link="https://kovaceva11.github.io/CheapDate/" 
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

                <Project link="https://shaq-pro-event-planning.herokuapp.com/" 
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

                <Project link="https://art-e-commerce-892.herokuapp.com/" 
                name="The Art Store" 
                image="Art_Store"
                languages="JavaScript/React/CSS"/>

            </div>
            </div>

            

        </section>
    )
}