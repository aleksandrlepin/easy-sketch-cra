import React from 'react';
import './About.css';
import AboutItem from './AboutItem/AboutItem';

function About () {
    const goalsText = (
        <div>
            <h3>Goals</h3>
            <p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum. </p>
        </div>
    )
    const dreamsText = (
        <div>
            <h3>Dreams</h3>
            <p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum. </p>
        </div>
    )
    return (
        <section className="content" id="about">
            <h2>About</h2>
            <div className="about">
                <AboutItem className="about__goals">
                    {goalsText}
                </AboutItem>
                <AboutItem className="about__dreams">
                    {dreamsText}
                </AboutItem>
            </div>
        </section>
    );
}

export default About;
