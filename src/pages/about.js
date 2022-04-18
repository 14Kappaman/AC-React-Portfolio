import { Header } from "../header";

export function About(props) {
    return (
        <section id="about-me" className="page-section">
            <Header name="Home" value="About Aubrey"/>
            
            <div>
                <img className="profilepic" src="images/mypic.jpg"></img>

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
    )
}