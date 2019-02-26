import React from "react";
import { LeftFooter } from "./LeftFooter";
import { CenterFooter } from "./CenterFooter";
import { RightFooter } from "./RightFooter";

export class Footer extends React.Component {
  render() {
    return (
      <footer>
        <section className="footer-navbar">
          <div className="container content nopad-xs">
            <div className="row">
              <LeftFooter />
              <CenterFooter />
              <RightFooter />
            </div>
          </div>
        </section>
        <section className="footer-bottom-block container visible-xs">
          <div className="row">
            <div className="col-sm-5 col-md-4 copyright-text">
              {" "}
              &copy; 2018 Punjabi Radio USA. All Rights Reserved.
            </div>
          </div>
        </section>
      </footer>
    );
  }
}
