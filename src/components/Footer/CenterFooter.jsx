import React from "react";
import { Link } from "react-router-dom";

export class CenterFooter extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-md-4  collapsed-block  fadeUp">
        <h4>
          Punjabi Radio Usa
          <a className="expander visible-xs" href="#TabBlock-4">
            +
          </a>
        </h4>
        <div className="tabBlock" id="TabBlock-4">
          <ul className="menu">
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/advertise">Advertise</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
