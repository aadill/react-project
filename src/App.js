import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home.js";
import { NavBar } from "./components/Navbar.js";
import { Footer } from "./components/footer";
import {Contact} from "./Contact";
function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />{" "}
          <Route exact path="/contact" component={Contact} />{" "}
        </Switch>{" "}
        <Footer />
      </Router>{" "}
    </React.Fragment>
  );
}

export default App;
