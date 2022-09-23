import "./style.css";
import React from 'react';
import Marquee from 'react-fast-marquee';
import drawing from '../../assets/Image/Interest/drawing.png';
import editing from '../../assets/Image/Interest/editing.png';
import gaming from '../../assets/Image/Interest/gaming.png';
import listening from '../../assets/Image/Interest/listening.png';
import photo from '../../assets/Image/Interest/photo.png';
import run from '../../assets/Image/Interest/run.png';
import teams from '../../assets/Image/Interest/teams.png';
import traveling from '../../assets/Image/Interest/traveling.png';
import workout from '../../assets/Image/Interest/workout.png';

const About = () => {
  return (
    <div className="interest ">
      <hr/><h1>Interest</h1>
      <br/>
      <br/>
      <div className="Marquestyle">
        <Marquee direction="right" speed={90} >
          <div className="image_wrapper">
            <img src={drawing} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={editing} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={gaming} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={listening} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={photo} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={run} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={teams} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={traveling} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={workout} alt="" />
          </div>
        </Marquee>
      </div>
      
      <div className="content">
      <p> Workout | Jogging | Listening Music | Games | Photography | Hangout | Traveling | <br/> 
      | Editing (Figma, Photoshop, Canva, Filmora, and Cap cut) | </p>
<br/>
<br/>
<br/>
        </div>
    </div>
    
  );
};

export default About;
