import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ReducerStore from "./components/ReducerStore";
import Counter from "./components/Counter";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/ReducerStore" element={<ReducerStore />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
