// import video from "../../assets/4906-181288859_tiny.mp4";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/457622299_833117712264485_7563656726501441209_n.png";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import imgLogo from "../../assets/620hgallerysubmarinehead-16977765755311772821520.jpg";
import "../../../public/scss/pages/register.scss";

const Register = () => {
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="imgDiv">
          <img src={imgLogo}></img>

          <div className="footerDiv flex">
            <span className="text"> Have an account</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>

          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input type="email" id="email" placeholder="Enter email" />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter username" />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
      //{" "}
    </div>
  );
};

export default Register;
