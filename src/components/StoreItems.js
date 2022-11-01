import React from "react";
import Item from "./Item";
import data from "../data";

const itemsMap = data.map((item) => {
  return <Item key={item.id} item={item} />;
});

export default function StoreItems() {
  return (
    <div className="store-body">
      <div className="top-store-body">
        <div className="input-wrap">
          <img className="search" src="images/search.png" alt="" />
          <input
            type="text"
            name=""
            id=""
            placeholder="what are you shopping for?"
          />
        </div>
      </div>

      <div className="bottom-store-body">{itemsMap}</div>
    </div>
  );
}
