import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav></nav>
      <div className="top-header">
        <div className="left-side">
          <span className="avatar">TC</span>
          <Link to="/" className="header-title">
            <span>The Counter Store</span>
          </Link>

          <span className="rating">
            <img className="star" src="images/star.png" alt="" /> 0(0)
          </span>
        </div>

        <div className="right-side">
          <Link className="right-side-link" to="ReducerStore">
            link to reducer store
          </Link>
          <span className="cart-span">
            <img className="cart" src="images/cart.png" alt="" />
            Cart
          </span>
        </div>
      </div>
    </div>
  );
}
