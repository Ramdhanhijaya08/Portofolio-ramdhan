import { Link, useLocation } from "react-router-dom";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title " >
        <h1>
          <p>Hi,</p>
          <p>I'am Ramdhan</p>
          <p>React Native Developer</p>
        </h1>
        <Link to="contact">
          <button>Contact me</button>
        </Link>
        </div>
      <div className="person">
        <img
          src={`${process.env.PUBLIC_URL}/NewRamdhanedit.png`}
          alt="person picture"
        />
      </div>
    </div>
  );
};

export default Home;
