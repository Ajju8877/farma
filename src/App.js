import "./styles.css";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Home_content from "./Home_content";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="header_1">
        <div className="header_1_left">
          <div className="state">maharashtra</div>
          <div className="language">english</div>
          <div className="humidity">32.4f</div>
        </div>

        <div className="header_1_right">
          <div className="login">Login</div>
          <div className="vertcal_line"> | </div>
          <div className="sign_up"> Sign_up</div>
        </div>
      </div>

      <div className="header_2">
        <div className="logo">
          <div className="logo_img">
            {" "}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHQ3OqSI8zPMS3MoRoDpJi1-tTlNVRXnvFA&usqp=CAU" />{" "}
            <h2> FAB</h2>{" "}
          </div>
          <p> FARMER ALIANCES FOR BUSINESS </p>
        </div>

        <div className="navbar">
          <ul>
            <li>
              {" "}
              <a href="https://github.com/maggi121997?tab=repositories">
                Home{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://github.com/maggi121997?tab=repositories">
                Shop{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://github.com/maggi121997?tab=repositories">
                About Us{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://github.com/maggi121997?tab=repositories">
                Contact Us{" "}
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="https://portfolio-at.netlify.app/">More </a>{" "}
            </li>
            <li>
              <SearchIcon />
            </li>
            <li>
              <AddShoppingCartIcon />
            </li>
          </ul>
        </div>
      </div>

      <div className="home_img">
        <img src="https://ak.picdn.net/shutterstock/videos/4563710/thumb/1.jpg" />
      </div>

      <div className="home_slogan">
        <p>
          {" "}
          Farming is not just for growing crops, it is for the cultivation of{" "}
          <br /> human beings !!!{" "}
        </p>
      </div>

      <div className="home_content">
        <Home_content />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}
