import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="top-header">
        <div className="left-side">
          <span className="avatar">TF</span>
          <span className="header-title">The Fashion Store</span>
          <span className="rating">
            <img className="star" src="images/star.png" alt="" /> 0(0)
          </span>
        </div>

        <div className="right-side">
          <p>welcome to my store</p>
          <span></span>
          <span className="cart-span">
            <img className="cart" src="images/cart.png" alt="" />
            Cart
          </span>
        </div>
      </div>
    </div>
  );
}
