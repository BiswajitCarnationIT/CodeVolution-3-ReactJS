import React, { Component } from "react";
import ComponentC from "./Component/ComponentC";
import DataFetching from "./Component/DataFetching2";
import IntervalHookCounter from "./Component/IntervalHookCounter";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Biswajit"}>
        <ChannelContext.Provider value={"CodeVolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
