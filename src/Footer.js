import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import CallIcon from "@material-ui/icons/Call";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_1">
        <div className="footer_links">
          <h3>Quick links </h3>
          <ul>
            <li> About </li>
            <li> FAQs </li>
            <li> Privacy Policy </li>
            <li> Terms and Conditions </li>
          </ul>
        </div>

        <div className="footer_products">
          <h3>Our Products </h3>
          <ul>
            <li> seeds </li>
          </ul>
        </div>

        <div className="footer_address">
          <h3>CONTACT </h3>
          <ul>
            <li>
              {" "}
              <CallIcon /> <p>+234 345 456 678</p>{" "}
            </li>
            <li>
              {" "}
              <MailIcon /> <p>info@fab.com</p>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="footer_2">
        <div className="footer_social_connects">
          <ul>
            <li>
              {" "}
              <FacebookIcon />{" "}
            </li>
            <li>
              {" "}
              <LinkedInIcon />{" "}
            </li>
            <li>
              {" "}
              <TwitterIcon />{" "}
            </li>
            <li>
              {" "}
              <InstagramIcon />{" "}
            </li>
          </ul>
        </div>

        <div className="footer_logo">
          <div className="logo_img">
            {" "}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHQ3OqSI8zPMS3MoRoDpJi1-tTlNVRXnvFA&usqp=CAU" />{" "}
            <h1> FAB</h1>{" "}
          </div>
          <p> FARMER ALIANCES FOR BUSINESS </p>
        </div>
      </div>
    </div>
  );
}
