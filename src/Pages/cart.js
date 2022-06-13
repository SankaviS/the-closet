import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteCart } from "../redux/actions/index";
import { Link } from "react-router-dom";
import { DeleteTwoTone } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";

const Cart = () => {
  const state = useSelector((state) => state.Handlecart);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(DeleteCart(item));
  };
  const cartItems = (cart) => {
    return (
      <div style={{ marginTop: "60px" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-200">
            <div class="card">
              <div class="card-body ">
                <div class="row">
                  <div class="col-lg-7">
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                          <div>
                            <img
                              src={cart.image}
                              class="img-fluid rounded-3"
                              alt="Shopping item"
                              style={{ width: "65px" }}
                            />
                          </div>
                          <div class="ms-3">
                            <h5>{cart.pname}</h5>
                            <p class="small mb-0">{cart.description}</p>
                          </div>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                          <div style={{ width: "50px" }}>
                            <h5 class="fw-normal mb-0">1</h5>
                          </div>
                          <div style={{ width: "80px" }}>
                            <h5 class="mb-0">rs.{cart.price}</h5>
                          </div>

                          <button
                            style={{ color: "red" }}
                            onClick={() => handleClose(cart)}
                          >
                            <DeleteTwoTone />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div class="container  h-100">
        <div class="row align-items-center h-200">
          <h1 style={{ marginTop: "5rem" }}> </h1>{" "}
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <Button
        variant="contained"
        style={{ margin: "6rem", backgroundColor: "rgb(228, 209, 187)" }}
      >
        <Link style={{ color: "black" }} to="/checkout">
          proceed to checkout
        </Link>
      </Button>
    );
  };

  return (
    <div style={{ marginTop: "10rem" }}>
      <div class="container  h-100">
        <div class="row d-flex justify-content-center align-items-center h-200">
          <h5>
            <Link to="/home" class="text-body">
              <ArrowBackIcon />
              Continue shopping
            </Link>
          </h5>
          <p class="mb-1 mt-3">Shopping cart</p>
          <p class="mb-0">You have {state.length} items in your cart</p>
        </div>
      </div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && button()}
    </div>
  );
};

export default Cart;
