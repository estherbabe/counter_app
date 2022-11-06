import React from "react";
import useCounter from "../hooks/useCounter";

export default function ItemTwo(props) {
  const [count, increment, decrement, reset, setValue] = useCounter();
  if (count === 6) {
    throw new Error("Crashed!!!");
  }

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
            <button onClick={increment}>+</button>
            <button onClick={setValue}>+5</button>
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
