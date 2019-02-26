import React from "react";
import { Router, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
// import List from "../Component/List";
import { Footer } from "../components/Footer/Footer";
import { HomePage } from "../components/HomePage/HomePage";
// import Post from "../Component/Posts";
export class App extends React.Component {
  render() {
    const history = createBrowserHistory();
    return (
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>PRUSA</h2>
          <Router history={history}>
            <Footer />
          </Router>
        </div>
      </div>
    );
  }
}
