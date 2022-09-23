import "./style.css";

import { Container } from "react-bootstrap";

const About = () => {
  return (
    <div className="about">
      <div className="photoprofile">
      <img
          src={`${process.env.PUBLIC_URL}/NewRamdhanedit.png`}
          alt="person picture"
        />
      </div>
      <Container className="text1">
        <h1>About me</h1>I studied at Nusa Mandiri University, currently in my
        7th semester majoring in Information Systems. Active studi independent
        in Kampus Merdeka ( Hacktiv8 ) React navite Developer classes. My
        working experience in warehouse administration, I managed stock and
        organized data. I was a Digital Marketing intern and managed to increase
        digital sales by 14% in 2 months. I am involved in community activity
        with Pelangi Harapan, teaching primary school students from 2018 - 2020.
        My interest is in creative digital, UI/UX design, video editing,
        Front-end react js, copywriting, social media marketing, and
        administration.
      </Container>
    </div>
  );
};

export default About;