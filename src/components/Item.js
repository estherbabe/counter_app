import React from "react";

export default function Item() {
  return (
    <div className="bottom-store-body">
      <div className="item-wrap">
        <img className="item-img" src="images/product-2.jpg" alt="" />

        <div className="item-wrap-right">
          <h2 className="item-title">
            Placerat Duis Ultricies Lacus Sed Turpis Tincidunt
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu
            dictum varius duis at consectetur lorem donec.
          </p>
          <h2 className="item-price">NGN 5,500.00</h2>

          <div className="counter">
            <button>+</button>
            <span className="count">0</span>
            <button>-</button>
            <span>
              <img className="reset" src="images/reset.png" alt="" />
            </span>
          </div>
        </div>
      </div>

      <hr />
    </div>
  );
}
