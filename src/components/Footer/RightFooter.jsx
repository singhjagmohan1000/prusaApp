import React from "react";

export class RightFooter extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-md-4 collapsed-block  fadeUp">
        <h4>
          Contact Us
          <a className="expander visible-xs" href="#TabBlock-6">
            +
          </a>
        </h4>
        <div className="tabBlock" id="TabBlock-6">
          <ul className="menu">
            <li>
              <span className="icon flaticon-home" /> 3750 McKee Road, STE B,
              San Jose, CA
            </li>
            <li>
              <span className="icon flaticon-phone" /> (408) 272-5200, (408)
              722-7698
            </li>
            <li>
              <span className="icon flaticon-mail" />{" "}
              <a href="mailto:info@punjabiradiousa.com">
                info@punjabiradiousa.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
