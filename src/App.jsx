import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills"
import Awards from "./components/Awards"
import Interest from "./components/Interest"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./app.css"

const  App = () =>{
  return (
   <Router>
   <div className="app">
   <NavBar />
   <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/about" component={About} />
   <Route exact path="/experience" component={Experience} />
   <Route exact path="/skills" component={Skills} />
   <Route exact path="/awards" component={Awards} />
   <Route exact path="/interest" component={Interest} />
   <Route exact path="/contact" component={Contact} />
   </Switch>
   <Footer />
   </div>
   </Router>
  );
}

export default App;
