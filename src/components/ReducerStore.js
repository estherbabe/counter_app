import React from "react";
import ItemTwo from "./ItemTwo";
import data from "../data";
import ErrorBoundary from "../ErrorBoundary";
import { Helmet } from "react-helmet-async";

const itemsMap = data.map((item) => {
  return <ItemTwo key={item.id} item={item} />;
});

const ReducerStore = () => {
  return (
    <div className="store-body">
      <Helmet>
        <title>Reducer</title>
        <meta
          name="description"
          content="Specify how many products you want by the using the customer counter"
        />
        <link rel="canonical" href="/ReducerStore" />
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
};

export default ReducerStore;
