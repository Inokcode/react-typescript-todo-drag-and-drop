import React from "react";
import logo from "./logo.svg";
import "./App.css";

//let hellofunction: (name: string) => never; //void return undifine never return any thing
//insted of void u can use unknown
//type can use with primitive types but interface cant use

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">Taskify</span>
    </div>
  );
};

export default App;
