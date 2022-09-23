import "./style.css";
import Taniku from "../../assets/Image/Portofolio/Taniku.png";
import Tokpokki from "../../assets/Image/Portofolio/Tokpokki.png";
import UIndo from "../../assets/Image/Portofolio/UIndo.png";
import P3M from "../../assets/Image/Portofolio/P3M.png";
import PAPC from "../../assets/Image/Portofolio/PAPC.png";
import nic from "../../assets/Image/Portofolio/nic.jpeg";
import desainboot from "../../assets/Image/Portofolio/desainboot.png";
import bisnis from "../../assets/Image/Portofolio/bisnis.JPG";

import { Row, Col, Card, Image, } from "react-bootstrap";

const About = () => {
  return (
    <div className="contoh1">
      <h1>Awards</h1>
      <hr class="edit"/>
      <br/>
      <Row >
          <Col md={10} className="Listwrapper mx-auto">
            <Card className="Listawards">
              <Image src={Taniku} alt="taniku" className="image" />
              <div className="Listbg">
                <div className="text-black">
                  <Card.Title className="text-center">
                  UI/UX Design Project "Tani-Ku" marketplace application <br/> 
                  (Efficient distribution directly from local farmers throughout Indonesia).
                  </Card.Title>
                  <Card.Text >
                    <br/>
                  <p class="date"> &emsp; &emsp; Date : 21 June 2021 </p>
                  <ul>
                  <li>Produced 10+ designs for the “Tani-Ku” application product which was user-friendly, simple, and interactive.</li>
                  <li>Achieving a score of A with a team leader building collaboration between 5 members, delegating team tasks effectively and 
                      productively, and quickly finding creative solutions to problems during the UI/UX design process.</li>
                  </ul>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row >
          <Col md={10} className="Listwrapper mx-auto">
            <Card className="Listawards">
              <Image src={Tokpokki} alt="tokpokki" className="image" />
              <div className="Listbg2">
                <div className="text-black">
                <Card.Title className="text-center">
                  Project 1 Day Entrepreneurship Nusa Mandiri "Tokpokki Jaman Now"
                  </Card.Title>
                  <Card.Text >
                    <br/>
                  <p class="date"> &emsp; &emsp; Date : 23 Nov 2019 </p>
                  <ul>
                  <li>Successfully selling 50 cups in a day by spreading product understanding, targeting the market through banner marketing 
                      strategies, catalogs, and WhatsApp, and being able to get 5% profit from total sales.
                  </li>
                  <li>Rank 2 out of 8 teams in 1 class and get an A, lead a team of 6 members to build a creative team, cultivate discipline in every 
process and help each other.</li>
                  </ul>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row >
          <Col md={10} className="Listwrapper mx-auto">
            <Card className="Listawards">
              <Image src={desainboot} alt="desainboot" className="image" />
              <div className="Listbg2">
                <div className="text-black">
                  <Card.Title className="text-center">
                  Binar Insight: UI Designer Mini Bootcamp <br/>
                  "How to Build Grid and Make Color Works with Figma"
                  </Card.Title>
                  <Card.Text >
                    <br/>
                  <p class="date"> &emsp; &emsp; Date : 30 June 2022 </p>
                  <ul>
                  <li>Learn about the various parts of the Grid system and the application of grid types based on the appropriate device type.
                  </li>
                  <li>Learn the rules of color, the application of appropriate psychological and emotional colors for interactive and aesthetic UI 
designs. Sharpen creativity and critical thinking in implementing a UI design, using Figma.</li>
                  </ul>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row >
          <Col md={10} className="Listwrapper mx-auto">
            <Card className="Listawards">
              <Image src={bisnis} alt="bisnis" className="image" />
              <div className="Listbgall">
                <div className="text-black">
                  <Card.Title className="text-center">
                  Seminar Entrepreneur "Think Big, Star small and do now" <br/> Seminar Participants 
                  </Card.Title>
                  <Card.Text >
                    <br/>
                  <p class="date"> &emsp; &emsp; Date : 31 Oct 2019  </p>
                  <ul>
                  <li>Train creativity imaginatively and uniquely in finding different business ideas from small steps.
                  </li>
                  <li>Develop time management skills and effective sales strategies to start entrepreneurship</li>
                  </ul>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row >
          <Col md={10} className="Listwrapper mx-auto">
            <Card className="Listawards">
              <Image src={UIndo} alt="UIndo" className="image" />
              <div className="Listbgall">
                <div className="text-black">
                  <Card.Title className="text-center">
                Universitas Indonesia Successful Character building <br/> Seminar Participants 
                  </Card.Title>
                  <Card.Text >
                    <br/>
                  <p class="date"> &emsp; &emsp; Location/Date : Depok, Indonesia 21 May 2017  </p>
                  <ul>
                  <li>Learn together to explore their potential, and can develop themselves to be more confident.
                  </li>
                  <li>Train discipline, improve communication skills in socializing, and foster leadership attitudes.</li>
                  </ul>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

          <Col md={10} className="Listwrapper mx-auto">
            <Card className="Listawards">
              <Image src={PAPC} alt="PAPC" className="image" />
              <div className="Listbgall">
                <div className="text-black">
                </div>
              </div>
            </Card>
          </Col>

          <Col md={10} className="Listwrapper mx-auto">
            <Card className="Listawards">
              <Image src={P3M} alt="P3M" className="image" />
              <div className="Listbgall">
                <div className="text-black">
                </div>
              </div>
            </Card>
          </Col>

          <Col md={10} className="Listwrapper mx-auto">
            <Card className="Listawards">
              <Image src={nic} alt="nic" className="image" />
              <div className="Listbgall">
                <div className="text-black">
                </div>
              </div>
            </Card>
          </Col>
        </div>
  );
};

export default About;
