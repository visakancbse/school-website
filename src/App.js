import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
// import DropBar from "./components/DropBar";
import Footer from "./components/Footer";
import logo from "./images/logo.png";
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function App() {

  return (
    <Router>
     
      <div className="App">
        <NavBar />
        <div className="logo">
      <img src={logo} alt="Logo" />
        </div>
        
        {/* <DropBar/> */}
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
