import React, { useRef } from 'react';
import classes from './About.module.css';
import PageTitle from '../../../Components/PageTitle/PageTitle';
import {useScrolledTo} from '../../../Hooks/useScrolledTo'
import Skill from '../../../Components/Skill/Skill';

export default function About(props) {
    const scrollAncor = useRef(null);
    const scrolledTo = useScrolledTo(scrollAncor, 0);

    const renderSkillList = skillList => {
        return skillList.map( skill => {
            return <Skill key={`${skill}`} show={scrolledTo} name={skill} />})
    }

    const skillClasses = [classes.SkillsContainer, scrolledTo && classes.Show].join(' ');
  
    return (
        <div id="A" ref={scrollAncor} className={classes.Wrap}>
            <PageTitle text="ABOUT ME" />
            {scrolledTo ? 
                <div id="aboutMeInfo" className={[classes.Info, classes.ShowInfo].join(' ')}>
                    <p >Programming has become a huge passion of mine, and a timesink. I focus on web development both front and backend. But that's not necessarily
                        where i set my boundaries. </p>
                    <br/>
                    <p >I consider to have only scratched the surface in this field. 
                        Therefore i am constantly expanding my skillset so always <a href="mailto:krunaluka@gmail.com">contact</a> contact me for more information about potential endeavours .</p>
                    <br/>
                    <p >For more general information about me, take a look at my <a href={require('../../../Content/cv.pdf')}> CV</a>.</p>
                </div>
             : null }
            
            <div className={classes.TechSkills}>
                <div className={skillClasses}>
                    {renderSkillList(['HTML', 'SCSS-CSS', 'UX'])}
                </div>
                <div className={skillClasses}>
                    {renderSkillList(['REACT', 'JAVASCRIPT' ,'TYPESCRIPT'])}
                </div>
                <div className={skillClasses}>
                    {renderSkillList(['LARAVEL', 'PHP'])}
                </div>
            </div> 

            <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
        </div>      
    );
}



