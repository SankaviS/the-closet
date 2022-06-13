import React from "react";
import { Link } from "react-router-dom";
import CheckroomTwoToneIcon from "@mui/icons-material/CheckroomTwoTone";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div style={{ backgroundcolor: "rgb(228, 209, 187)", marginTop: "5vh" }}>
      <footer class="bg-dark text-center text-white">
        <div class="container p-3">
          <section class="mb-4">
            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <FacebookIcon />
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://twitter.com/i/flow/login"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <TwitterIcon />
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://www.google.com/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <GoogleIcon />
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://www.instagram.com/?hl=en"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <InstagramIcon />
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <LinkedInIcon />
            </a>

            <a
              class="btn btn-outline-light btn-floating m-1"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              role="button"
            >
              <GitHubIcon />
            </a>
          </section>

          <section class="">
            <form action="">
              <div class="row d-flex justify-content-center">
                <div class="col-auto">
                  <p class="pt-2">
                    <p>Sign up for our newsletter</p>
                  </p>
                </div>

                <div class="col-md-5 col-12">
                  <div class="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      class="form-control"
                    />
                    <label class="form-label" for="form5Example21">
                      Email address
                    </label>
                  </div>
                </div>

                <div class="col-auto">
                  <button type="submit" class="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section class="mb-4">
            <p>
              You can have anything you want in life if your dress for it
              <CheckroomTwoToneIcon />
            </p>
          </section>

          <section class="">
            <div class="row">
              <div class="col-lg-7 col-md-6 mb-4 mb-md-0">
                <h3 class="text-uppercase">Products</h3>

                <ul class="list-unstyled mb-0">
                  <li>
                    <Link to="/men" class="text-white">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link to="/women" class="text-white">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link to="/kids" class="text-white">
                      Kids
                    </Link>
                  </li>
                  <li>
                    <Link to="/beauty" class="text-white">
                      Beauty
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h3 class="text-uppercase">Let Us Help You</h3>

                <ul class="list-unstyled mb-0">
                  <li>
                    <Link to="/login" class="text-white">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" class="text-white">
                      Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" class="text-white">
                      contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div
          class="text-center p-3"
          style={{ backgroundcolor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <Link class="text-white" to="/home">
            TheCloset.com
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
