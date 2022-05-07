import React from "react";
import "./../styles/login.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const Login = () => {
  return (
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex align-items-center justify-content-center h-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://www.ieltsidpindia.com/images/login_bg.png"
              class="img-fluid"
              alt="Phone "
            />
          </div>
          <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1 mt-5">
            <form>
              <div class="form-outline mb-2">
                <input
                  type="email"
                  id="form1Example13"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form1Example13">
                  Email address
                </label>
              </div>

              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="form1Example23">
                  Password
                </label>
              </div>

              <div class="d-flex justify-content-around align-items-center mb-4">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label class="form-check-label" for="form1Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" class="text-secondary">
                  Forgot password?
                </a>
              </div>

              <button type="submit" class="btn btn-secondary btn-lg btn-block">
                Sign in
              </button>

              <div class="divider d-flex align-items-center my-4">
                <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>
              <div class="d-grid gap-2">
                <a
                  class="btn btn-secondary btn-lg btn-block"
                  href="https://twitter.com/i/flow/login"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  <FacebookIcon />
                  Continue with Facebook
                </a>

                <a
                  class="btn btn-secondary btn-lg btn-block"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  role="button"
                >
                  <TwitterIcon />
                  Continue with Twitter
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
