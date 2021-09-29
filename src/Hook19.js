import React, { Component } from "react";
import ComponentC from "./Component/ComponentC";
import Counter1 from "./Component/Counter1";


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <Counter1/>
    </div>
  );
}

export default App;
