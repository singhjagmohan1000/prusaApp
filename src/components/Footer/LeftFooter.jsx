import React from "react";
import { Link } from "react-router-dom";
import { Image, Transformation } from "cloudinary-react";

export class LeftFooter extends React.Component {
  render() {
    return (
      <div className="col-sm-4 col-md-4 col-lg-4 hidden-xs  fadeUp">
        <Link to="/">
          <Image cloudName="prusa" publicId="PRUSA_Transparent_LOGO_lhnjhp.png">
            <Transformation height="85" crop="scale" />
          </Image>
        </Link>
        <div>
          &copy; 2019 Punjabi Radio USA.{" "}
          <span className="clearfix visible-sm" />
          All Rights Reserved.
        </div>
      </div>
    );
  }
}
