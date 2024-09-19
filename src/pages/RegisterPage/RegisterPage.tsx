import { PATH } from "@/constant/path";
import { AiOutlineSwapRight } from "react-icons/ai";
// import { BsFillShieldLockFill } from "react-icons/bs";
// import { FaUserShield } from "react-icons/fa";
// import { MdMarkEmailRead } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../../public/logo-homie.png";
import imgLogo from "../../../public/submarine.jpg";
import TextField from "@mui/material/TextField";

const RegisterPage = () => {
  return (
    <div className="registerPage_2 flex">
      <div className="container_2 flex">
        <div className="imgDiv_2 ">
          <img src={imgLogo}></img>

          <div className="footerDiv_2 flex">
            <span className="text_2"> Have an account!</span>
            <Link to={PATH.LOGIN}>
              <button className="btn_2">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv_2 flex">
          <div className="headerDiv_2">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>

          <form action="" className="form_2 grid">
            {/* <div className="inputDiv">
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
            </div> */}
            <TextField
              helperText=""
              id="demo-helper-text-misaligned"
              label="Enter email"
            />
            {/* <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Password"
              type="password"
            /> */}
            <TextField
              helperText=""
              id="demo-helper-text-misaligned"
              label="Enter phone number"
            />
            {/* <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Password"
              type="password"
            /> */}

            <TextField
              helperText=""
              id="demo-helper-text-misaligned"
              label="Enter username"
            />
            <TextField
              id="demo-helper-text-misaligned-no-helper"
              label="Enter Password"
              type="password"
            />

            <button type="submit" className="btn_2 flex">
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword_2">
              Forgot your password? <a href="#">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
