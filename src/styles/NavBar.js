import React from "react";
import CheckroomTwoToneIcon from "@mui/icons-material/CheckroomTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import ContactSupportSharpIcon from "@mui/icons-material/ContactSupportSharp";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const NavBar = () => {
  const state = useSelector((state) => state.Handlecart);
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-custom ">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/home">
          The <CheckroomTwoToneIcon /> Closet
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/men">
                men
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/women">
                women
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/kids">
                kids
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/beauty">
                beauty
              </Link>
            </li>
          </ul>
          <span class="navbar-text">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  <ContactSupportSharpIcon />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/login">
                  <AccountCircleTwoToneIcon />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/cart">
                  <ShoppingCartRoundedIcon />
                  <span> {state.length}</span>
                </Link>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
