import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import logo from "./images/logo.png";
// import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
function App() {

  return (
    <Router>
     
      <div className="App">
      <img className="logo" src={logo} alt="Logo" />

        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
