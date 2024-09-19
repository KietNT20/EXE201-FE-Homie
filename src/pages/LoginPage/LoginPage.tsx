import InputText from "@/components/InputText/InputText";
import { PATH } from "@/constant/path";
import { Person } from "@mui/icons-material";
import { Card, CardContent, Grid2, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/submarine.jpg";

const LoginPage = () => {
  return (
    <div className="container py-32">
      <div className="loginForm">
        <div className="login-wrap">
          <div className="loginForm__left">
            <figure className="loginForm__left-img">
              <img src={imgLogo} alt="" />
            </figure>
            <div className="loginForm__left-bottom">
              <span className="text">Don't have an account?</span>{" "}
              <Link to={PATH.REGISTER}>
                <button className="btn_signup ">Sign up</button>
              </Link>
            </div>
          </div>
          <Card className="loginForm__right">
            <CardContent>
              <div className="loginForm__right-content">
                <Typography variant="h3">SIGN IN</Typography>
              </div>
              <form action="" className="loginForm__right-form">
                <Grid2 container spacing={1}>
                  <Grid2 size={12}>
                    <InputText
                      label="Email"
                      type="text"
                      placeholder="Please enter your email"
                      size="medium"
                    />
                  </Grid2>
                  <Grid2 size={12}>
                    <InputText label={"Password"} type="password" />
                  </Grid2>
                  <Grid2 size={12}>
                    <button type="submit" className="btn-login">
                      <span>Login</span>
                    </button>
                    <span className="forgotPassword">
                      Forgot your password? <a href="#">Click Here</a>
                    </span>
                  </Grid2>
                </Grid2>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
