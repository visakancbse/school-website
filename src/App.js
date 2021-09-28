import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
// import DropBar from "./components/DropBar";
import Footer from "./components/Footer";
import logo from "./images/logo.png";
import Infrastructure from "./components/Infrastructure";
import Education from "./components/Education";
import Gallery from "./components/Gallery";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Admission from "./components/Admission";
import About from "./components/About";
import { useEffect, useRef } from "react";
import { Fab } from "@mui/material";
import { Navigation } from "@mui/icons-material";
import ApplicationForm from "./components/ApplicationForm";
import NotFoundPage from "./components/NotFoundPage";
import LiveEvent from "./components/LiveEvent";
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function App() {
  const mybutton = useRef(null);
  useEffect(() => {
    let element = mybutton?.current;
    window.addEventListener("scroll", () => {
      if (
        window.document.body.scrollTop > 20 ||
        window.document.documentElement.scrollTop > 20
      ) {
        if (mybutton !== null) element.style.display = "block";
      } else {
        if (mybutton !== null) element.style.display = "none";
      }
    });
  }, []);
  return (
    <Router>
      <LiveEvent />
      <div className="App">
        <NavBar />
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* <DropBar/> */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/infrastructure"
            component={Infrastructure}
          ></Route>
          <Route exact path="/education" component={Education}></Route>
          <Route exact path="/gallery" component={Gallery}></Route>
          <Route exact path="/admission" component={Admission}></Route>
          <Route exact path="/careers" component={Careers}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route
            exact
            path="/application-form"
            component={ApplicationForm}
          ></Route>
          <Route path="*" component={NotFoundPage}></Route>
        </Switch>
      </div>
      <Footer />
      <Fab
        variant="circular"
        style={{
          bottom: "1px",
          right: "1px",
          position: "fixed",
          zIndex: "100",
          backgroundColor: "#f44336",
          color:'white',
          display:
            window.document.documentElement.scrollTop > 20 ? "block" : "none",
        }}
        ref={mybutton}
        onClick={() => {
          window.document.body.scrollTop = 0;
          window.document.documentElement.scrollTop = 0;
        }}
      >
        <Navigation />
      </Fab>
    </Router>
  );
}

export default App;
