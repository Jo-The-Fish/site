import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Pages/Landing";
import Navigation from "./Components/Navbar/navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          {/* <Route exact path="/getinvolved">
            <GetInvolved />
          </Route>
          <Route exact path="/contributor">
            <ContributorPortal />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
