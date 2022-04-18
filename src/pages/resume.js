import { Header } from "../header";

export function Resume(props) {
    return (
        <section id="resume" className="page-section">
        <Header name="Resume" value="Resume"/> <div>

            <div id='resumeSection'>
        <a href='images/acrookresume.pdf'>
            <div className='resumeLink'>
                <div className='textIcon'>
                    📄
                </div>
            <h3>Resume</h3>

            </div>
            </a>
        <div>
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
<li>NodeJS</li>
<li>MySQL</li>
<li>Heroku</li>
<li>ExpressJS</li>
<li>React</li>


</ul>

        </div>

            </div>

        </div>

      

            </section>
    )
}