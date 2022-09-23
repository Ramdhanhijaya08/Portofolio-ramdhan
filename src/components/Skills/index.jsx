import "./style.css";
import React from 'react';
import Marquee from 'react-fast-marquee';
import coding from '../../assets/Image/Skills/code.png';
import contentcreator from '../../assets/Image/Skills/content.png';
import copyw from '../../assets/Image/Skills/copyw.png';
import drawing from '../../assets/Image/Skills/drawing.png';
import editing from '../../assets/Image/Skills/editing.png';
import language from '../../assets/Image/Skills/language.png';
import leader from '../../assets/Image/Skills/leader.png';
import socialmedia from '../../assets/Image/Skills/socialmedia.png';
import teams from '../../assets/Image/Skills/teams.png';

const About = () => {
  return (
    <div className="skills ">
      <hr/><h1>Skills</h1>
      <br/>
      <div className="content">
          <p>Content creation, Copywriting, Social media, digital marketing, UI/UX design, and video editing (Adobe Xd, Figma, Photoshop, 
Canva, Filmora, and Cap cut), Microsoft Office, Marketplace (Tokopedia and Shopee). Leadership, Communicative, Collaborative,
Conscientious, Customer Service, Administration, Indonesian (native), English (Intermediate)</p>
        </div>
        <div className="Marquestyle">
        <Marquee direction="right" speed={90} >
          <div className="image_wrapper">
            <img src={coding} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={contentcreator} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={drawing} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={copyw} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={language} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={leader} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={teams} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={socialmedia} alt="" />
          </div>
          <div className="image_wrapper">
            <img src={editing} alt="" />
          </div>
        </Marquee>
      </div>
    <br/>
  <br/>
  </div>
  );
};

export default About ;
