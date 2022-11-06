import React from "react";
import Item from "./Item";
import data from "../data";
import ErrorBoundary from "../ErrorBoundary";
import { Helmet } from "react-helmet-async";

const itemsMap = data.map((item) => {
  return <Item key={item.id} item={item} />;
});

export default function Counter() {
  return (
    <div className="store-body">
      <Helmet>
        <title>Counter</title>
        <meta
          name="description"
          content="Shop our limited products in limited quantities"
        />
      </Helmet>
      <ErrorBoundary>
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
      </ErrorBoundary>

      <ErrorBoundary>
        <div className="bottom-store-body">{itemsMap}</div>
      </ErrorBoundary>
    </div>
  );
}
