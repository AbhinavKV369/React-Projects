import logo from "../assets/image.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" height="50px" />
        <h1>router</h1>
      </div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default Navbar;
