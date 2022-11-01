import React from "react";
import useCounter from "../hooks/useCounter";

export default function Item(props) {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <div className="">
      <div className="item-wrap">
        <img className="item-img" src={props.item.imgUrl} alt="" />

        <div className="item-wrap-right">
          <h2 className="item-title">{props.item.title}</h2>
          <p>{props.item.description}</p>
          <h2 className="item-price">{props.item.price}</h2>

          <div className="counter">
            <button onClick={decrement}>-</button>
            <span className="count">{count}</span>
            {/* <input type="text" name="" id="" value={} className=""/> */}
            <button onClick={increment}>+</button>
            <span>
              <img
                onClick={reset}
                className="reset"
                src="images/reset.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
