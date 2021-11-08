// import logo from './logo.svg';
import "./App.css";
import "./Text.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from './components/About';
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  /**************** Toggle Display Mode ***************/
  const [mode, setMode] = useState("light"); //Whether Darkmode is Enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "darkslategrey";
      showAlert("Dark Mode has been enabled", "success");
      document.body.style.color = "white";

      // to make title blink
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing"
      // }, 2000);

      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.body.style.color = "black";
    }
    /****************** Display close *****************/
  };

  return (
    <>
    <Router>
      {/* Navbar */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />

      {/* Alert */}
      <Alert alert={alert} />

      {/* Text area */}
      
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </Route>
        </Switch>
      </div>
      </Router>
      {/* <About/> */}
    </>
  );
}

export default App;
