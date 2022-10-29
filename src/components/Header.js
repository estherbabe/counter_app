import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="top-header">
        <div className="left-side">
          <span className="avatar">TF</span>
          <span>The Fashion Store</span>
          <span>
            <img src="images/star.png" alt="" /> 0(0)
          </span>
        </div>

        <div className="right-side">
          <p>welcome to my store</p>
          <span></span>
          <span>
            <img src="images/cart.png" alt="" />
          </span>
        </div>
      </div>

      <div className="bottom-header">
        <div className="input-wrap">
          <img src="images/search.png" alt="" />
          <input type="text" name="" id="" />
        </div>
      </div>
    </div>
  );
}
