// import video from "../../assets/4906-181288859_tiny.mp4";
import { AiOutlineSwapRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../../public/logo-homie.png";
import imgLogo from "../../../public/submarine.jpg";
import TextField from "@mui/material/TextField";

const LoginPage = () => {
  return (
    <div className="loginPage_1 flex">
      <div className="container_1 flex">
        <div className="imgDiv_1">
          <img src={imgLogo}></img>

          <div className="footerDiv_1 flex">
            <span className="text">Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn_1 ">Sign up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv_1  flex">
          <div className="headerDiv_1 ">
            <img src={logo} alt="Logo Image" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form_1  grid">
            <TextField
              helperText=""
              id="demo-helper-text-misaligned"
              label="Email or phone number"
            />
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Password"
              type="password"
            />
            {/* <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                />
              </div>
            </div> */}

            <button type="submit" className="btn_1  flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword_1">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
