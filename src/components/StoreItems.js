import React from "react";
import Item from "./Item";

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

      <div className="">
        <Item />
      </div>
    </div>
  );
}
